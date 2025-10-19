import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4552CraneBoomModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CraneBoom4552/Markers.glb";
import { craneBoom4552ModelBlocks } from "./craneBoom4552ModelBlocks";

export const craneBoom4552Configuration: ModelConfiguration = {
  modelName: "CrainBoom4552Model",
  modelMarkers: set4552CraneBoomModelMarkers,
  modelBlocks: craneBoom4552ModelBlocks,
  isPartialModel: true,
  completeModelId: "CompleteCargoCrain4552Model",
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
