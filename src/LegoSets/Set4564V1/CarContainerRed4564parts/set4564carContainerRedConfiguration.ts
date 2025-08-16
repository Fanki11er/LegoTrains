import { ModelConfiguration } from "../../../Types/ModelTypes";

// @ts-expect-error Not a type
import set4564carContainerRedModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/CarContainerRed4564/Markers.glb";
import { carContainerRed4564ModelAfterPhaseEndArrangementFunction } from "./carContainerRedModelAfterPhaseEndArrangementFunctions";
import { set4564carContainerRedModelBlocks } from "./set4564carContainerRedModelBlocks";

export const set4564carContainerRedConfiguration: ModelConfiguration = {
  modelName: "CarContainerRed4564Model",
  modelMarkers: set4564carContainerRedModelMarkers,
  modelBlocks: set4564carContainerRedModelBlocks,
  afterPhaseEndArraignmentFunction:
    carContainerRed4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 4,
      arraignmentFunctionName: "closeCarContainerHingeTrainGates",
    },
  ],
};
