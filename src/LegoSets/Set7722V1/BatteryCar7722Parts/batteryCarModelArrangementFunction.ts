import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

const { throwErrorIfElementIsMissing, rotateElementOnYAxis } =
  ArrangementFunctionsHelper;

export const batteryCar7722ModelArrangementFunction = (
  model: Object3D<Object3DEventMap>
) => {
  rotateCoupling(model);
  return [];
};

const rotateCoupling = (model: Object3D<Object3DEventMap>) => {
  const coupling = model.getObjectByName("Coupling002");

  throwErrorIfElementIsMissing(coupling, "Coupling element is missing");

  rotateElementOnYAxis(coupling!, -5);
};
