import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4536blueHopperModelMarkers from "../../../assets/Set_4536_V1/ModelsMarkers/BlueHopper4536/Markers.glb";
import { blueHopper4536ModelArrangementFunction } from "./blueHopper4536ModelArrangementFunction";
import { set4536blueHopperModelBlocks } from "./set4536BlueHopperModelBlocks";

export const set4536blueHopperConfiguration: ModelConfiguration = {
  modelName: "BlueHopper4536Model",
  modelMarkers: set4536blueHopperModelMarkers,
  modelBlocks: set4536blueHopperModelBlocks,
  arrangementFunction: blueHopper4536ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
