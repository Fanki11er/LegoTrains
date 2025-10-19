import { Object3D, Object3DEventMap, Scene } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";

const {
  rotateConnectedElements,
  findModelRootMarker,
  movePartialModelToCompletedModel,
  findMarkerByName,
  findElementConnectedToMarker,
  moveElementToNewNestPosition,
  throwErrorIfElementIsMissing,
  moveModelToNewPositionInScene,
  connectMinifig,
  attachModelToNewParent,
  rotateMinifigArm,
} = ArrangementFunctionsHelper;

export const rotatePostCartLoadingSpace = (
  model: Object3D<Object3DEventMap>,
  angle: number
): ArraignmentFunctionResult => {
  rotateConnectedElements(
    model,
    "ModelMarker.036",
    [
      "ModelMarker.037",
      "ModelMarker.038",
      "ModelMarker.039",
      "ModelMarker.040",
      "ModelMarker.041",
      "ModelMarker.042",
      "ModelMarker.043",
      "ModelMarker.044",
      "ModelMarker.045",
      "ModelMarker.046",
      "ModelMarker.047",
      "ModelMarker.048",
      "ModelMarker.051",
    ],
    "X",
    angle
  );
  return {
    touchedModels: [],
    status: "success",
  };
};

export const moveTrolleyToPostCart = (
  model: Object3D<Object3DEventMap>,
  scene?: Scene
): ArraignmentFunctionResult => {
  throwErrorIfElementIsMissing(
    scene,
    "Scene element is missing in moveTrolleyToPostCart."
  );

  const sceneRootMarker = findMarkerByName(scene!, "SceneRootMarker");

  const trolley = findModelRootMarker(sceneRootMarker!, "Trolley4564Model");

  const finishPartialModelConnection = movePartialModelToCompletedModel(
    model,
    trolley!,
    "HelperMarker.001"
  );

  finishPartialModelConnection();

  return {
    touchedModels: ["Trolley4564Model"],
    status: "success",
  };
};

export const closeAllSlidingPostCartDoors = (
  model: Object3D<Object3DEventMap>
): ArraignmentFunctionResult => {
  moveSlidingDoor(model, "ModelMarker.078", 5.5);
  moveSlidingDoor(model, "ModelMarker.079", -20.1);
  moveSlidingDoor(model, "ModelMarker.080", -20.1);
  moveSlidingDoor(model, "ModelMarker.081", 5.5);
  return {
    touchedModels: [],
    status: "success",
  };
};

export const moveSlidingDoor = (
  model: Object3D<Object3DEventMap>,
  doorMarkerId: string,
  distance: number
) => {
  const door = findElementConnectedToMarker(model, doorMarkerId);
  door.position.x += distance;
};

export const openSlidingDoor = (
  model: Object3D<Object3DEventMap>,
  doorMarkerId: string,
  distance: number
) => {
  const door = findElementConnectedToMarker(model, doorMarkerId);
  door.position.x -= distance;
};

export const movePostPackagesToFinalPositions = (
  model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const postPackagesMarkersIds = [
    "ModelMarker.086",
    "ModelMarker.087",
    "ModelMarker.088",
    "ModelMarker.089",
  ];
  const newPostPackagesMarkersIds = [
    "SceneHelperMarker.013",
    "SceneHelperMarker.014",
    "SceneHelperMarker.015",
    "SceneHelperMarker.016",
  ];

  const postPackagesElements: Object3D<Object3DEventMap>[] = [];
  const newPostPackagesNests: Object3D<Object3DEventMap>[] = [];

  postPackagesMarkersIds.forEach((markerId) => {
    const postPackagesElement = findElementConnectedToMarker(model, markerId);
    postPackagesElements.push(postPackagesElement);
  });

  newPostPackagesMarkersIds.forEach((markerId) => {
    const newPostPackagesNest = findMarkerByName(sceneRootMarker, markerId);
    newPostPackagesNests.push(newPostPackagesNest!);
  });

  if (postPackagesElements.length !== newPostPackagesNests.length) {
    throw new Error(
      `Not all post packages elements or new post packages nests were found in movePostPackagesToFinalPositions.`
    );
  }

  postPackagesElements.forEach((postPackagesElement, index) => {
    moveElementToNewNestPosition(
      postPackagesElement,
      newPostPackagesNests[index]
    );
  });
};

export const moveTrolleyToFinalPosition = (
  _model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const trolley = findModelRootMarker(sceneRootMarker, "Trolley4564Model");

  moveModelToNewPositionInScene(
    trolley!,
    "SceneHelperMarker.017",
    sceneRootMarker
  );
};

export const moveMinifigToFinalPosition = (
  _model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const minifigs = findModelRootMarker(sceneRootMarker, "Minifigs4564Model");

  arrangePostWorkerMinifig(minifigs!, sceneRootMarker);
};

export const arrangePostWorkerMinifig = (
  modelRootMarker: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  const destinationMarker = findMarkerByName(
    sceneRootMarker,
    "SceneHelperMarker.018"
  );

  const { minifigHeaps, minifigTorso, disconnectMinifig } = connectMinifig(
    modelRootMarker,
    {
      minifigHeapsMarkerId: "ModelMarker.001",
      minifigTorsoMarkerId: "ModelMarker.002",
      minifigHeadMarkerId: "ModelMarker.003",
      minifigHutMarkerId: "ModelMarker.004",
    }
  );

  rotateMinifigArm(minifigTorso!, "Left", 20, 12);
  rotateMinifigArm(minifigTorso!, "Right", 20, 5);

  attachModelToNewParent(minifigHeaps!, sceneRootMarker);

  minifigHeaps!.position.copy(destinationMarker!.position);
  minifigHeaps!.quaternion.copy(destinationMarker!.quaternion);

  attachModelToNewParent(minifigHeaps!, modelRootMarker);

  disconnectMinifig();
};
