import {
  Group,
  Mesh,
  Object3D,
  Object3DEventMap,
  Quaternion,
  Vector3,
} from "three";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useState } from "react";
import { NestElementUserData } from "../../../Types/NestElementUserData";

type NestProps = {
  marker: Object3D<Object3DEventMap>;
  mesh: Mesh | Group;
};

const Nest = (props: NestProps) => {
  const { marker, mesh } = props;
  const [isHovered, setIsHovered] = useState(false);

  const rotation = new Quaternion();
  rotation.setFromRotationMatrix(marker.matrixWorld);

  const position = new Vector3();
  position.setFromMatrixPosition(marker.matrixWorld);

  const renderMesh = (mesh: Mesh) => {
    return (
      <mesh
        name="Nest"
        geometry={mesh.geometry.clone()}
        material={nestMaterial.clone()}
        material-color={isHovered ? "green" : "blue"}
        position={position}
        quaternion={rotation}
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
        <group>
          {mesh.children.map((child) => {
            return renderMesh(child as Mesh);
          })}
        </group>
      );
    }
  };

  return render(mesh);
};

export default Nest;
