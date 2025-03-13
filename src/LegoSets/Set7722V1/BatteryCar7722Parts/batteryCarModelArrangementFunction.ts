import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

export const batteryCar7722ModelArrangementFunction = (
  model: Object3D<Object3DEventMap>
) => {
  rotateCoupling(model);
};

const rotateCoupling = (model: Object3D<Object3DEventMap>) => {
  const coupling = model.getObjectByName("Coupling002");

  if (!coupling) {
    console.log("Coupling element not found");
    return;
  }

  ArrangementFunctionsHelper.rotateElementOnYAxis(coupling, -5);
};
