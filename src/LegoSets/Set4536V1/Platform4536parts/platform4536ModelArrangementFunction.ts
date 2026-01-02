import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";

const {
  rotateElementOnYAxis,
  findElementConnectedToMarker,
  findMarkerByName,
  moveElementToNewNestPosition,
} = ArrangementFunctionsHelper;

export const platform4536ModelArrangementFunction: ModelArraignmentFunction = (
  model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>
) => {
  openPlatformGate(model);
  moveCoalPiecesToFinalPositions(
    model,
    sceneRootMarker,
    [
      "ModelMarker.021",
      "ModelMarker.022",
      "ModelMarker.023",
      "ModelMarker.024",
      "ModelMarker.025",
      "ModelMarker.026",
      "ModelMarker.027",
      "ModelMarker.028",
      "ModelMarker.029",
      "ModelMarker.030",
      "ModelMarker.031",
      "ModelMarker.032",
    ],
    [
      "SceneHelperMarker.001",
      "SceneHelperMarker.002",
      "SceneHelperMarker.003",
      "SceneHelperMarker.004",
      "SceneHelperMarker.005",
      "SceneHelperMarker.006",
      "SceneHelperMarker.007",
      "SceneHelperMarker.008",
      "SceneHelperMarker.009",
      "SceneHelperMarker.010",
      "SceneHelperMarker.011",
      "SceneHelperMarker.012",
    ]
  );
  moveCoalPiecesToFinalPositions(
    model,
    sceneRootMarker,
    [
      "ModelMarker.033",
      "ModelMarker.034",
      "ModelMarker.035",
      "ModelMarker.036",
      "ModelMarker.037",
      "ModelMarker.038",
      "ModelMarker.039",
      "ModelMarker.040",
      "ModelMarker.041",
      "ModelMarker.042",
      "ModelMarker.043",
      "ModelMarker.044",
    ],
    [
      "SceneHelperMarker.013",
      "SceneHelperMarker.014",
      "SceneHelperMarker.015",
      "SceneHelperMarker.016",
      "SceneHelperMarker.017",
      "SceneHelperMarker.018",
      "SceneHelperMarker.019",
      "SceneHelperMarker.020",
      "SceneHelperMarker.021",
      "SceneHelperMarker.022",
      "SceneHelperMarker.023",
      "SceneHelperMarker.024",
    ]
  );

  return {
    touchedModels: [],
    status: "success",
  };
};

const openPlatformGate = (model: Object3D<Object3DEventMap>) => {
  const gate = findElementConnectedToMarker(model, "ModelMarker.015");
  rotateElementOnYAxis(gate, -45);
};

export const moveCoalPiecesToFinalPositions = (
  model: Object3D<Object3DEventMap>,
  sceneRootMarker: Object3D<Object3DEventMap>,
  coalPiecesMarkersIds: string[],
  newCoalPieceNestsMarkersIds: string[]
) => {
  const coalPieces: Object3D<Object3DEventMap>[] = [];
  const newCoalPieceNests: Object3D<Object3DEventMap>[] = [];

  coalPiecesMarkersIds.forEach((markerId) => {
    const coalPiece = findElementConnectedToMarker(model, markerId);
    coalPieces.push(coalPiece);
  });

  newCoalPieceNestsMarkersIds.forEach((markerId) => {
    const newCoalPieceNest = findMarkerByName(sceneRootMarker, markerId);
    newCoalPieceNests.push(newCoalPieceNest!);
  });

  if (coalPieces.length !== newCoalPieceNests.length) {
    throw new Error(
      `Not all coal pieces or new coal piece nests were found in moveCoalPiecesToFinalPositions.`
    );
  }

  coalPieces.forEach((coalPiece, index) => {
    moveElementToNewNestPosition(coalPiece, newCoalPieceNests[index]);
  });
};
