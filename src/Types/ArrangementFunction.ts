import { Object3D, Object3DEventMap, Scene } from "three";

export type ArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  modelRootMarker?: Object3D<Object3DEventMap>
) => string[];

export type ModelArraignmentFunction = (
  modelRootMarker: Object3D<Object3DEventMap>
) => string[];

export type AfterPhaseEndArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => string[];

export type AfterModelCreationFunction = (
  model?: Object3D<Object3DEventMap>,
  scene?: Scene
) => string[];
