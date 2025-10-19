import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4552PlatformCartModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/PlatformCart4552/Markers.glb";
import { platformCart4552WorkshopModelBlocks } from "./platformCart4552ModelBlocks";

export const platformCart4552Configuration: ModelConfiguration = {
  modelName: "PlatformCart4552Model",
  modelMarkers: set4552PlatformCartModelMarkers,
  modelBlocks: platformCart4552WorkshopModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
