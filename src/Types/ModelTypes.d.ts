import { PartsArraignmentFunctionsTypes } from "../Utilities/partsAfterConnectionFunctions";
import { AfterModelCreationFunction } from "./ArrangementFunction";
import { ModelBlock } from "./ModelBlock";

export type ArraignmentFunctionRegistrationEntry = {
  markerId: string;
  arraignmentFunctionName: PartsArraignmentFunctionsTypes;
};

export type AfterPhaseEndArraignmentFunctionRegistrationEntry = {
  phaseId: number;
  arraignmentFunctionName: AfterPhaseEndArraignmentFunctionsTypes;
};

export type ModelConfiguration = {
  modelName: string;
  modelMarkers: string;
  modelBlocks: ModelBlock[];
  arrangementFunction?: (model: Object3D<Object3DEventMap>) => string[];
  afterModelCreationFunction?: AfterModelCreationFunction;
  afterPhaseEndArraignmentFunction?: AfterPhaseEndArraignmentFunction;
  afterConnectArraignmentFunctionsNames: ArraignmentFunctionRegistrationEntry[];
  afterPhaseEndArraignmentFunctionsNames: AfterPhaseEndArraignmentFunctionRegistrationEntry[];
};
