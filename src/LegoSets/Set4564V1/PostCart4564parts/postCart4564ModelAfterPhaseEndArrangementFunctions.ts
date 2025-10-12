import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import {
  closeAllSlidingPostCartDoors,
  moveTrolleyToPostCart,
  rotatePostCartLoadingSpace,
} from "./postCart4564helperFunctions";
import { Scene } from "three";

export const postCart4564ModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string,
  scene?: Scene
) => {
  switch (functionName) {
    case "rotatePostCartLoadingSpace":
      return rotatePostCartLoadingSpace(model, -45);
    case "moveTrolleyToPostCart": {
      return moveTrolleyToPostCart(model, scene);
    }
    case "closeAllSlidingPostCartDoors": {
      return closeAllSlidingPostCartDoors(model);
    }
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in loadingRamp4564ModelAfterPhaseEndArrangementFunction.`
  );
};
