import { ModelConfiguration } from "../../../Types/ModelTypes";
import set7722BatteryCarModelMarkers from "../../../assets/Set_7722_V1/ModelsMarkers/BatteryCar7722/Markers.glb";
import { steamLocomotive7722BatteryCarModelBlocks } from "./batteryCar7722";
import { batteryCar7722ModelArrangementFunction } from "./batteryCarModelArrangementFunction";

export const batteryCar7722Configuration: ModelConfiguration = {
  modelName: "BatteryCar7722Model",
  modelMarkers: set7722BatteryCarModelMarkers,
  modelBlocks: steamLocomotive7722BatteryCarModelBlocks,
  arrangementFunction: batteryCar7722ModelArrangementFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
