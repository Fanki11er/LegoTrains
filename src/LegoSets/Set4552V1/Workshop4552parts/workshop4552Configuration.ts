import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4552WorkshopModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Workshop4552/Markers.glb";
import { workshop4552ModelArrangementFunction } from "./workshop4552ModelArrangementFunction";
import { cargoCrain4552WorkshopModelBlocks } from "./workshop4552ModelBlocks";

export const workshop4552Configuration: ModelConfiguration = {
  modelName: "Workshop4552Model",
  modelMarkers: set4552WorkshopModelMarkers,
  modelBlocks: cargoCrain4552WorkshopModelBlocks,
  arrangementFunction: workshop4552ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.021",
      arraignmentFunctionName: "rotateSmallAntenna30DegBackward",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [],
};
