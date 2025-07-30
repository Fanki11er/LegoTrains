import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";

export const postCar7722ModelArrangementFunction: ModelArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  ArrangementFunctionsHelper.rotateCoupling(
    model,
    -17,
    "ModelMarker.007",
    "ModelMarker.009"
  );
  movePostCarSlidingDoor(model, -42);

  return {
    touchedModels: [],
    status: "success",
  };
};

const movePostCarSlidingDoor = (
  model: Object3D<Object3DEventMap>,
  distance: number
) => {
  const door = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.085"
  );

  door.translateX(distance);
};
