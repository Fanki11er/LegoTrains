import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564loadingRampModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/LoadingRamp4564/Markers.glb";
import { loadingRamp4564ModelAfterPhaseEndArrangementFunction } from "./loadingRamp4564ModelAfterPhaseEndArrangementFunctions";
import { set4564loadingRampModelBlocks } from "./set4564loadingRampModelBlocks";

export const set4564loadingRampConfiguration: ModelConfiguration = {
  modelName: "LoadingRamp4564Model",
  modelMarkers: set4564loadingRampModelMarkers,
  modelBlocks: set4564loadingRampModelBlocks,
  afterPhaseEndArraignmentFunction:
    loadingRamp4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 6,
      arraignmentFunctionName: "lowerTheRamp",
    },
  ],
};
