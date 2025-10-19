import { ModelConfiguration } from "../../../Types/ModelTypes";
import set7722ForkliftTrailerModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/ForkliftTrailer7722/Markers.glb";
import { steamLocomotive7722ForkliftTrailerModelBlocks } from "./forkliftTrailer7722";

export const forkliftTrailer7722Configuration: ModelConfiguration = {
  modelName: "ForkliftTrailer7722Model",
  modelMarkers: set7722ForkliftTrailerModelMarkers,
  modelBlocks: steamLocomotive7722ForkliftTrailerModelBlocks,
  arrangementFunction: undefined,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
