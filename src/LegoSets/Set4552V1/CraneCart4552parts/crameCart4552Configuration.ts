import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552CraneCartModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CraneCart4552/Markers.glb";
import { craneCart4552ModelBlocks } from "./craneCart4552ModelBlocks";

export const craneCart4552Configuration: ModelConfiguration = {
  modelName: "CrainCart4552Model",
  modelMarkers: set4552CraneCartModelMarkers,
  modelBlocks: craneCart4552ModelBlocks,
  isPartialModel: true,
  completeModelId: "CompleteCargoCrain4552Model",
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
