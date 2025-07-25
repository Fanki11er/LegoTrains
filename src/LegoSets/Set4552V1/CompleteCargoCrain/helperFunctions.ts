import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

const {
  findElementByName,
  changeWinchPhase,
  findElementConnectedToMarker,
  attachModelToNewParent,
  rotateElementOnYAxis,
  rotateElementOnXAxis,
  rotateElementOnZAxis,
  throwErrorIfElementIsMissing,
} = ArrangementFunctionsHelper;

export const moveInnerCrainBoomArmToPlace = (
  model: Object3D<Object3DEventMap>,
  distance: number,
  armMarkerId: string
) => {
  const innerCrainBoomArm = findElementConnectedToMarker(model, armMarkerId);
  innerCrainBoomArm.position.setX(innerCrainBoomArm.position.x + distance);
};

export const changeWinchPhaseFunction = (
  model: Object3D<Object3DEventMap>,
  winchMarkerId: string
) => {
  const winch = findElementConnectedToMarker(model!, winchMarkerId);

  changeWinchPhase(winch);
};

export const rotateCrainBoomHandle = (
  model: Object3D<Object3DEventMap>,
  elementsMarkersList: string[],
  pivotElementMarkerId: string,
  angle: number
) => {
  const pivotElement = findElementConnectedToMarker(
    model!,
    pivotElementMarkerId
  );

  const elements = elementsMarkersList.map((markerId) =>
    findElementConnectedToMarker(model!, markerId)
  );

  elements.forEach((element) => {
    attachModelToNewParent(element, pivotElement);
  });

  rotateElementOnYAxis(pivotElement, angle);

  elements.forEach((element) => {
    attachModelToNewParent(element, model!);
  });
};

export const rotateCrainBlockadeHandle = (
  model: Object3D<Object3DEventMap>,
  markersIds: string[],
  angles: number[]
) => {
  const blockadeHandles = markersIds.map((markerId) =>
    findElementConnectedToMarker(model, markerId)
  );

  rotateElementOnXAxis(blockadeHandles[0], angles[0]);
  rotateElementOnXAxis(blockadeHandles[1], angles[1]);
};

export const rotateCartSupport = (
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

export const moveSupportBaseToNewPosition = (
  parentModel: Object3D<Object3DEventMap>,
  supportElementMarkerId: string,
  sceneRootMarker: Object3D<Object3DEventMap>,
  targetMarkerId: string
) => {
  const supportBase = findElementConnectedToMarker(
    parentModel,
    supportElementMarkerId
  );
  const targetMarker = findElementByName(sceneRootMarker, targetMarkerId);
  const originalOParent = attachModelToNewParent(supportBase, sceneRootMarker);
  supportBase.position.copy(targetMarker!.position);
  attachModelToNewParent(supportBase, originalOParent);
};

export const leverUpCraneBoom = (
  model: Object3D<Object3DEventMap>,
  pivotElementMarkerId: string,
  angle: number
) => {
  const pivotElement = findElementConnectedToMarker(
    model,
    pivotElementMarkerId
  );

  const elements = model.children.filter(
    (child) => child.name !== "2458" && child.name !== "2350bpb01"
  );

  elements.forEach((element) => {
    attachModelToNewParent(element, pivotElement);
  });

  rotateElementOnZAxis(pivotElement, angle);

  elements.forEach((element) => {
    attachModelToNewParent(element, model);
  });
};
