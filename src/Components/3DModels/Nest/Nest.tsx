import { Color, Group, Mesh, Object3D, Object3DEventMap } from "three";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useEffect, useMemo, useRef, useState } from "react";
import { NestElementUserData } from "../../../Types/NestElementUserData";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import usePersistenceDataProvider from "../../../Hooks/usePersistenceDataProvider";

type NestProps = {
  marker: Object3D<Object3DEventMap>;
  mesh: Mesh | Group;
};

const Nest = (props: NestProps) => {
  const { marker, mesh } = props;
  const [isHovered, setIsHovered] = useState(false);
  const nestRef = useRef<Group>(null!);
  const { handleFinishPartConnection, handleArrangePartAfterConnection } =
    useTrainInstruction();
  const { handleSaveModelDataToDatabase } = usePersistenceDataProvider();

  const material = useMemo(() => {
    const material = nestMaterial.clone();
    material.opacity = isHovered ? 0.5 : 0;
    material.color = new Color("blue");
    return material;
  }, [isHovered]);

  useEffect(() => {
    const nest = nestRef.current;
    if (marker.parent && nest) {
      marker.parent.add(nest);
    }

    return () => {
      if (nest) {
        nest.removeFromParent();
      }
    };
  }, [marker]);

  const renderMultipartChildrenRecursively = (
    children: Object3D<Object3DEventMap>[]
  ) => {
    return children.map((child) => {
      const childMesh = child as Mesh;
      return (
        <mesh
          key={child.uuid}
          geometry={childMesh.geometry}
          position={
            child.type === "Group" ? childMesh.position : child.position
          }
          quaternion={
            child.type === "Group" ? childMesh.quaternion : child.quaternion
          }
          material={material}
        >
          {renderMultipartChildrenRecursively(childMesh.children)}
        </mesh>
      );
    });
  };

  const renderMesh = (mesh: Mesh) => {
    return (
      <mesh
        key={mesh.uuid}
        name="Nest"
        geometry={mesh.geometry}
        material={material}
        position={marker.position}
        quaternion={marker.quaternion}
        userData={{ markerId: marker.id } as NestElementUserData}
        onPointerEnter={() => {
          setIsHovered(true);
        }}
        onPointerLeave={() => {
          setIsHovered(false);
        }}
      >
        {renderMultipartChildrenRecursively(mesh.children)}
      </mesh>
    );
  };

  return (
    <group
      name="NestsGroup"
      ref={nestRef}
      onClick={(e) => {
        e.stopPropagation();
        if (nestRef.current) {
          const nest = nestRef.current.getObjectByName("Nest");

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
      {renderMesh(mesh as Mesh)}
    </group>
  );
};

export default Nest;
