import { ModelConfiguration } from "../../../Types/ModelTypes";

import set4564postCartModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/PostCart4564/Markers.glb";
import { postCart4564ModelAfterPhaseEndArrangementFunction } from "./postCart4564ModelAfterPhaseEndArrangementFunctions";
import { postCart4564ModelArrangementFunction } from "./postCart4564ModelArrangementFunction";
import { set4564postCartModelBlocks } from "./set4564postCartModelBlocks";

export const set4564postCartConfiguration: ModelConfiguration = {
  modelName: "PostCart4564Model",
  modelMarkers: set4564postCartModelMarkers,
  modelBlocks: set4564postCartModelBlocks,
  arrangementFunction: postCart4564ModelArrangementFunction,
  afterPhaseEndArraignmentFunction:
    postCart4564ModelAfterPhaseEndArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [
    { phaseId: 9, arraignmentFunctionName: "rotatePostCartLoadingSpace" },
    { phaseId: 13, arraignmentFunctionName: "moveTrolleyToPostCart" },
    { phaseId: 14, arraignmentFunctionName: "closeAllSlidingPostCartDoors" },
  ],
};

//Todo fix overlapping elements
