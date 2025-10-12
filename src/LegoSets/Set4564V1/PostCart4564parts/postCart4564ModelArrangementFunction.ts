import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  moveMinifigToFinalPosition,
  movePostPackagesToFinalPositions,
  moveTrolleyToFinalPosition,
  openSlidingDoor,
  rotatePostCartLoadingSpace,
} from "./postCart4564helperFunctions";

const { throwErrorIfElementIsMissing } = ArrangementFunctionsHelper;

export const postCart4564ModelArrangementFunction: ModelArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  throwErrorIfElementIsMissing(
    model,
    "Model is missing in connectCraneCartToCraneCompleteModel"
  );

  throwErrorIfElementIsMissing(
    sceneRootMarker,
    "Scene root marker is missing in connectCraneCartToCraneCompleteModel"
  );

  openSlidingDoor(model, "ModelMarker.080", -50);

  rotatePostCartLoadingSpace(model, -60);

  movePostPackagesToFinalPositions(model, sceneRootMarker);

  moveTrolleyToFinalPosition(model, sceneRootMarker);

  moveMinifigToFinalPosition(model, sceneRootMarker);

  return {
    touchedModels: ["Trolley4564Model", "Minifigs4564Model"],
    status: "success",
  };
};
