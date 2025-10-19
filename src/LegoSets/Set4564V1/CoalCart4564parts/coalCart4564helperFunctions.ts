import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";

const {
  rotateConnectedElements,
  rotateHingeTrainGate,
  findElementConnectedToMarker,
  findMarkerByName,
  moveElementToNewNestPosition,
} = ArrangementFunctionsHelper;

export const rotateCoalCartLoadingSpace = (
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
      "ModelMarker.049",
      "ModelMarker.050",
    ],
    "X",
    angle
  );
  return {
    touchedModels: [],
    status: "success",
  };
};

export const closeAllHingeTrainGates = (
  model: Object3D<Object3DEventMap>
): ArraignmentFunctionResult => {
  rotateHingeTrainGate(model, "ModelMarker.084", "Z", 90);
  rotateHingeTrainGate(model, "ModelMarker.085", "Z", 90);
  rotateHingeTrainGate(model, "ModelMarker.086", "Z", 90);
  rotateHingeTrainGate(model, "ModelMarker.087", "Z", 90);
  return {
    touchedModels: [],
    status: "success",
  };
};

export const openRightSideCoalCartHingeGates = (
  model: Object3D<Object3DEventMap>
): ArraignmentFunctionResult => {
  rotateHingeTrainGate(model, "ModelMarker.086", "Z", -180);
  rotateHingeTrainGate(model, "ModelMarker.087", "Z", -180);

  return {
    touchedModels: [],
    status: "success",
  };
};

export const moveCoalToYellowContainer = (
  model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
): ArraignmentFunctionResult => {
  const coalMarkersIds = [
    "ModelMarker.100",
    "ModelMarker.101",
    "ModelMarker.102",
    "ModelMarker.103",
    "ModelMarker.104",
    "ModelMarker.105",
    "ModelMarker.106",
    "ModelMarker.107",
  ];
  const newCoalNestsMarkersIds = [
    "SceneHelperMarker.004",
    "SceneHelperMarker.006",
    "SceneHelperMarker.007",
    "SceneHelperMarker.008",
    "SceneHelperMarker.009",
    "SceneHelperMarker.010",
    "SceneHelperMarker.011",
    "SceneHelperMarker.012",
  ];

  const coalElements: Object3D<Object3DEventMap>[] = [];
  const newCoalNests: Object3D<Object3DEventMap>[] = [];

  coalMarkersIds.forEach((markerId) => {
    const coalElement = findElementConnectedToMarker(model, markerId);
    coalElements.push(coalElement);
  });

  newCoalNestsMarkersIds.forEach((markerId) => {
    const newCoalNest = findMarkerByName(sceneRootMarker, markerId);
    newCoalNests.push(newCoalNest!);
  });

  if (coalElements.length !== newCoalNests.length) {
    throw new Error(
      `Not all coal elements or new coal nests were found in moveCoalToYellowContainer.`
    );
  }

  coalElements.forEach((coalElement, index) => {
    moveElementToNewNestPosition(coalElement, newCoalNests[index]);
  });

  return {
    touchedModels: [],
    status: "success",
  };
};
