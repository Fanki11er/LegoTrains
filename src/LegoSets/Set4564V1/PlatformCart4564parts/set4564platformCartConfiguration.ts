import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564platformCartModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/PlatformCart4564/Markers.glb";
import { platformCart4564ModelAfterPhaseEndArrangementFunction } from "./platformCart4564ModelAfterPhaseEndArrangementFunctions";
import { set4564platformCartModelBlocks } from "./set4564platformCartModelBlocks";

export const set4564platformCartConfiguration: ModelConfiguration = {
  modelName: "PlatformCart4564Model",
  modelMarkers: set4564platformCartModelMarkers,
  modelBlocks: set4564platformCartModelBlocks,
  afterPhaseEndArraignmentFunction:
    platformCart4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 8,
      arraignmentFunctionName: "closeHingeTrainGate",
    },
  ],
};
