import { ModelConfiguration } from "../../../Types/ModelTypes";
import set7722LoadingRampModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/LoadingRamp7722/Markers.glb";
import { loadingRamp7722ModelArrangementFunction } from "./loadingPlatform7722ModelArrangementFunction";
import { steamLocomotive7722LoadingRampModelBlocks } from "./loadingRamp7722";

export const loadingRamp7722Configuration: ModelConfiguration = {
  modelName: "LoadingRamp7722Model",
  modelMarkers: set7722LoadingRampModelMarkers,
  modelBlocks: steamLocomotive7722LoadingRampModelBlocks,
  arrangementFunction: loadingRamp7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.026",
      arraignmentFunctionName: "rightArmForward60deg",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [],
};
