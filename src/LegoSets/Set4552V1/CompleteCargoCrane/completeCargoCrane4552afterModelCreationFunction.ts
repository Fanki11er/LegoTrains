import { Object3D, Object3DEventMap, Scene } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import {
  changeWinchPhaseFunction,
  moveInnerCraneBoomArmToPlace,
  rotateCraneBoomHandle,
} from "./helperFunctions";

const {
  throwErrorIfElementIsMissing,
  movePartialModelToCompletedModel,
  findModelRootMarker,
  findElementByName,
} = ArrangementFunctionsHelper;

export const completeCargoCrane4552afterModelCreationFunction = (
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

  const craneBoomModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainBoom4552Model"
  );

  const craneCabinModel = findModelRootMarker(
    sceneRootMarker!,
    "CrainCabin4552Model"
  );

  const finishCraneCabinConnection = movePartialModelToCompletedModel(
    model!,
    craneCabinModel!,

    "CompleteModelMarker.001"
  );

  const finishCraneBoomConnection = movePartialModelToCompletedModel(
    model!,
    craneBoomModel!,
    "CompleteModelMarker.002"
  );

  moveInnerCraneBoomArmToPlace(craneBoomModel!, 25, "ModelMarker.024");

  changeWinchPhaseFunction(craneCabinModel!, "ModelMarker.047");

  rotateCraneBoomHandle(
    craneBoomModel!,
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

  finishCraneBoomConnection();
  finishCraneCabinConnection();

  return {
    touchedModels: ["CrainCabin4552Model", "CrainBoom4552Model"],
    status: "success",
  };
};
