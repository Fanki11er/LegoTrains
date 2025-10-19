import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import {
  closeAllHingeTrainGates,
  rotateCoalCartLoadingSpace,
} from "./coalCart4564helperFunctions";

export const coalCart4564ModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => {
  switch (functionName) {
    case "rotateCoalCartLoadingSpace":
      return rotateCoalCartLoadingSpace(model, -45);

    case "closeAllHingeTrainGates":
      return closeAllHingeTrainGates(model);
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in loadingRamp4564ModelAfterPhaseEndArrangementFunction.`
  );
};
