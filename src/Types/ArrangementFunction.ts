import { Object3D, Object3DEventMap } from "three";

export type ArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => string[];
