import { ModelConfiguration } from "../../../Types/ModelTypes";
import { steamLocomotive7722LocomotiveModelBlocks } from "./steamLocomotive7722";
import { steamLocomotive7722ModelArrangementFunction } from "./steamLocomotive7722ModelArrangementFunction";
// @ts-expect-error Not a type
import set7722LocomotiveModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/SteamLocomotive7722/Markers.glb";

export const steamLocomotive7722Configuration: ModelConfiguration = {
  modelName: "SteamLocomotive7722Model",
  modelMarkers: set7722LocomotiveModelMarkers,
  modelBlocks: steamLocomotive7722LocomotiveModelBlocks,
  arrangementFunction: steamLocomotive7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.100",
      arraignmentFunctionName: "rightLeg30Forward",
    },
    {
      markerId: "ModelMarker.102",
      arraignmentFunctionName: "rotateHead30Left",
    },
    {
      markerId: "ModelMarker.103",
      arraignmentFunctionName: "rotateHat30Left",
    },
  ],
  afterPhaseEndArraignmentFunctionsNames: [],
};
