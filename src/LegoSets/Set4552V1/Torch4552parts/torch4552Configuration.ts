import { ModelConfiguration } from "../../../Types/ModelTypes";
import { cargoCrain4552TorchModelBlocks } from "./torch4552ModelBlocks";
// @ts-expect-error Not a type
import set4552TorchModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Torch4552/Markers.glb";
import { torchModelAfterPhaseEndArrangementFunction } from "./torchModelAfterPhaseEndArrangementFunctions";
export const torch4552Configuration: ModelConfiguration = {
  modelName: "Torch4552Model",
  modelMarkers: set4552TorchModelMarkers,
  modelBlocks: cargoCrain4552TorchModelBlocks,
  afterPhaseEndArraignmentFunction: torchModelAfterPhaseEndArrangementFunction,
  //arrangementFunction: steamLocomotive7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.009",
      arraignmentFunctionName: "changeHoseNozzlePhase",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 6,
      arraignmentFunctionName: "arrangeHoseNozzlePhase",
    },
    {
      phaseId: 8,
      arraignmentFunctionName: "arrangeHoseNozzlePhase",
    },
  ],
};
