import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552WorkshopModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Workshop4552/Markers.glb";
import { cargoCrain4552WorkshopModelBlocks } from "./workshop4552ModelBlocks";

export const workshop4552Configuration: ModelConfiguration = {
  modelName: "Workshop4552Model",
  modelMarkers: set4552WorkshopModelMarkers,
  modelBlocks: cargoCrain4552WorkshopModelBlocks,
  //afterPhaseEndArraignmentFunction:
  afterConnectArraignmentFunctionsNames: [
    // {
    //   markerId: "ModelMarker.036",
    //   arraignmentFunctionName: "minifigArms45DegForward",
    // },
  ],
  afterPhaseEndArraignmentFunctionsNames: [
    // {
    //   phaseId: 10,
    //   arraignmentFunctionName: "rotateTileWithTelemetryPanel30degOnZ",
    // },
    // {
    //   phaseId: 8,
    //   arraignmentFunctionName: "arrangeHoseNozzlePhase",
    // },
  ],
};
