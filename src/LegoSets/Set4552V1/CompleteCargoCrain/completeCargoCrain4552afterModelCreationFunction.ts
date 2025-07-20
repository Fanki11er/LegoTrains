import { Object3D, Object3DEventMap, Scene } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

const {
  changeWinchPhase,
  throwErrorIfElementIsMissing,
  findElementConnectedToMarker,
  findElementByName,
  movePartialModelToCompletedModel,
  findModelRootMarker,
  attachModelToNewParent,
  rotateElementOnYAxis,
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

  const finishCrainCabinConnection = movePartialModelToCompletedModel(
    model!,
    sceneRootMarker!,
    "CrainCabin4552Model",
    "CompleteModelMarker001"
  );

  moveElementToFloorLevel(model!);

  const finishCrainBoomConnection = movePartialModelToCompletedModel(
    model!,
    sceneRootMarker!,
    "CrainBoom4552Model",
    "CompleteModelMarker002"
  );

  moveInnerCrainBoomArmToPlace(model!);

  changeWinchPhaseFunction(model!);

  rotateCrainBoomHandle(
    model!,
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

  finishCrainCabinConnection();
  finishCrainBoomConnection();

  return {
    touchedModels: ["CrainCabin4552Model", "CrainBoom4552Model"],
    status: "success",
  };
};

const moveInnerCrainBoomArmToPlace = (model: Object3D<Object3DEventMap>) => {
  const crainBoomModel = findModelRootMarker(model, "CrainBoom4552Model");

  const innerCrainBoomArm = findElementConnectedToMarker(
    crainBoomModel!,
    "ModelMarker.024"
  );
  innerCrainBoomArm.position.setX(innerCrainBoomArm.position.x + 25);
};

const changeWinchPhaseFunction = (model: Object3D<Object3DEventMap>) => {
  const crainCabinModel = findModelRootMarker(model, "CrainCabin4552Model");
  const winch = findElementConnectedToMarker(
    crainCabinModel!,
    "ModelMarker.047"
  );

  changeWinchPhase(winch);
};

const rotateCrainBoomHandle = (
  model: Object3D<Object3DEventMap>,
  elementsMarkersList: string[],
  pivotElementMarkerId: string,
  angle: number
) => {
  const crainBoomModel = findModelRootMarker(model, "CrainBoom4552Model");
  const pivotElement = findElementConnectedToMarker(
    crainBoomModel!,
    pivotElementMarkerId
  );

  const elements = elementsMarkersList.map((markerId) =>
    findElementConnectedToMarker(crainBoomModel!, markerId)
  );

  elements.forEach((element) => {
    attachModelToNewParent(element, pivotElement);
  });

  rotateElementOnYAxis(pivotElement, angle);

  elements.forEach((element) => {
    attachModelToNewParent(element, crainBoomModel!);
  });
};
