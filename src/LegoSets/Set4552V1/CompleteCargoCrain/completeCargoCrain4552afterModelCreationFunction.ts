import { Object3D, Object3DEventMap, Scene } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import {
  changeWinchPhaseFunction,
  moveInnerCrainBoomArmToPlace,
  rotateCrainBoomHandle,
} from "./helperFunctions";

const {
  throwErrorIfElementIsMissing,
  movePartialModelToCompletedModel,
  findModelRootMarker,
  findElementByName,
} = ArrangementFunctionsHelper;

export const completeCargoCrain4552afterModelCreationFunction = (
  model?: Object3D<Object3DEventMap>,
  scene?: Scene
): ArraignmentFunctionResult => {
  throwErrorIfElementIsMissing(
    model,
    "Model is missing in completeCargoCrain4552afterModelCreationFunction"
  );

  throwErrorIfElementIsMissing(
    scene,
    "Scene is missing in completeCargoCrain4552afterModelCreationFunction"
  );
  const sceneRootMarker = findElementByName(scene!, "SceneRootMarker");

  const crainBoomModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainBoom4552Model"
  );

  const crainCabinModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainCabin4552Model"
  );

  const finishCrainCabinConnection = movePartialModelToCompletedModel(
    model!,
    crainCabinModel!,

    "CompleteModelMarker.001"
  );

  const finishCrainBoomConnection = movePartialModelToCompletedModel(
    model!,
    crainBoomModel!,
    "CompleteModelMarker.002"
  );

  moveInnerCrainBoomArmToPlace(crainBoomModel!, 25, "ModelMarker.024");

  changeWinchPhaseFunction(crainCabinModel!, "ModelMarker.047");

  rotateCrainBoomHandle(
    crainBoomModel!,
    [
      "ModelMarker.013",
      "ModelMarker.014",
      "ModelMarker.015",
      "ModelMarker.016",
      "ModelMarker.021",
      "ModelMarker.022",
    ],
    "ModelMarker.012",
    140
  );

  moveElementToFloorLevel(model!);

  finishCrainBoomConnection();
  finishCrainCabinConnection();

  return {
    touchedModels: ["CrainCabin4552Model", "CrainBoom4552Model"],
    status: "success",
  };
};
