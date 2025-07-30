import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { Scene } from "three";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { rotateCraneBlockadeHandle } from "./helperFunctions";

const {
  throwErrorIfElementIsMissing,
  movePartialModelToCompletedModel,
  findElementByName,
  findModelRootMarker,
} = ArrangementFunctionsHelper;

export const completeCargoCraneModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string,
  scene?: Scene
) => {
  switch (functionName) {
    case "ConnectAndArrangeCraneCartToCraneCompleteModel":
      return connectAndArrangeCraneCartToCraneCompleteModel(model, scene);
    default: {
      throw new Error(
        `Function ${functionName} is not registered for phase ${phaseId} in completeCargoCraneModelAfterPhaseEndArrangementFunction.`
      );
    }
  }
};

const connectAndArrangeCraneCartToCraneCompleteModel = (
  model: Object3D<Object3DEventMap>,
  scene?: Scene
): ArraignmentFunctionResult => {
  throwErrorIfElementIsMissing(
    model,
    "Model is missing in connectCraneCartToCraneCompleteModel"
  );
  throwErrorIfElementIsMissing(
    scene,
    "Scene is missing in connectCraneCartToCraneCompleteModel"
  );

  const sceneRootMarker = findElementByName(scene!, "SceneRootMarker");

  const cargoCraneCabinModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainCabin4552Model"
  );

  const cargoCraneBoomModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainBoom4552Model"
  );

  const cargoCraneCartModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainCart4552Model"
  );

  const finishCraneCartConnection = movePartialModelToCompletedModel(
    model,
    cargoCraneCartModel!,
    "CompleteModelMarker.003"
  );

  const finishCraneCabinConnection = movePartialModelToCompletedModel(
    model,
    cargoCraneCabinModel!,
    "CompleteModelMarker.001"
  );

  const finishCraneBoomConnection = movePartialModelToCompletedModel(
    model,
    cargoCraneBoomModel!,
    "CompleteModelMarker.002"
  );

  rotateCraneBlockadeHandle(
    cargoCraneCartModel!,
    ["ModelMarker.010", "ModelMarker.012"],
    [-85, 85]
  );

  moveElementToFloorLevel(model!);

  finishCraneCartConnection();
  finishCraneCabinConnection();
  finishCraneBoomConnection();

  return {
    touchedModels: [
      "CrainCart4552Model",
      "CrainCabin4552Model",
      "CrainBoom4552Model",
    ],
    status: "success",
  };
};
