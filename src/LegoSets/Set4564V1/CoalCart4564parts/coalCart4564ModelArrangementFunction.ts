import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  moveCoalToYellowContainer,
  openRightSideCoalCartHingeGates,
  rotateCoalCartLoadingSpace,
} from "./coalCart4564helperFunctions";

const { throwErrorIfElementIsMissing } = ArrangementFunctionsHelper;

export const coalCart4564ModelArrangementFunction: ModelArraignmentFunction = (
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

  openRightSideCoalCartHingeGates(model);

  rotateCoalCartLoadingSpace(model, -68);

  moveCoalToYellowContainer(model, sceneRootMarker);

  return {
    touchedModels: [],
    status: "success",
  };
};
