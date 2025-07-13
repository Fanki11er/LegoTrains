import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552CrainBoomModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CrainBoom4552/Markers.glb";
import { crainBoom4552ModelBlocks } from "./crainBoom4552ModelBlocks";

export const crainBoom4552Configuration: ModelConfiguration = {
  modelName: "CrainBoom4552Model",
  modelMarkers: set4552CrainBoomModelMarkers,
  modelBlocks: crainBoom4552ModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
