import { ModelConfiguration } from "../../../Types/ModelTypes";
import { cargoCrain4552CarModelBlocks } from "./car4552ModelBlocks";
import { carModelAfterPhaseEndArrangementFunction } from "./carModelAfterPhaseEndArrangementFunctions";
// @ts-expect-error Not a type
import set4552CarModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Car4552/Markers.glb";

export const car4552Configuration: ModelConfiguration = {
  modelName: "Car4552Model",
  modelMarkers: set4552CarModelMarkers,
  modelBlocks: cargoCrain4552CarModelBlocks,
  afterPhaseEndArraignmentFunction: carModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.036",
      arraignmentFunctionName: "minifigArms45DegForward",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 10,
      arraignmentFunctionName: "rotateTileWithTelemetryPanel30degOnZ",
    },
    // {
    //   phaseId: 8,
    //   arraignmentFunctionName: "arrangeHoseNozzlePhase",
    // },
  ],
};
