import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564coalCartModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/CoalCart4564/Markers.glb";

import { set4564coalCartModelBlocks } from "./set4564platformCartModelBlocks";

export const set4564coalCartConfiguration: ModelConfiguration = {
  modelName: "CoalCart4564Model",
  modelMarkers: set4564coalCartModelMarkers,
  modelBlocks: set4564coalCartModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    //Todo Phase 9
  ],
};
