import { Object3D, Object3DEventMap } from "three";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  connectYellowContainerToTruck,
  openLeftTruckDoor,
} from "./truck4564helperFunctions";

export const truckModelArrangementFunction: ModelArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  openLeftTruckDoor(model);
  connectYellowContainerToTruck(sceneRootMarker);

  return {
    touchedModels: ["CarContainerYellow4564Model"],
    status: "success",
  };
};
