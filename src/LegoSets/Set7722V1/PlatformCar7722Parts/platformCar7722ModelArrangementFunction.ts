import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunction } from "../../../Types/ArrangementFunction";

export const platformCar7722ModelArrangementFunction: ArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  ArrangementFunctionsHelper.rotateCoupling(
    model,
    -6,
    "ModelMarker.013",
    "ModelMarker.015"
  );
  return [];
};
