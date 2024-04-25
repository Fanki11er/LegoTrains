import {
  BufferGeometry,
  NormalBufferAttributes,
  Object3D,
  Object3DEventMap,
} from "three";
import { nestMaterial } from "../../../Materials/NestMaterial";
import { useState } from "react";

type NestProps = {
  marker: Object3D<Object3DEventMap>;
  geometry: BufferGeometry<NormalBufferAttributes>;
};

const NestV2 = (props: NestProps) => {
  const { marker, geometry } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <mesh
      geometry={geometry.clone()}
      material={nestMaterial.clone()}
      material-color={isHovered ? "green" : "blue"}
      position={marker.position}
      quaternion={marker.quaternion}
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
