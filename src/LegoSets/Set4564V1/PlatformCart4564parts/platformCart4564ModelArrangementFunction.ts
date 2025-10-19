import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  openHingeTrainGate,
  rotatePlatform,
  turnBlockadeUp,
} from "./platformCart4564helperFunctions";

const {
  findModelRootMarker,
  moveModelToNewPositionInScene,
  throwErrorIfElementIsMissing,
  rotateCoupling,
} = ArrangementFunctionsHelper;

export const platformCart4564ModelArrangementFunction: ModelArraignmentFunction =
  (
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

    rotateCoupling(model!, -4, "ModelMarker.005", "ModelMarker.007");

    turnBlockadeUp(model);

    rotatePlatform(model);

    openHingeTrainGate(model);

    const carContainerRed = findModelRootMarker(
      sceneRootMarker,
      "CarContainerRed4564Model"
    );

    moveModelToNewPositionInScene(
      carContainerRed!,
      "SceneHelperMarker.019",
      sceneRootMarker
    );

    return {
      touchedModels: ["CarContainerRed4564Model"],
      status: "success",
    };
  };
