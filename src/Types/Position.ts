import { Vector3 } from "@react-three/fiber";
import { Quaternion } from "three";

export type Position = {
  position: Vector3;
  rotation: Quaternion;
};
