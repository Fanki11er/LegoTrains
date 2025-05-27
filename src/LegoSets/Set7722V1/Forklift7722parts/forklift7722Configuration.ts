import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set7722ForkliftModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/Forklift7722/Markers.glb";
import { steamLocomotive7722ForkliftModelBlocks } from "./forklift7722";
import { forklift7722ModelArrangementFunction } from "./forklift7722ModelArrangementFunction";

export const forklift7722Configuration: ModelConfiguration = {
  modelName: "Forklift7722Model",
  modelMarkers: set7722ForkliftModelMarkers,
  modelBlocks: steamLocomotive7722ForkliftModelBlocks,
  arrangementFunction: forklift7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [
    {
      markerId: "ModelMarker.044",
      arraignmentFunctionName: "minifigSit",
    },
    {
      markerId: "ModelMarker.045",
      arraignmentFunctionName: "minifigArms60DegForward",
    },
  ],
};
