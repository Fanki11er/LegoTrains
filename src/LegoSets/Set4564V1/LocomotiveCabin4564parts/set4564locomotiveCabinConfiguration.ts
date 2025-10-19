import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564locomotiveCabinModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/LocomotiveCabin4564/Markers.glb";
import { set4564locomotiveCabinModelBlocks } from "./set4564locomotiveCabinModelBlocks";

export const set4564locomotiveCabinConfiguration: ModelConfiguration = {
  modelName: "LocomotiveCabin4564Model",
  modelMarkers: set4564locomotiveCabinModelMarkers,
  modelBlocks: set4564locomotiveCabinModelBlocks,
  isPartialModel: true,
  completeModelId: "Locomotive4564Model",
  doNotCountAsModel: true,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
