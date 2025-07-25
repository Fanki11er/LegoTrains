import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  leverUpCraneBoom,
  moveInnerCrainBoomArmToPlace,
  moveSupportBaseToNewPosition,
  rotateCartSupport,
  rotateCrainBlockadeHandle,
  rotateCrainBoomHandle,
} from "./helperFunctions";

const {
  findModelRootMarker,
  movePartialModelToCompletedModel,
  throwErrorIfElementIsMissing,
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
    console.log(sceneRootMarker);

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

    const paletteModel = findModelRootMarker(
      sceneRootMarker,
      "Palette4552Model"
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
      paletteModel!,
      "ModelMarker.005",
      sceneRootMarker,
      "SceneHelperMarker001"
    );
    moveSupportBaseToNewPosition(
      paletteModel!,
      "ModelMarker.006",
      sceneRootMarker,
      "SceneHelperMarker002"
    );
    moveSupportBaseToNewPosition(
      paletteModel!,
      "ModelMarker.007",
      sceneRootMarker,
      "SceneHelperMarker003"
    );
    moveSupportBaseToNewPosition(
      paletteModel!,
      "ModelMarker.008",
      sceneRootMarker,
      "SceneHelperMarker004"
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

    // finishCrainCartConnection();
    // finishCrainCabinConnection();
    // finishCrainBoomConnection();

    return {
      touchedModels: [
        "CrainCart4552Model",
        "CrainCabin4552Model",
        "CrainBoom4552Model",
      ],
      status: "success",
    };
  };

// todo change winch phase
// todo rotate crane cabin
// todo move hook to new position
// todo move car to new position
// todo: move minifig to crane cabin
// todo: rotate minifig arms
// todo: move radio to new position
// todo move minifig construction helmet to new position
// todo move minifig helmet to new position
// todo rotate helmet glass
// todo arrange minifig
// todo change torch phase
// todo move hammer to new position
// todo move wrench to new position
