import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunction } from "../../../Types/ArrangementFunction";

export const postCar7722ModelArrangementFunction: ArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  ArrangementFunctionsHelper.rotateCoupling(
    model,
    -17,
    "ModelMarker.007",
    "ModelMarker.009"
  );
  movePostCarSlidingDoor(model, -42);

  return [];
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
