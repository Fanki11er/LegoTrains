import {
  BufferGeometry,
  NormalBufferAttributes,
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
  geometry: BufferGeometry<NormalBufferAttributes>;
};

const NestV2 = (props: NestProps) => {
  const { marker, geometry } = props;
  const [isHovered, setIsHovered] = useState(false);

  const rotation = new Quaternion();
  rotation.setFromRotationMatrix(marker.matrixWorld);

  const position = new Vector3();
  position.setFromMatrixPosition(marker.matrixWorld);

  return (
    <mesh
      name="Nest"
      geometry={geometry.clone()}
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

export default NestV2;
