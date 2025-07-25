import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { Scene } from "three";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { rotateCrainBlockadeHandle } from "./helperFunctions";

const {
  throwErrorIfElementIsMissing,
  movePartialModelToCompletedModel,
  findElementByName,
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

  const cargoCrainCabinModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainCabin4552Model"
  );

  const cargoCrainBoomModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainBoom4552Model"
  );

  const cargoCrainCartModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainCart4552Model"
  );

  const finishCrainCartConnection = movePartialModelToCompletedModel(
    model,
    cargoCrainCartModel!,
    "CompleteModelMarker003"
  );

  const finishCrainCabinConnection = movePartialModelToCompletedModel(
    model,
    cargoCrainCabinModel!,
    "CompleteModelMarker001"
  );

  const finishCrainBoomConnection = movePartialModelToCompletedModel(
    model,
    cargoCrainBoomModel!,
    "CompleteModelMarker002"
  );

  rotateCrainBlockadeHandle(
    cargoCrainCartModel!,
    ["ModelMarker.010", "ModelMarker.012"],
    [-85, 85]
  );

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
