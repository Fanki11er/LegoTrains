import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
const {
  moveMinifigToNewPosition,
  connectMinifig,
  findMarkerByName,
  findElementConnectedToMarker,
  attachModelToNewParent,
  rotateElementOnYAxis,
  rotateElementOnZAxis,
  rotateMinifigArm,
} = ArrangementFunctionsHelper;

export const moveTrainWorkerMinifig = (
  modelRootMarker: Object3D<Object3DEventMap>,
  model: Object3D<Object3DEventMap>,
  destinationMarkerId: string
) => {
  const minifig = moveMinifigToNewPosition(
    modelRootMarker,
    destinationMarkerId,
    {
      minifigHeapsMarkerId: "ModelMarker.005",
      minifigTorsoMarkerId: "ModelMarker.006",
      minifigHeadMarkerId: "ModelMarker.007",
      minifigHutMarkerId: "ModelMarker.008",
    },
    model
  );

  return minifig;
};

export const arrangeTrainWorkerMinifig = (
  modelRootMarker: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const destinationMarker = findMarkerByName(
    sceneRootMarker,
    "SceneHelperMarker.002"
  );

  const { minifigHeaps, disconnectMinifig } = connectMinifig(modelRootMarker, {
    minifigHeapsMarkerId: "ModelMarker.005",
    minifigTorsoMarkerId: "ModelMarker.006",
    minifigHeadMarkerId: "ModelMarker.007",
    minifigHutMarkerId: "ModelMarker.008",
  });

  attachModelToNewParent(minifigHeaps!, sceneRootMarker);

  minifigHeaps!.position.copy(destinationMarker!.position);
  minifigHeaps!.quaternion.copy(destinationMarker!.quaternion);

  attachModelToNewParent(minifigHeaps!, modelRootMarker);

  disconnectMinifig();
};

export const arrangeMinifigAccessoryRadioWithHandle = (
  modelRootMarker: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const destinationMarker = findMarkerByName(
    sceneRootMarker,
    "SceneHelperMarker.003"
  );

  const minifigAccessory = findElementConnectedToMarker(
    modelRootMarker,
    "ModelMarker.002"
  );

  attachModelToNewParent(minifigAccessory!, sceneRootMarker);

  minifigAccessory!.position.copy(destinationMarker!.position);
  minifigAccessory!.quaternion.copy(destinationMarker!.quaternion);

  attachModelToNewParent(minifigAccessory!, modelRootMarker);
};

export const openEngineDoor = (model: Object3D<Object3DEventMap>) => {
  const engineDoor = findElementConnectedToMarker(
    model,
    "ModelMarker.107",
    "Engine door not found"
  );

  rotateElementOnZAxis(engineDoor!, -115);
};

export const openCabinDoor = (model: Object3D<Object3DEventMap>) => {
  const cabinDoor = findElementConnectedToMarker(
    model,
    "ModelMarker.120",
    "Cabin door not found"
  );

  rotateElementOnYAxis(cabinDoor!, -45);
};

export const arrangeLocomotiveWorkerMinifig = (
  modelRootMarker: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const destinationMarker = findMarkerByName(
    sceneRootMarker,
    "SceneHelperMarker.005"
  );

  const { minifigHeaps, minifigTorso, disconnectMinifig } = connectMinifig(
    modelRootMarker,
    {
      minifigHeapsMarkerId: "ModelMarker.009",
      minifigTorsoMarkerId: "ModelMarker.010",
      minifigHeadMarkerId: "ModelMarker.011",
      minifigHutMarkerId: "ModelMarker.012",
    }
  );

  rotateMinifigArm(minifigTorso!, "Left", 60, 4, 0);
  rotateMinifigArm(minifigTorso!, "Right", -30);

  attachModelToNewParent(minifigHeaps!, sceneRootMarker);

  minifigHeaps!.position.copy(destinationMarker!.position);
  minifigHeaps!.quaternion.copy(destinationMarker!.quaternion);

  attachModelToNewParent(minifigHeaps!, modelRootMarker);

  disconnectMinifig();
};
