import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import { BarrelMarkersData } from "../../../Types/ArrangeablePartsTypes";

const {
  completePalette,
  completeBarrel,
  attachModelToNewParent,
  moveElementToNewNestPosition,
  findMarkerById,
  throwErrorIfElementIsMissing,
} = ArrangementFunctionsHelper;

export const forklift7722ModelArrangementFunction: ModelArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  movePaletteWithBarrelsToNewPosition(model);
  return {
    touchedModels: ["PlatformCar7722Model"],
    status: "success",
  };
};

export const movePaletteWithBarrelsToNewPosition = (
  model: Object3D<Object3DEventMap>
) => {
  const scene = model.parent;

  throwErrorIfElementIsMissing(scene, "Scene element is missing");

  const markerForPaletteWithBarrels = findMarkerById(scene!, "Palette.002");

  const platformCar = scene!.getObjectByName(
    "PlatformCar7722Model_ModelRootMarker"
  );
  throwErrorIfElementIsMissing(platformCar, "Platform Car model is missing");

  const paletteCompletionResult = completePalette(platformCar!, {
    paletteBaseMarkerId: "ModelMarker.049",
    paletteLegsMarkersIds: ["ModelMarker.044", "ModelMarker.045"],
  });

  const { paletteBase, disconnectPalette } = paletteCompletionResult;

  const barrelsMarkersData: BarrelMarkersData[] = [
    {
      barrelBottomPartMarkerId: "ModelMarker.050",
      barrelRingMarkerId: "ModelMarker.062",
      barrelTopPartMarkerId: "ModelMarker.074",
    },
    {
      barrelBottomPartMarkerId: "ModelMarker.051",
      barrelRingMarkerId: "ModelMarker.063",
      barrelTopPartMarkerId: "ModelMarker.076",
    },
    {
      barrelBottomPartMarkerId: "ModelMarker.052",
      barrelRingMarkerId: "ModelMarker.064",
      barrelTopPartMarkerId: "ModelMarker.075",
    },
    {
      barrelBottomPartMarkerId: "ModelMarker.053",
      barrelRingMarkerId: "ModelMarker.065",
      barrelTopPartMarkerId: "ModelMarker.077",
    },
    {
      barrelBottomPartMarkerId: "ModelMarker.054",
      barrelRingMarkerId: "ModelMarker.067",
      barrelTopPartMarkerId: "ModelMarker.080",
    },
    {
      barrelBottomPartMarkerId: "ModelMarker.055",
      barrelRingMarkerId: "ModelMarker.068",
      barrelTopPartMarkerId: "ModelMarker.078",
    },
  ];

  const barrels = barrelsMarkersData.map((barrelData) => {
    return completeBarrel(platformCar!, barrelData);
  });

  if (barrels.length !== barrelsMarkersData.length) {
    throw new Error(
      `Barrels length ${barrels.length} does not match markers data length ${barrelsMarkersData.length}`
    );
  }

  barrels.forEach((barrel) => {
    if (barrel) {
      attachModelToNewParent(barrel.barrelBottomPart, paletteBase);
    }
  });

  moveElementToNewNestPosition(paletteBase, markerForPaletteWithBarrels);

  barrels.forEach((barrel) => {
    barrel?.disconnectBarrel();
  });

  disconnectPalette();
};
