import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552CrainCabinModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CrainCabin4552/Markers.glb";
import { crainCabin4552ModelBlocks } from "./crainCabin4552ModelBlocks";

export const crainCabin4552Configuration: ModelConfiguration = {
  modelName: "CrainCabin4552Model",
  modelMarkers: set4552CrainCabinModelMarkers,
  modelBlocks: crainCabin4552ModelBlocks,
  isPartialModel: true,
  completeModelId: "CompleteCargoCrain4552Model",
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.048",
      arraignmentFunctionName: "hideStringModelAndChangePhaseInWinch",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [],
};
