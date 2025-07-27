import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import {
  HelmetMarkersData,
  MinifigMarkersData,
} from "../../../Types/ArrangeablePartsTypes";

const {
  changeWinchPhase,
  findElementConnectedToMarker,
  attachModelToNewParent,
  rotateElementOnYAxis,
  rotateElementOnXAxis,
  rotateElementOnZAxis,
  throwErrorIfElementIsMissing,
  connectMinifig,
  rotateMinifigArm,
  rotateLeg,
  findMarkerByName,
  changeHoseNozzlePhase,
  connectHelmet,
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
  const targetMarker = findMarkerByName(sceneRootMarker, targetMarkerId);
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

export const rotateCraneCabinAndBoom = (
  cabinModel: Object3D<Object3DEventMap>,
  boomModel: Object3D<Object3DEventMap>,
  angle: number
) => {
  const originalParent = attachModelToNewParent(boomModel, cabinModel);

  rotateElementOnYAxis(cabinModel, angle);

  attachModelToNewParent(boomModel, originalParent);
};

export const moveHookToNewPosition = (
  scene: Object3D<Object3DEventMap>,
  model: Object3D<Object3DEventMap>,
  hookBaseMarkerId: string,
  hookPartsMarkersIds: string[],
  newPositionMarkerId: string
) => {
  const newPositionMarker = findMarkerByName(scene, newPositionMarkerId);

  const hook = findElementConnectedToMarker(model, hookBaseMarkerId);

  const hookParts = hookPartsMarkersIds.map((markerId) =>
    findElementConnectedToMarker(model, markerId)
  );

  hookParts.forEach((part) => {
    attachModelToNewParent(part, hook);
  });

  attachModelToNewParent(hook, scene);
  hook.position.copy(newPositionMarker!.position);
  hook.rotation.copy(newPositionMarker!.rotation);

  hookParts.forEach((part) => {
    attachModelToNewParent(part, model);
  });

  attachModelToNewParent(hook, model);
};

export const moveCraneOperatorToNewPosition = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  parentModel: Object3D<Object3DEventMap>,
  targetMarkerId: string,
  minifigMarkersData: MinifigMarkersData
) => {
  const minifig = connectMinifig(parentModel, minifigMarkersData);
  rotateElementOnYAxis(minifig.minifigHeaps, 30);

  rotateMinifigArm(minifig.minifigTorso, "Right", 45, 20);
  rotateMinifigArm(minifig.minifigTorso, "Left", 45, 20);
  rotateLeg(minifig.minifigHeaps, -90, "Right");
  rotateLeg(minifig.minifigHeaps, -90, "Left");

  const targetMarker = findMarkerByName(sceneRootMarker, targetMarkerId);

  attachModelToNewParent(minifig.minifigHeaps, sceneRootMarker);

  minifig.minifigHeaps.position.copy(targetMarker!.position);
  minifig.minifigHeaps.rotation.copy(targetMarker!.rotation);

  attachModelToNewParent(minifig.minifigHeaps, parentModel);

  minifig.disconnectMinifig();
};

export const moveCarToNewPosition = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  carModel: Object3D<Object3DEventMap>,
  targetMarkerId: string
) => {
  const targetMarker = findMarkerByName(sceneRootMarker, targetMarkerId);

  attachModelToNewParent(carModel, sceneRootMarker);

  carModel.position.copy(targetMarker!.position);
  carModel.rotation.copy(targetMarker!.rotation);

  attachModelToNewParent(carModel, sceneRootMarker);
};

export const moveWorkerMinifigToNewPosition = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  workerMinifigParentModel: Object3D<Object3DEventMap>,
  workerMinifigMarkersData: MinifigMarkersData,
  targetMarkerId: string
) => {
  const targetMarker = findMarkerByName(sceneRootMarker, targetMarkerId);

  const workerMinifig = connectMinifig(
    workerMinifigParentModel,
    workerMinifigMarkersData
  );

  rotateElementOnYAxis(workerMinifig.minifigHeaps, 15);
  rotateMinifigArm(workerMinifig.minifigTorso, "Left", 30, 12, -12);
  rotateMinifigArm(workerMinifig.minifigTorso, "Right", 0, 0, -7);
  rotateLeg(workerMinifig.minifigHeaps, -30, "Right");
  rotateLeg(workerMinifig.minifigHeaps, -30, "Left");

  attachModelToNewParent(workerMinifig.minifigHeaps, sceneRootMarker);

  workerMinifig.minifigHeaps.position.copy(targetMarker!.position);
  workerMinifig.minifigHeaps.rotation.copy(targetMarker!.rotation);

  attachModelToNewParent(workerMinifig.minifigHeaps, workerMinifigParentModel);

  workerMinifig.disconnectMinifig();
};

export const moveHoseNozzleAndChangeHosePhase = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  parentModel: Object3D<Object3DEventMap>,
  hoseNozzleMarkerId: string,
  newPositionMarkerId: string
) => {
  const hoseNozzle = findElementConnectedToMarker(
    parentModel,
    hoseNozzleMarkerId
  );

  const newPositionMarker = findMarkerByName(
    sceneRootMarker,
    newPositionMarkerId
  );

  attachModelToNewParent(hoseNozzle, sceneRootMarker);

  hoseNozzle.position.copy(newPositionMarker!.position);
  hoseNozzle.rotation.copy(newPositionMarker!.rotation);

  attachModelToNewParent(hoseNozzle, parentModel);

  changeHoseNozzlePhase(parentModel);
};

export const changeHelmetPosition = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  parentModel: Object3D<Object3DEventMap>,
  helmetMarkersData: HelmetMarkersData,
  newPositionMarkerId: string,
  visorAngle: number
) => {
  const { helmet, helmetVisor, disconnectHelmet } = connectHelmet(
    parentModel,
    helmetMarkersData
  );

  const newPositionMarker = ArrangementFunctionsHelper.findMarkerByName(
    sceneRootMarker,
    newPositionMarkerId
  );

  attachModelToNewParent(helmet, sceneRootMarker);

  helmet.position!.copy(newPositionMarker!.position);
  helmet.rotation!.copy(newPositionMarker!.rotation);

  rotateElementOnZAxis(helmetVisor, visorAngle);
  rotateElementOnYAxis(helmetVisor, 180);

  attachModelToNewParent(helmet, parentModel);
  disconnectHelmet();
};

export const changeConstructionHelmetPosition = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  parentModel: Object3D<Object3DEventMap>,
  helmetMarkerId: string,
  newPositionMarkerId: string
) => {
  const helmet = ArrangementFunctionsHelper.findElementConnectedToMarker(
    parentModel,
    helmetMarkerId
  );

  const newPositionMarker = ArrangementFunctionsHelper.findMarkerByName(
    sceneRootMarker,
    newPositionMarkerId
  );

  attachModelToNewParent(helmet, sceneRootMarker);

  helmet.position!.copy(newPositionMarker!.position);
  helmet.rotation!.copy(newPositionMarker!.rotation);

  attachModelToNewParent(helmet, parentModel);
};

export const changeRadioPosition = (
  sceneRootMarker: Object3D<Object3DEventMap>,
  parentModel: Object3D<Object3DEventMap>,
  radioMarkerId: string,
  newPositionMarkerId: string
) => {
  const radio = ArrangementFunctionsHelper.findElementConnectedToMarker(
    parentModel,
    radioMarkerId
  );

  const newPositionMarker = ArrangementFunctionsHelper.findMarkerByName(
    sceneRootMarker,
    newPositionMarkerId
  );

  attachModelToNewParent(radio, sceneRootMarker);

  radio.position!.copy(newPositionMarker!.position);
  radio.rotation!.copy(newPositionMarker!.rotation);

  attachModelToNewParent(radio, parentModel);
};
