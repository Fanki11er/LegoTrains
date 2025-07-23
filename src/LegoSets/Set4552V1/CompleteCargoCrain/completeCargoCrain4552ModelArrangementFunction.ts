import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
const TRACKS_OFFSET = -9.6;

const {
  findElementConnectedToMarker,
  attachModelToNewParent,
  findElementByName,
  findModelRootMarker,
  movePartialModelToCompletedModel,
  throwErrorIfElementIsMissing,
  rotateElementOnYAxis,
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
      "SceneHelperMarker001",
      TRACKS_OFFSET
    );
    moveSupportBaseToNewPosition(
      paletteModel!,
      "ModelMarker.006",
      sceneRootMarker,
      "SceneHelperMarker002",
      TRACKS_OFFSET
    );
    moveSupportBaseToNewPosition(
      paletteModel!,
      "ModelMarker.007",
      sceneRootMarker,
      "SceneHelperMarker003",
      TRACKS_OFFSET
    );
    moveSupportBaseToNewPosition(
      paletteModel!,
      "ModelMarker.008",
      sceneRootMarker,
      "SceneHelperMarker004",
      TRACKS_OFFSET
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

const rotateCartSupport = (
  model: Object3D<Object3DEventMap>,
  supportMarkerId: string,
  supportTileMarkerId: string,
  angle: number
) => {
  throwErrorIfElementIsMissing(
    model,
    "Model is missing in rotateCartSupport function"
  );
  const supportElement = findElementConnectedToMarker(model, supportMarkerId);
  const supportTileElement = findElementConnectedToMarker(
    model,
    supportTileMarkerId
  );

  const originalParent = attachModelToNewParent(
    supportTileElement,
    supportElement
  );

  rotateElementOnYAxis(supportElement, angle);

  attachModelToNewParent(supportTileElement, originalParent);
};

const moveSupportBaseToNewPosition = (
  parentModel: Object3D<Object3DEventMap>,
  supportElementMarkerId: string,
  sceneRootMarker: Object3D<Object3DEventMap>,
  targetMarkerId: string,
  offsetY: number = 0
) => {
  const supportBase = findElementConnectedToMarker(
    parentModel,
    supportElementMarkerId
  );
  const targetMarker = findElementByName(sceneRootMarker, targetMarkerId);
  const originalOParent = attachModelToNewParent(supportBase, sceneRootMarker);
  supportBase.position.copy(targetMarker!.position);
  supportBase.position.setY(supportBase.position.y + offsetY);
  attachModelToNewParent(supportBase, originalOParent);
};

// todo: move supports from palette
// todo: rotate cart blockades
// todo: move minifig to crane cabin
// todo: rotate minifig arms
// todo: move radio to new position
// todo: move crane inner arm to position
// todo: lever up crane boom
// todo rotate crane boom supports
// todo change winch phase
// todo rotate crane cabin
// todo move hook to new position
// todo move car to new position
// todo move minifig construction helmet to new position
// todo move minifig helmet to new position
// todo rotate helmet glass
// todo arrange minifig
// todo change torch phase
// todo move hammer to new position
// todo move wrench to new position
