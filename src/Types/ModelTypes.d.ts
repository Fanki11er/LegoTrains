import { PartsArraignmentFunctionsTypes } from "../Utilities/partsAfterConnectionFunctions";
import {
  AfterModelCreationFunction,
  AfterPhaseEndArraignmentFunction,
} from "./ArrangementFunction";
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
  isPartialModel?: boolean;
  completeModelId?: string;
  arrangementFunction?: ModelArraignmentFunction;
  afterModelCreationFunction?: AfterModelCreationFunction;
  afterPhaseEndArraignmentFunction?: AfterPhaseEndArraignmentFunction;
  afterConnectArraignmentFunctionsNames: ArraignmentFunctionRegistrationEntry[];
  afterPhaseEndArraignmentFunctionsNames: AfterPhaseEndArraignmentFunctionRegistrationEntry[];
};
