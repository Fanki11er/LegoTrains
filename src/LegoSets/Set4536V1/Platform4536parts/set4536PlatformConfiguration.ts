import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4536platformModelMarkers from "../../../assets/Set_4536_V1/ModelsMarkers/Platform4536/Markers.glb";
import { platform4536ModelArrangementFunction } from "./platform4536ModelArrangementFunction";
import { set4536platformModelBlocks } from "./set4536PlatformModelBlocks";

export const set4536platformConfiguration: ModelConfiguration = {
  modelName: "Platform4536Model",
  modelMarkers: set4536platformModelMarkers,
  modelBlocks: set4536platformModelBlocks,
  arrangementFunction: platform4536ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
