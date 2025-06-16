import { Group, Mesh, Object3D, Object3DEventMap } from "three";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useEffect, useMemo, useRef } from "react";
import { NestElementUserData } from "../../../Types/NestElementUserData";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import usePersistenceDataProvider from "../../../Hooks/usePersistenceDataProvider";
import { useSpringValue, animated } from "@react-spring/three";
import useDetectMobile from "../../../Hooks/useDetectMobile";

type NestProps = {
  marker: Object3D<Object3DEventMap>;
  mesh: Mesh | Group;
};

const Nest = (props: NestProps) => {
  const { marker, mesh } = props;
  const nestRef = useRef<Group>(null!);
  const {
    handleFinishPartConnection,
    handleArrangePartAfterConnection,
    handleGetShouldByHelperVisible,
  } = useTrainInstruction();
  const { handleSaveModelDataToDatabase } = usePersistenceDataProvider();

  const isMobile = useDetectMobile();

  const opacity = useSpringValue(isMobile ? 0.8 : 0, {
    config: {
      duration: 200,
    },
  });

  const material = useMemo(() => {
    const material = nestMaterial.clone();
    const shouldByHelperVisible = handleGetShouldByHelperVisible();
    shouldByHelperVisible && opacity.start(0.8);
    return material;
  }, [handleGetShouldByHelperVisible, opacity]);

  useEffect(() => {
    const nest = nestRef.current;

    if (marker.parent && nest) {
      if (marker.userData.afterConnectionArraignmentFunctionName) {
        handleArrangePartAfterConnection(
          nest.children[0],
          marker.userData.afterConnectionArraignmentFunctionName
        );
      }
      marker.parent.add(nest);
    }

    return () => {
      if (nest) {
        nest.removeFromParent();
      }
    };
  }, [marker, handleArrangePartAfterConnection]);

  const renderMultipartChildrenRecursively = (
    children: Object3D<Object3DEventMap>[]
  ) => {
    return children.map((child) => {
      const childMesh = child as Mesh;
      return (
        <animated.mesh
          key={child.uuid}
          name={childMesh.name}
          geometry={childMesh.geometry}
          position={child.position}
          quaternion={child.quaternion}
          material={material}
          material-opacity={opacity}
        >
          {renderMultipartChildrenRecursively(childMesh.children)}
        </animated.mesh>
      );
    });
  };

  const renderMesh = (mesh: Mesh, marker: Object3D) => {
    return (
      <animated.mesh
        key={mesh.uuid}
        name={mesh.name}
        geometry={mesh.geometry}
        material={material}
        position={marker.position}
        quaternion={marker.quaternion}
        userData={{ markerId: marker.id } as NestElementUserData}
        material-opacity={opacity}
        onPointerEnter={() => {
          if (!isMobile) {
            opacity.start(0.8);
          }
        }}
        onPointerLeave={() => {
          if (!isMobile) {
            opacity.start(0);
          }
        }}
      >
        {renderMultipartChildrenRecursively(mesh.children)}
      </animated.mesh>
    );
  };

  return (
    <group
      name="NestsGroup"
      ref={nestRef}
      onClick={(e) => {
        e.stopPropagation();
        if (nestRef.current) {
          const nest = nestRef.current.children[0];

          if (marker.parent && nest) {
            mesh.position.copy(nest.position);
            mesh.quaternion.copy(nest.quaternion);

            marker.parent.add(mesh);

            mesh.userData.isConnected = marker.userData.name;
            const isPhaseFinished = handleFinishPartConnection(marker);
            if (marker.userData.afterConnectionArraignmentFunctionName) {
              handleArrangePartAfterConnection(
                mesh,
                marker.userData.afterConnectionArraignmentFunctionName
              );
            }

            if (isPhaseFinished) {
              handleSaveModelDataToDatabase();
            }
          }
        }
      }}
    >
      {renderMesh(mesh as Mesh, marker)}
    </group>
  );
};

export default Nest;
