import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunction } from "../../../Types/ArrangementFunction";

const {
  arrangePalette,
  arrangePostPackage,
  moveMinifigToNewPosition,
  rotateMinifigArm,
  rotateLeg,
} = ArrangementFunctionsHelper;

export const loadingRamp7722ModelArrangementFunction: ArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  arrangePalette(model, "PlatformPalette.001", {
    paletteBaseMarkerId: "ModelMarker.020",
    paletteLegsMarkersIds: ["ModelMarker.018", "ModelMarker.019"],
  });
  arrangePostPackage(model, "PostPackage.002", {
    postPackageBaseMarkerId: "ModelMarker.021",
    postPackageEnvelopeMarkerId: "ModelMarker.023",
  });
  arrangePostPackage(model, "PostPackage.001", {
    postPackageBaseMarkerId: "ModelMarker.022",
    postPackageEnvelopeMarkerId: "ModelMarker.024",
  });
  arrangePostmanMinifig(model);

  return [];
};

const arrangePostmanMinifig = (model: Object3D<Object3DEventMap>) => {
  const minifig = moveMinifigToNewPosition(model, "Minifig.002", {
    minifigHeapsMarkerId: "ModelMarker.025",
    minifigTorsoMarkerId: "ModelMarker.026",
    minifigHeadMarkerId: "ModelMarker.027",
    minifigHutMarkerId: "ModelMarker.028",
  });

  if (minifig?.minifigTorso) {
    rotateMinifigArm(minifig.minifigTorso, "Right", -45, -15, -15);

    rotateMinifigArm(minifig.minifigTorso, "Left", 45, 20);
  }

  if (minifig?.minifigHeaps) {
    rotateLeg(minifig.minifigHeaps, 45, "Right");
  }

  arrangePostPackage(model, "PostPackage.003", {
    postPackageBaseMarkerId: "ModelMarker.029",
    postPackageEnvelopeMarkerId: "ModelMarker.030",
  });
};
