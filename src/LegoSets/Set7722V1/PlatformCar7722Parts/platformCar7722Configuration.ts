import { ModelConfiguration } from "../../../Types/ModelTypes";
import { steamLocomotive7722PlatformCarModelBlocks } from "./platformCar7722";
import { platformCar7722ModelArrangementFunction } from "./platformCar7722ModelArrangementFunction";
// @ts-expect-error Not a type
import set7722PlatformCarModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/PlatformCar7722/Markers.glb";

export const platformCar7722Configuration: ModelConfiguration = {
  modelName: "PlatformCar7722Model",
  modelMarkers: set7722PlatformCarModelMarkers,
  modelBlocks: steamLocomotive7722PlatformCarModelBlocks,
  arrangementFunction: platformCar7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
