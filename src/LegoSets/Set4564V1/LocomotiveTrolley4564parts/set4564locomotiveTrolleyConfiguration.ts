import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564locomotiveTrolleyModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/LocomotiveTrolley4564/Markers.glb";
import { set4564locomotiveTrolleyModelBlocks } from "./set4564locomotiveTrolleyModelBlocks";

export const set4564locomotiveTrolleyConfiguration: ModelConfiguration = {
  modelName: "LocomotiveTrolley4564Model",
  modelMarkers: set4564locomotiveTrolleyModelMarkers,
  modelBlocks: set4564locomotiveTrolleyModelBlocks,
  isPartialModel: true,
  completeModelId: "Locomotive4564Model",
  doNotCountAsModel: true,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
