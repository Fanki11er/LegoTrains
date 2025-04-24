import { Object3D, Object3DEventMap } from "three";
import {
  ArrangementFunctionsHelper,
  BarrelMarkersData,
} from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunction } from "../../../Types/ArrangementFunction";

const {
  completePalette,
  completeBarrel,
  attachModelToNewParent,
  moveElementToNewNestPosition,
} = ArrangementFunctionsHelper;

export const forklift7722ModelArrangementFunction: ArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  movePaletteWithBarrelsToNewPosition(model);
  return ["PlatformCar7722Model"];
};

export const movePaletteWithBarrelsToNewPosition = (
  model: Object3D<Object3DEventMap>
) => {
  const scene = model.parent;

  if (!scene) {
    console.log("Missing scene element");
    return;
  }

  const markerForPaletteWithBarrels = scene?.children.find((child) => {
    return child.userData.forModelId === "Palette.002";
  });

  if (!markerForPaletteWithBarrels) {
    console.log("Missing marker for pallette with barrels");
    return;
  }

  const platformCar = scene.getObjectByName(
    "PlatformCar7722Model_ModelRootMarker"
  );

  if (!platformCar) {
    console.log("Platform Car model not found");
    return;
  }
  const paletteCompletionResult = completePalette(platformCar, {
    paletteBaseMarkerId: "ModelMarker.049",
    paletteLegsMarkersIds: ["ModelMarker.044", "ModelMarker.045"],
  });

  if (!paletteCompletionResult) {
    return;
  }
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
    return completeBarrel(platformCar, barrelData);
  });

  if (barrels.length !== barrelsMarkersData.length) {
    console.log("Some barrels elements are missing");
    return;
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
