import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552completeCargoCrainModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CompleteCargoCrain4552/Markers.glb";
import { completeCargoCrain4552ModelBlocks } from "./completeCargoCrain4552ModelBlocks";
import { completeCargoCrain4552afterModelCreationFunction } from "./completeCargoCrain4552afterModelCreationFunction";
import { completeCargoCrainModelAfterPhaseEndArrangementFunction } from "./completeCargoCrainModelAfterPhaseEndArrangementFunction";

export const completeCargoCrain4552Configuration: ModelConfiguration = {
  modelName: "CompleteCargoCrain4552Model",
  modelMarkers: set4552completeCargoCrainModelMarkers,
  modelBlocks: completeCargoCrain4552ModelBlocks,
  afterModelCreationFunction: completeCargoCrain4552afterModelCreationFunction,
  afterPhaseEndArraignmentFunction:
    completeCargoCrainModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 1,
      arraignmentFunctionName: "ConnectAndArrangeCrainCartToCrainCompleteModel",
    },
  ],
};
