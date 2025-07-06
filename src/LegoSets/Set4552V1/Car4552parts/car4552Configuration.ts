import { ModelConfiguration } from "../../../Types/ModelTypes";
import { cargoCrain4552CarModelBlocks } from "./car4552ModelBlocks";
// @ts-expect-error Not a type
import set4552CarModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Car4552/Markers.glb";

export const car4552Configuration: ModelConfiguration = {
  modelName: "Car4552Model",
  modelMarkers: set4552CarModelMarkers,
  modelBlocks: cargoCrain4552CarModelBlocks,
  //afterPhaseEndArraignmentFunction: torchModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    // {
    //   markerId: "ModelMarker.009",
    //   arraignmentFunctionName: "changeHoseNozzlePhase",
    // },
  ],
  afterPhaseEndArraignmentFunctionsNames: [
    // {
    //   phaseId: 6,
    //   arraignmentFunctionName: "arrangeHoseNozzlePhase",
    // },
    // {
    //   phaseId: 8,
    //   arraignmentFunctionName: "arrangeHoseNozzlePhase",
    // },
  ],
};
