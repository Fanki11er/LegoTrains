import { ModelBlock } from "./ModelBlock";

export type ArraignmentFunctionRegistrationEntry = {
  markerId: string;
  arraignmentFunctionName: PartsArraignmentFunctionsTypes;
};

export type ModelConfiguration = {
  modelName: string;
  modelMarkers: string;
  modelBlocks: ModelBlock[];
  arrangementFunction?: (model: Object3D<Object3DEventMap>) => string[];
  afterConnectArraignmentFunctionsNames: ArraignmentFunctionRegistrationEntry[];
};
