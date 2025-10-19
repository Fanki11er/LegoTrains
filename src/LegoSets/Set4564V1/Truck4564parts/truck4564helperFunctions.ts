import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { convertDegreesToRadians } from "../../../Utilities/utilities";

const {
  findElementConnectedToMarker,
  throwErrorIfElementIsMissing,
  attachModelToNewParent,
  rotateElementOnZAxis,
  hideElement,
  findMarkerByName,
  findModelRootMarker,
} = ArrangementFunctionsHelper;

export const changeRubberBandPhase = (model: Object3D<Object3DEventMap>) => {
  const hingeHookSliderBase = findElementConnectedToMarker(
    model,
    "ModelMarker.031",
    "Can't find Hinge Hook Slider Base element"
  );

  switch (hingeHookSliderBase.userData.activePhase) {
    case "": {
      hingeHookSliderBase.userData.activePhase = "connected";

      ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
        hingeHookSliderBase,
        "connected"
      );
      break;
    }
    case "connected": {
      hingeHookSliderBase.userData.activePhase = "pulled";

      ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
        hingeHookSliderBase,
        "pulled"
      );
      break;
    }
    case "pulled": {
      hingeHookSliderBase.userData.activePhase = "stretched";

      ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
        hingeHookSliderBase,
        "stretched"
      );
      break;
    }
    default: {
      break;
    }
  }
};

export const rotateHingeHookSliderBaseAndChangeRubberBandPhase = (
  model: Object3D<Object3DEventMap>,
  modelRootMarker?: Object3D<Object3DEventMap>
) => {
  throwErrorIfElementIsMissing(modelRootMarker, "Model root marker not found");

  const hingeHookSliderBase = findElementConnectedToMarker(
    modelRootMarker!,
    "ModelMarker.031",
    "Can't find Hinge Hook Slider Base element"
  );
  attachModelToNewParent(model, hingeHookSliderBase);

  rotateElementOnZAxis(hingeHookSliderBase, -90);

  attachModelToNewParent(model, modelRootMarker!);

  changeRubberBandPhase(modelRootMarker!);

  return [];
};

export const stretchRubberBand = (
  _model: Object3D<Object3DEventMap>,
  modelRootMarker?: Object3D<Object3DEventMap>
) => {
  changeRubberBandPhase(modelRootMarker!);

  return [];
};

export const changeTruckWinchPhase = (model: Object3D<Object3DEventMap>) => {
  const truckWinch = findElementConnectedToMarker(
    model,
    "ModelMarker.051",
    "Can't find Truck Winch element"
  );

  switch (truckWinch.userData.activePhase) {
    case "": {
      truckWinch.userData.activePhase = "phase0";

      ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
        truckWinch,
        "phase0"
      );
      break;
    }

    default: {
      break;
    }
  }
};

export const connectStringToTruckWinch = (
  model: Object3D<Object3DEventMap>,
  modelRootMarker?: Object3D<Object3DEventMap>
) => {
  hideElement(model);

  changeTruckWinchPhase(modelRootMarker!);

  return [];
};

export const openLeftTruckDoor = (model: Object3D<Object3DEventMap>) => {
  const door = findElementConnectedToMarker(model, "ModelMarker.059");
  door.rotateY(convertDegreesToRadians(-30));
};

export const connectYellowContainerToTruck = (
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const destinationHelperMarker = findMarkerByName(
    sceneRootMarker,
    "SceneHelperMarker.001"
  );

  const yellowContainer = findModelRootMarker(
    sceneRootMarker,
    "CarContainerYellow4564Model"
  );

  yellowContainer!.rotation.copy(destinationHelperMarker!.rotation);
  yellowContainer!.position.copy(destinationHelperMarker!.position);

  return [];
};
