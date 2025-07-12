import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552CrainCartModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CrainCart4552/Markers.glb";
import { crainCabin4552ModelBlocks } from "./crainCabin4552ModelBlocks";

export const crainCabin4552Configuration: ModelConfiguration = {
  modelName: "CrainCabin4552Model",
  modelMarkers: set4552CrainCartModelMarkers,
  modelBlocks: crainCabin4552ModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
