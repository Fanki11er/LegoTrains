import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564truckModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/Truck4564/Markers.glb";
import { set4564truckModelBlocks } from "./set4564TruckModelBlocks";
import { truck4564ModelAfterPhaseEndArrangementFunction } from "./truckModelAfterPhaseEndArrangementFunctions";

export const set4564truckConfiguration: ModelConfiguration = {
  modelName: "Truck4564Model",
  modelMarkers: set4564truckModelMarkers,
  modelBlocks: set4564truckModelBlocks,
  afterPhaseEndArraignmentFunction:
    truck4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    //   {
    //   markerId: "ModelMarker.048",
    //   arraignmentFunctionName: "hideStringModelAndChangePhaseInWinch",
    // },
    //!! 9
    //   {
    //   markerId: "ModelMarker.048",
    //   arraignmentFunctionName: "hideStringModelAndChangePhaseInWinch",
    // },
    //!! 11
  ],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 4,
      arraignmentFunctionName: "closeCarContainerHingeTrainGates",
    },
    //!! 9
  ],
};
