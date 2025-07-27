import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  changeHelmetPosition,
  changeWinchPhaseFunction,
  leverUpCraneBoom,
  moveCarToNewPosition,
  moveCraneOperatorToNewPosition,
  moveHookToNewPosition,
  moveHoseNozzleAndChangeHosePhase,
  moveInnerCrainBoomArmToPlace,
  moveSupportBaseToNewPosition,
  moveWorkerMinifigToNewPosition,
  rotateCartSupport,
  rotateCrainBlockadeHandle,
  rotateCrainBoomHandle,
  rotateCraneCabinAndBoom,
} from "./helperFunctions";

const {
  findModelRootMarker,
  movePartialModelToCompletedModel,
  throwErrorIfElementIsMissing,
  changeElementPosition,
} = ArrangementFunctionsHelper;

export const completeCargoCrain4552ModelArrangementFunction: ModelArraignmentFunction =
  (
    model: Object3D<Object3DEventMap>,
    sceneRootMarker: Object3D<Object3DEventMap>
  ) => {
    throwErrorIfElementIsMissing(
      model,
      "Model is missing in connectCrainCartToCrainCompleteModel"
    );
    throwErrorIfElementIsMissing(
      sceneRootMarker,
      "Scene root marker is missing in connectCrainCartToCrainCompleteModel"
    );

    const cargoCrainCabinModel = findModelRootMarker(
      sceneRootMarker,
      "CrainCabin4552Model"
    );

    const cargoCrainBoomModel = findModelRootMarker(
      sceneRootMarker,
      "CrainBoom4552Model"
    );

    const cargoCrainCartModel = findModelRootMarker(
      sceneRootMarker,
      "CrainCart4552Model"
    );

    const cargoCranePaletteModel = findModelRootMarker(
      sceneRootMarker,
      "Palette4552Model"
    );

    const cargoCraneCarModel = findModelRootMarker(
      sceneRootMarker,
      "Car4552Model"
    );

    const cargoCraneTorchModel = findModelRootMarker(
      sceneRootMarker,
      "Torch4552Model"
    );

    const finishCrainCartConnection = movePartialModelToCompletedModel(
      model,
      cargoCrainCartModel!,
      "CompleteModelMarker.003"
    );

    const finishCrainCabinConnection = movePartialModelToCompletedModel(
      model,
      cargoCrainCabinModel!,
      "CompleteModelMarker.001"
    );

    const finishCrainBoomConnection = movePartialModelToCompletedModel(
      model,
      cargoCrainBoomModel!,
      "CompleteModelMarker.002"
    );

    rotateCartSupport(
      cargoCrainCartModel!,
      "ModelMarker.022",
      "ModelMarker.023",
      90
    );
    rotateCartSupport(
      cargoCrainCartModel!,
      "ModelMarker.025",
      "ModelMarker.026",
      -90
    );
    rotateCartSupport(
      cargoCrainCartModel!,
      "ModelMarker.028",
      "ModelMarker.029",
      -90
    );
    rotateCartSupport(
      cargoCrainCartModel!,
      "ModelMarker.031",
      "ModelMarker.032",
      90
    );

    moveSupportBaseToNewPosition(
      cargoCranePaletteModel!,
      "ModelMarker.005",
      sceneRootMarker,
      "SceneHelperMarker.001"
    );
    moveSupportBaseToNewPosition(
      cargoCranePaletteModel!,
      "ModelMarker.006",
      sceneRootMarker,
      "SceneHelperMarker.002"
    );
    moveSupportBaseToNewPosition(
      cargoCranePaletteModel!,
      "ModelMarker.007",
      sceneRootMarker,
      "SceneHelperMarker.003"
    );
    moveSupportBaseToNewPosition(
      cargoCranePaletteModel!,
      "ModelMarker.008",
      sceneRootMarker,
      "SceneHelperMarker.004"
    );

    rotateCrainBlockadeHandle(
      cargoCrainCartModel!,
      ["ModelMarker.010", "ModelMarker.012"],
      [175, -175]
    );

    moveInnerCrainBoomArmToPlace(cargoCrainBoomModel!, -78, "ModelMarker.024");

    leverUpCraneBoom(cargoCrainBoomModel!, "ModelMarker.023", -28);

    rotateCrainBoomHandle(
      cargoCrainBoomModel!,
      [
        "ModelMarker.013",
        "ModelMarker.014",
        "ModelMarker.015",
        "ModelMarker.016",
        "ModelMarker.021",
        "ModelMarker.022",
      ],
      "ModelMarker.012",
      -5
    );

    changeWinchPhaseFunction(cargoCrainCabinModel!, "ModelMarker.047");

    rotateCraneCabinAndBoom(cargoCrainCabinModel!, cargoCrainBoomModel!, 180);

    moveHookToNewPosition(
      sceneRootMarker,
      model,
      "ModelMarker.001",
      ["ModelMarker.002", "ModelMarker.003"],
      "SceneHelperMarker.005"
    );

    moveCraneOperatorToNewPosition(
      sceneRootMarker,
      model,
      "SceneHelperMarker.006",
      {
        minifigHeapsMarkerId: "ModelMarker.004",
        minifigTorsoMarkerId: "ModelMarker.005",
        minifigHeadMarkerId: "ModelMarker.006",
        minifigHutMarkerId: "ModelMarker.007",
      }
    );

    moveCarToNewPosition(
      sceneRootMarker,
      cargoCraneCarModel!,
      "SceneHelperMarker.007"
    );

    moveWorkerMinifigToNewPosition(
      sceneRootMarker!,
      cargoCraneCarModel!,
      {
        minifigHeapsMarkerId: "ModelMarker.035",
        minifigTorsoMarkerId: "ModelMarker.036",
        minifigHeadMarkerId: "ModelMarker.037",
        minifigHutMarkerId: "ModelMarker.038",
      },
      "SceneHelperMarker.009"
    );

    moveHoseNozzleAndChangeHosePhase(
      sceneRootMarker,
      cargoCraneTorchModel!,
      "ModelMarker.009",
      "SceneHelperMarker.008"
    );

    changeHelmetPosition(
      sceneRootMarker,
      cargoCraneTorchModel!,
      {
        helmetMarkerId: "ModelMarker.013",
        helmetVisorMarkerId: "ModelMarker.014",
      },
      "SceneHelperMarker.010",
      -135
    );

    //?? Construction helmet
    changeElementPosition(
      sceneRootMarker,
      cargoCraneCarModel!,
      "ModelMarker.038",
      "SceneHelperMarker.011"
    );

    //?? Radio
    changeElementPosition(
      sceneRootMarker,
      cargoCraneCarModel!,
      "ModelMarker.039",
      "SceneHelperMarker.012"
    );

    //?? Hammer
    changeElementPosition(
      sceneRootMarker,
      cargoCraneCarModel!,
      "ModelMarker.021",
      "SceneHelperMarker.013"
    );

    //?? Wrench
    changeElementPosition(
      sceneRootMarker,
      cargoCraneCarModel!,
      "ModelMarker.022",
      "SceneHelperMarker.014"
    );

    finishCrainCartConnection();
    finishCrainCabinConnection();
    finishCrainBoomConnection();

    return {
      touchedModels: [
        "CrainCart4552Model",
        "CrainCabin4552Model",
        "CrainBoom4552Model",
        "Palette4552Model",
        "Car4552Model",
      ],
      status: "success",
    };
  };

// todo move hammer to new position
// todo move wrench to new position
