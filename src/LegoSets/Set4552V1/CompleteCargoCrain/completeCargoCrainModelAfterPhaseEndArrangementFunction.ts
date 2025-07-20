import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { Scene } from "three";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

const {
  findElementConnectedToMarker,
  throwErrorIfElementIsMissing,
  movePartialModelToCompletedModel,
  findElementByName,
  rotateElementOnXAxis,
  findModelRootMarker,
} = ArrangementFunctionsHelper;

export const completeCargoCrainModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string,
  scene?: Scene
) => {
  switch (functionName) {
    case "ConnectAndArrangeCrainCartToCrainCompleteModel":
      return connectAndArrangeCrainCartToCrainCompleteModel(model, scene);
    default: {
      throw new Error(
        `Function ${functionName} is not registered for phase ${phaseId} in completeCargoCrainModelAfterPhaseEndArrangementFunction.`
      );
    }
  }
};

//Todo fix loading data from database (add used models to array)

const connectAndArrangeCrainCartToCrainCompleteModel = (
  model: Object3D<Object3DEventMap>,
  scene?: Scene
): ArraignmentFunctionResult => {
  throwErrorIfElementIsMissing(
    model,
    "Model is missing in connectCrainCartToCrainCompleteModel"
  );
  throwErrorIfElementIsMissing(
    scene,
    "Scene is missing in connectCrainCartToCrainCompleteModel"
  );

  const sceneRootMarker = findElementByName(scene!, "SceneRootMarker");

  const finishCrainCartConnection = movePartialModelToCompletedModel(
    model,
    sceneRootMarker!,
    "CrainCart4552Model",
    "CompleteModelMarker003"
  );

  const finishCrainCabinConnection = movePartialModelToCompletedModel(
    model,
    sceneRootMarker!,
    "CrainCabin4552Model",
    "CompleteModelMarker001"
  );

  const finishCrainBoomConnection = movePartialModelToCompletedModel(
    model,
    sceneRootMarker!,
    "CrainBoom4552Model",
    "CompleteModelMarker002"
  );

  rotateCrainBlockadeHandleUp(model);

  moveElementToFloorLevel(model!);

  finishCrainCartConnection();
  finishCrainCabinConnection();
  finishCrainBoomConnection();

  return {
    touchedModels: [
      "CrainCart4552Model",
      "CrainCabin4552Model",
      "CrainBoom4552Model",
    ],
    status: "success",
  };
};

const rotateCrainBlockadeHandleUp = (model: Object3D<Object3DEventMap>) => {
  const rootCartMarker = findModelRootMarker(model, "CrainCart4552Model");

  const leftBlockadeHandle = findElementConnectedToMarker(
    rootCartMarker!,
    "ModelMarker.012"
  );

  const rightBlockadeHandle = findElementConnectedToMarker(
    rootCartMarker!,
    "ModelMarker.010"
  );

  rotateElementOnXAxis(leftBlockadeHandle, 85);
  rotateElementOnXAxis(rightBlockadeHandle, -85);
};
