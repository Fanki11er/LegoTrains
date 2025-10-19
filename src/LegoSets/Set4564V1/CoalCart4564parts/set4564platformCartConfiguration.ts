import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564coalCartModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/CoalCart4564/Markers.glb";
import { coalCart4564ModelAfterPhaseEndArrangementFunction } from "./coalCart4564ModelAfterPhaseEndArrangementFunctions";
import { coalCart4564ModelArrangementFunction } from "./coalCart4564ModelArrangementFunction";

import { set4564coalCartModelBlocks } from "./set4564platformCartModelBlocks";

export const set4564coalCartConfiguration: ModelConfiguration = {
  modelName: "CoalCart4564Model",
  modelMarkers: set4564coalCartModelMarkers,
  modelBlocks: set4564coalCartModelBlocks,
  arrangementFunction: coalCart4564ModelArrangementFunction,
  afterPhaseEndArraignmentFunction:
    coalCart4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 9,
      arraignmentFunctionName: "rotateCoalCartLoadingSpace",
    },
    {
      phaseId: 14,
      arraignmentFunctionName: "closeAllHingeTrainGates",
    },
  ],
};
