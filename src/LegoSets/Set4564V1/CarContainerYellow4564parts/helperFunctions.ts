import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
const {
  findElementConnectedToMarker,
  rotateElementOnXAxis,
  rotateElementOnYAxis,
  rotateElementOnZAxis,
} = ArrangementFunctionsHelper;

export const rotateHingeTrainGate = (
  rootMarker: Object3D<Object3DEventMap>,
  elementSlotId: string,
  axis: "X" | "Y" | "Z",
  degree: number
) => {
  const hingeGate = findElementConnectedToMarker(rootMarker, elementSlotId);

  switch (axis) {
    case "X":
      rotateElementOnXAxis(hingeGate, degree);
      break;
    case "Y":
      rotateElementOnYAxis(hingeGate, degree);
      break;
    case "Z":
      rotateElementOnZAxis(hingeGate, degree);
      break;
  }
};
