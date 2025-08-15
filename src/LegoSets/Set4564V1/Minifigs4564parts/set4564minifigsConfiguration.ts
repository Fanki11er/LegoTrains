import { ModelConfiguration } from "../../../Types/ModelTypes";

// @ts-expect-error Not a type
import set4564MinifigsModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/Minifigs4564/Markers.glb";
import { set4564minifigsModelBlocks } from "./set4564minifigsModelBlocks";

export const set4564minifigsConfiguration: ModelConfiguration = {
  modelName: "Minifigs4564Model",
  modelMarkers: set4564MinifigsModelMarkers,
  modelBlocks: set4564minifigsModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
  doNotCountAsModel: true,
};
