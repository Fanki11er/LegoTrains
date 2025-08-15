import { ModelConfiguration } from "../../../Types/ModelTypes";

// @ts-expect-error Not a type
import set4564trolleyModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/Trolley4564/Markers.glb";
import { set4564trolleyModelBlocks } from "./set4564trolleyModelBlocks";

export const set4564trolleyConfiguration: ModelConfiguration = {
  modelName: "Trolley4564Model",
  modelMarkers: set4564trolleyModelMarkers,
  modelBlocks: set4564trolleyModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
