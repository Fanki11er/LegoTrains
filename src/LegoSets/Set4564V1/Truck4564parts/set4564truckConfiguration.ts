import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564truckModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/Truck4564/Markers.glb";
import { set4564truckModelBlocks } from "./set4564TruckModelBlocks";
import { truckModelArrangementFunction } from "./truck4564ModelArrangementFunction";

export const set4564truckConfiguration: ModelConfiguration = {
  modelName: "Truck4564Model",
  modelMarkers: set4564truckModelMarkers,
  modelBlocks: set4564truckModelBlocks,
  arrangementFunction: truckModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.031",
      arraignmentFunctionName: "rotateHingeHookSliderBase",
    },
    {
      markerId: "ModelMarker.032",
      arraignmentFunctionName: "changeRubberBandPhaseAfterConnection",
    },
    {
      markerId: "ModelMarker.033",
      arraignmentFunctionName:
        "rotateHingeHookSliderBaseAndChangeRubberBandPhase",
    },
    {
      markerId: "ModelMarker.035",
      arraignmentFunctionName: "stretchRubberBand",
    },
    {
      markerId: "ModelMarker.052",
      arraignmentFunctionName: "connectStringToTruckWinch",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [],
};
