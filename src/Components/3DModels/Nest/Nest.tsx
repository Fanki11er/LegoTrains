import { Group, Mesh, Object3D, Object3DEventMap } from "three";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useEffect, useRef, useState } from "react";
import { NestElementUserData } from "../../../Types/NestElementUserData";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import usePersistanceDataProvider from "../../../Hooks/usePersistenceDataProvider";

type NestProps = {
  marker: Object3D<Object3DEventMap>;
  mesh: Mesh | Group;
};

const Nest = (props: NestProps) => {
  const { marker, mesh } = props;
  const [isHovered, setIsHovered] = useState(false);
  const nestRef = useRef<Group>(null!);
  const { handleFinishPartConnection } = useTrainInstruction();
  const { handleSaveModelDataToDatabase } = usePersistanceDataProvider();

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

  const renderMesh = (mesh: Mesh) => {
    return (
      <mesh
        key={mesh.uuid}
        name="Nest"
        geometry={mesh.geometry}
        material={nestMaterial.clone()}
        material-opacity={isHovered ? 0.5 : 0}
        material-color="blue"
        position={marker.position}
        quaternion={marker.quaternion}
        userData={{ markerId: marker.id } as NestElementUserData}
        onPointerEnter={() => {
          setIsHovered(true);
        }}
        onPointerLeave={() => {
          setIsHovered(false);
        }}
      />
    );
  };

  const render = (mesh: Mesh | Group) => {
    if (mesh.type === "Mesh") {
      return renderMesh(mesh as Mesh);
    } else if (mesh.type === "Group") {
      return (
        <>
          {mesh.children.map((child) => {
            return renderMesh(child as Mesh);
          })}
        </>
      );
    }
  };

  return (
    <group
      ref={nestRef}
      onClick={(e) => {
        e.stopPropagation();
        if (nestRef.current) {
          const nest = e.object;

          if (marker.parent) {
            mesh.position.copy(nest.position);
            mesh.quaternion.copy(nest.quaternion);
            marker.parent.add(mesh);
            mesh.userData.isConnected = true;
            const isPhaseFinished = handleFinishPartConnection(marker);
            if (isPhaseFinished) {
              handleSaveModelDataToDatabase();
            }
          }
        }
      }}
    >
      {render(mesh)}
    </group>
  );
};

export default Nest;
