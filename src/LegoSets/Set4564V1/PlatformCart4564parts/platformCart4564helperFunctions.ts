import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

const {
  rotateConnectedElements,
  findElementConnectedToMarker,
  rotateElementOnZAxis,
} = ArrangementFunctionsHelper;

export const rotatePlatform = (model: Object3D<Object3DEventMap>) => {
  rotateConnectedElements(
    model,
    "ModelMarker.028",
    [
      "ModelMarker.029",
      "ModelMarker.030",
      "ModelMarker.031",
      "ModelMarker.032",
      "ModelMarker.033",
    ],
    "Y",
    -90
  );
  return [];
};

export const turnBlockadeUp = (model: Object3D<Object3DEventMap>) => {
  rotateConnectedElements(
    model,
    "ModelMarker.035",
    ["ModelMarker.036"],
    "Z",
    -90
  );
  return [];
};

export const openHingeTrainGate = (model: Object3D<Object3DEventMap>) => {
  const hingeTrainGate = findElementConnectedToMarker(model, "ModelMarker.030");

  rotateElementOnZAxis(hingeTrainGate, -120);

  return [];
};
