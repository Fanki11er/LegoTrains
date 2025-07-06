import { Object3D, Object3DEventMap } from "three";

export type ArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => string[];

export type AfterPhaseEndArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => string[];
