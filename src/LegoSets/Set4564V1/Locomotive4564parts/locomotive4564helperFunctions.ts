import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
const {
  moveMinifigToNewPosition,
  connectMinifig,
  findMarkerByName,
  findElementConnectedToMarker,
  attachModelToNewParent,
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
