import { ModelConfiguration } from "../../../Types/ModelTypes";

// @ts-expect-error Not a type
import set4564truckModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/Truck4564/Markers.glb";
import { set4564truckModelBlocks } from "./set4564TruckModelBlocks";
import { truck4564ModelAfterPhaseEndArrangementFunction } from "./truckModelAfterPhaseEndArrangementFunctions";

export const set4564truckConfiguration: ModelConfiguration = {
  modelName: "Truck4564Model",
  modelMarkers: set4564truckModelMarkers,
  modelBlocks: set4564truckModelBlocks,
  afterPhaseEndArraignmentFunction:
    truck4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 4,
      arraignmentFunctionName: "closeCarContainerHingeTrainGates",
    },
  ],
};
