import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4536platformModelMarkers from "../../../assets/Set_4536_V1/ModelsMarkers/Platform4536/Markers.glb";
import { set4536platformModelBlocks } from "./set4536PlatformModelBlocks";

export const set4536platformConfiguration: ModelConfiguration = {
  modelName: "Platform4536Model",
  modelMarkers: set4536platformModelMarkers,
  modelBlocks: set4536platformModelBlocks,
  //Todo Add arrangement functions
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
