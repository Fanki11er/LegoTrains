import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set7722PostCarModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/PostCar7722/Markers.glb";
import { steamLocomotive7722PostCarModelBlocks } from "./postCar7722";
import { postCar7722ModelArrangementFunction } from "./postCar7722ModelArrangementFunction";

export const postCar7722Configuration: ModelConfiguration = {
  modelName: "PostCar7722Model",
  modelMarkers: set7722PostCarModelMarkers,
  modelBlocks: steamLocomotive7722PostCarModelBlocks,
  arrangementFunction: postCar7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
