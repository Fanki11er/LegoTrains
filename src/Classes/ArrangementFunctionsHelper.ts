import { Object3D, Object3DEventMap } from "three";
import { convertDegreesToRadians } from "../Utilities/utilities";

type MinifigMarkersData = {
  minifigHeapsMarkerId: string;
  minifigTorsoMarkerId: string;
  minifigHeadMarkerId: string;
  minifigHutMarkerId: string;
};

type PostPackageMarkersData = {
  postPackageBaseMarkerId: string;
  postPackageEnvelopeMarkerId: string;
};

type PaletteMarkersData = {
  paletteBaseMarkerId: string;
  paletteLegsMarkersIds: [string, string];
};

export class ArrangementFunctionsHelper {
  static rotateLeg = (
    model: Object3D<Object3DEventMap>,
    degree: number,
    legSide: "Left" | "Right"
  ) => {
    let leg: Object3D<Object3DEventMap> | undefined = undefined;
    model.traverse((element) => {
      if (element.name.includes(`Minifig_Leg_${legSide}`)) {
        leg = element;
      }
    });

    if (!leg) {
      console.log("Minifig arm element not found");
      return;
    }

    const selectedLeg = leg as Object3D<Object3DEventMap>;
    selectedLeg.rotateX(convertDegreesToRadians(degree));
  };

  static rotateElementOnYAxis = (
    model: Object3D<Object3DEventMap>,
    degree: number
  ) => {
    model.rotateY(convertDegreesToRadians(degree));
  };

  static rotateMinifigArm = (
    model: Object3D<Object3DEventMap>,
    armSide: "Left" | "Right",
    degreeZ: number,
    degreeX: number = 0,
    degreeY: number = 0
  ) => {
    let arm: Object3D<Object3DEventMap> | undefined = undefined;
    model.traverse((element) => {
      if (element.name.includes(`Minifig_Arm_${armSide}`)) {
        arm = element;
      }
    });

    if (!arm) {
      console.log("Minifig arm element not found");
      return;
    }

    const selectedArm = arm as Object3D<Object3DEventMap>;
    selectedArm.rotateZ(convertDegreesToRadians(degreeZ));
    selectedArm.rotateX(convertDegreesToRadians(degreeX));
    selectedArm.rotateY(convertDegreesToRadians(degreeY));
  };

  static findElementConnectedToMarker = (
    model: Object3D<Object3DEventMap>,
    markerName: string
  ) => {
    return model.children.find((child) => {
      return child.userData.isConnected === markerName;
    });
  };

  static rotateCoupling = (
    model: Object3D<Object3DEventMap>,
    degree: number,
    couplingMarkerName: string,
    cylinderMarkerName: string
  ) => {
    const coupling = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      couplingMarkerName
    );
    const magnetCylinder =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        cylinderMarkerName
      );

    if (!coupling) {
      console.log("Coupling element not found");
      return;
    }

    if (!magnetCylinder) {
      console.log("Magnet cylinder element not found");
      return;
    }

    const originalOParent = coupling.parent;

    coupling.attach(magnetCylinder);

    ArrangementFunctionsHelper.rotateElementOnYAxis(coupling, degree);

    if (!originalOParent) {
      console.log("Parent element is missing");
      return;
    }

    originalOParent.attach(magnetCylinder);
  };

  static attachModelToNewParent = (
    model: Object3D<Object3DEventMap>,
    newParent: Object3D<Object3DEventMap> | null | undefined
  ) => {
    if (newParent) {
      const originalParent = model.parent;
      newParent.attach(model);
      return originalParent;
    }

    console.log("New parent element not found");
  };

  static moveElementToNewNestPosition = (
    model: Object3D<Object3DEventMap>,
    newNest: Object3D<Object3DEventMap>
  ) => {
    const modelParent = model.parent;
    const scene = newNest.parent;
    if (scene && modelParent) {
      model.rotation.copy(newNest.rotation);
      model.position.copy(newNest.position);
      scene.add(model);
      modelParent?.attach(model);
    } else {
      console.log("Nest parent not found");
    }
  };

  static arrangePalette = (
    model: Object3D<Object3DEventMap>,
    newPositionMarkerId: string,
    { paletteBaseMarkerId, paletteLegsMarkersIds }: PaletteMarkersData
  ) => {
    const paletteBase = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      paletteBaseMarkerId
    );

    const paletteLeg1 = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      paletteLegsMarkersIds[0]
    );
    const paletteLeg2 = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      paletteLegsMarkersIds[1]
    );

    const scene = model.parent;

    if (!scene) {
      console.log("Scene element not found");
      return;
    }

    if (!paletteBase) {
      console.log("Palette base element not found");
      return;
    }

    if (!paletteLeg1) {
      console.log("Palette leg 1 element not found");
      return;
    }

    if (!paletteLeg2) {
      console.log("Palette leg 2 element not found");
      return;
    }

    const markerForPaletteBase = scene?.children.find((child) => {
      return child.userData.forModelId === newPositionMarkerId;
    });

    if (!markerForPaletteBase) {
      console.log("marker for palette base element not found");
      return;
    }

    ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg1, paletteBase);

    ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg2, paletteBase);

    ArrangementFunctionsHelper.moveElementToNewNestPosition(
      paletteBase,
      markerForPaletteBase
    );

    ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg1, model);

    ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg2, model);
  };

  static arrangePostPackage = (
    model: Object3D<Object3DEventMap>,
    newPositionMarkerId: string,
    {
      postPackageBaseMarkerId,
      postPackageEnvelopeMarkerId,
    }: PostPackageMarkersData
  ) => {
    const scene = model.parent;

    if (!scene) {
      console.log("Scene element not found");
      return;
    }

    const postPackage = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      postPackageBaseMarkerId
    );

    if (!postPackage) {
      console.log("Post package element not found");
      return;
    }

    const envelope = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      postPackageEnvelopeMarkerId
    );

    if (!envelope) {
      console.log("Envelope element not found");
      return;
    }

    const markerForPackage = scene.children.find((child) => {
      return child.userData.forModelId === newPositionMarkerId;
    });

    if (!markerForPackage) {
      console.log("Marker for package element not found");
      return;
    }

    ArrangementFunctionsHelper.attachModelToNewParent(envelope, postPackage);

    ArrangementFunctionsHelper.moveElementToNewNestPosition(
      postPackage,
      markerForPackage
    );

    ArrangementFunctionsHelper.attachModelToNewParent(envelope, model);
  };

  static moveMinifigToNewPosition = (
    model: Object3D<Object3DEventMap>,
    newMarkerForMinifigId: string,
    {
      minifigHeapsMarkerId,
      minifigTorsoMarkerId,
      minifigHeadMarkerId,
      minifigHutMarkerId,
    }: MinifigMarkersData
  ) => {
    const scene = model.parent;

    if (!scene) {
      console.log("Scene element not found");
      return;
    }

    const minifigHeaps =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        minifigHeapsMarkerId
      );
    const minifigTorso =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        minifigTorsoMarkerId
      );
    const minifigHead = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      minifigHeadMarkerId
    );
    const minifigHut = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      minifigHutMarkerId
    );

    if (!minifigHeaps) {
      console.log("Minifig heaps element not found");
      return;
    }

    if (!minifigTorso) {
      console.log("Minifig torso element not found");
      return;
    }

    if (!minifigHead) {
      console.log("Minifig head element not found");
      return;
    }

    if (!minifigHut) {
      console.log("Minifig head element not found");
      return;
    }

    const markerForMinifig = scene?.children.find((child) => {
      return child.userData.forModelId === newMarkerForMinifigId;
    });

    if (!markerForMinifig) {
      console.log("Minifig marker element not found");
      return;
    }

    minifigHeaps.attach(minifigTorso);
    minifigHeaps.attach(minifigHead);
    minifigHeaps.attach(minifigHut);

    minifigHeaps.position.copy(markerForMinifig.position);
    minifigHeaps.quaternion.copy(markerForMinifig.quaternion);
    scene.add(minifigHeaps);

    model.attach(minifigHeaps);
    model.attach(minifigTorso);
    model.attach(minifigHead);
    model.attach(minifigHut);

    return {
      minifigHeaps,
      minifigTorso,
      minifigHead,
      minifigHut,
    };
  };
}
