import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552CrainCartModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CrainCart4552/Markers.glb";
import { crainCart4552ModelBlocks } from "./crainCart4552ModelBlocks";

export const crainCart4552Configuration: ModelConfiguration = {
  modelName: "CrainCart4552Model",
  modelMarkers: set4552CrainCartModelMarkers,
  modelBlocks: crainCart4552ModelBlocks,
  isPartialModel: true,
  completeModelId: "CompleteCargoCrain4552Model",
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
