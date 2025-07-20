import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";

export const platformCar7722ModelArrangementFunction: ModelArraignmentFunction =
  (model: Object3D<Object3DEventMap>) => {
    ArrangementFunctionsHelper.rotateCoupling(
      model,
      -6,
      "ModelMarker.013",
      "ModelMarker.015"
    );
    return {
      touchedModels: [],
      status: "success",
    };
  };
