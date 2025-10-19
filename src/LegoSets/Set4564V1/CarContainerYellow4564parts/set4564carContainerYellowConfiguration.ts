import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564carContainerYellowModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/CarContainerYellow4564/Markers.glb";
import { carContainerYellow4564ModelAfterPhaseEndArrangementFunction } from "./carContainerYellowModelAfterPhaseEndArrangementFunctions";
import { set4564carContainerYellowModelBlocks } from "./set4564carContainerYellowModelBlocks";

export const set4564carContainerYellowConfiguration: ModelConfiguration = {
  modelName: "CarContainerYellow4564Model",
  modelMarkers: set4564carContainerYellowModelMarkers,
  modelBlocks: set4564carContainerYellowModelBlocks,
  afterPhaseEndArraignmentFunction:
    carContainerYellow4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    {
      phaseId: 4,
      arraignmentFunctionName: "closeCarContainerHingeTrainGates",
    },
  ],
};
