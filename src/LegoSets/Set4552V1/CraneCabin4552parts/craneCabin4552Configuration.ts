import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4552CraneCabinModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CraneCabin4552/Markers.glb";
import { craneCabin4552ModelBlocks } from "./craneCabin4552ModelBlocks";

export const craneCabin4552Configuration: ModelConfiguration = {
  modelName: "CrainCabin4552Model",
  modelMarkers: set4552CraneCabinModelMarkers,
  modelBlocks: craneCabin4552ModelBlocks,
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
