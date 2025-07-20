import { Object3D, Object3DEventMap, Scene } from "three";

export type ArraignmentFunctionResult = {
  touchedModels: string[];
  status: "success" | "error";
};

export type ArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  modelRootMarker?: Object3D<Object3DEventMap>
) => string[];

export type ModelArraignmentFunction = (
  modelRootMarker: Object3D<Object3DEventMap>
) => ArraignmentFunctionResult;

export type AfterPhaseEndArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string,
  scene?: Scene
) => {
  touchedModels: string[];
  status: "success" | "error";
};

export type AfterModelCreationFunction = (
  model?: Object3D<Object3DEventMap>,
  scene?: Scene
) => ArraignmentFunctionResult;
