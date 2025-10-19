import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4552completeCargoCraneModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/CompleteCargoCrane4552/Markers.glb";
import { completeCargoCrane4552ModelArrangementFunction } from "./completeCargoCrane4552ModelArrangementFunction";
import { completeCargoCrane4552ModelBlocks } from "./completeCargoCrane4552ModelBlocks";
import { completeCargoCrane4552afterModelCreationFunction } from "./completeCargoCrane4552afterModelCreationFunction";
import { completeCargoCraneModelAfterPhaseEndArrangementFunction } from "./completeCargoCraneModelAfterPhaseEndArrangementFunction";

export const completeCargoCrane4552Configuration: ModelConfiguration = {
  modelName: "CompleteCargoCrain4552Model",
  modelMarkers: set4552completeCargoCraneModelMarkers,
  modelBlocks: completeCargoCrane4552ModelBlocks,
  doNotMoveToTheFloorLevel: true,
  isCollectiveModel: true,
  arrangementFunction: completeCargoCrane4552ModelArrangementFunction,
  afterModelCreationFunction: completeCargoCrane4552afterModelCreationFunction,
  afterPhaseEndArraignmentFunction:
    completeCargoCraneModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 1,
      arraignmentFunctionName: "ConnectAndArrangeCraneCartToCraneCompleteModel",
    },
  ],
};
