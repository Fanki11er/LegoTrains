import { Object3D, Object3DEventMap } from "three";
import { convertDegreesToRadians } from "../Utilities/utilities";
import { saveErrorLog } from "../firebase/writeToDbFunctions";
import {
  BarrelMarkersData,
  HelmetMarkersData,
  MinifigMarkersData,
  PaletteMarkersData,
  PostPackageMarkersData,
} from "../Types/ArrangeablePartsTypes";

export class ArrangementFunctionsHelper {
  static throwErrorIfElementIsMissing = (
    element: Object3D<Object3DEventMap> | undefined | null,
    errorMessage: string
  ) => {
    if (!element) {
      console.error(errorMessage);
      saveErrorLog(errorMessage);
      throw new Error(errorMessage);
    }
  };

  static findModelRootMarker = (
    model: Object3D<Object3DEventMap>,
    modelName: string
  ) => {
    const modelRootMarker = model.children.find((child) => {
      return child.name === `${modelName}_ModelRootMarker`;
    });

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      modelRootMarker,
      `Model root marker not found for ${modelName}`
    );
    return modelRootMarker;
  };

  static findElementByName = (
    model: Object3D<Object3DEventMap>,
    name: string
  ) => {
    const element = model.getObjectByName(name);
    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      element,
      `${name} element not found`
    );
    return element;
  };

  static findMarkerByName = (
    model: Object3D<Object3DEventMap>,
    name: string
  ) => {
    const element = model.getObjectByName(name.replace(".", ""));
    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      element,
      `${name} element not found`
    );
    return element;
  };

  static findModelPartByName = (
    model: Object3D<Object3DEventMap>,
    name: string
  ) => {
    let foundPart: Object3D<Object3DEventMap> | undefined = undefined;
    model.traverse((element) => {
      if (element.name.includes(name)) {
        foundPart = element;
      }
    });

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      foundPart,
      `${name} element not found`
    );

    return foundPart! as Object3D<Object3DEventMap>;
  };

  static findElementConnectedToMarker = (
    model: Object3D<Object3DEventMap>,
    markerName: string,
    errorMessage: string = "Element not found"
  ) => {
    const element = model.children.find((child) => {
      return child.userData.isConnected === markerName;
    });

    if (!element) {
      console.error(errorMessage);
      saveErrorLog(errorMessage, markerName);
      throw new Error(errorMessage);
    }

    return element;
  };

  static findMarkerById = (
    model: Object3D<Object3DEventMap>,
    markerId: string
  ) => {
    const marker = model?.children.find((child) => {
      return child.userData.forModelId === markerId;
    });

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      marker,
      `Marker element: ${markerId} not found`
    );

    return marker as Object3D<Object3DEventMap>;
  };

  static rotateLeg = (
    model: Object3D<Object3DEventMap>,
    degree: number,
    legSide: "Left" | "Right"
  ) => {
    const leg = ArrangementFunctionsHelper.findModelPartByName(
      model,
      `Minifig_Leg_${legSide}`
    );

    leg.rotateX(convertDegreesToRadians(degree));
  };

  static rotateElementOnYAxis = (
    model: Object3D<Object3DEventMap>,
    degree: number
  ) => {
    model.rotateY(convertDegreesToRadians(degree));
  };

  static rotateElementOnXAxis = (
    model: Object3D<Object3DEventMap>,
    degree: number
  ) => {
    model.rotateX(convertDegreesToRadians(degree));
  };

  static rotateElementOnZAxis = (
    model: Object3D<Object3DEventMap>,
    degree: number
  ) => {
    model.rotateZ(convertDegreesToRadians(degree));
  };

  static rotateMinifigArm = (
    model: Object3D<Object3DEventMap>,
    armSide: "Left" | "Right",
    degreeZ: number,
    degreeX: number = 0,
    degreeY: number = 0
  ) => {
    const arm = ArrangementFunctionsHelper.findModelPartByName(
      model,
      `Minifig_Arm_${armSide}`
    );

    arm.rotateZ(convertDegreesToRadians(degreeZ));
    arm.rotateX(convertDegreesToRadians(degreeX));
    arm.rotateY(convertDegreesToRadians(degreeY));
  };

  static rotateCoupling = (
    model: Object3D<Object3DEventMap>,
    degree: number,
    couplingMarkerName: string,
    cylinderMarkerName: string
  ) => {
    const coupling = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      couplingMarkerName,
      "Coupling element not found"
    );

    const magnetCylinder =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        cylinderMarkerName,
        "Magnet cylinder element not found"
      );

    const originalOParent = coupling.parent;

    coupling.attach(magnetCylinder);

    ArrangementFunctionsHelper.rotateElementOnYAxis(coupling, degree);

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      originalOParent,
      "Parent element is missing"
    );

    originalOParent!.attach(magnetCylinder);
  };

  static attachModelToNewParent = (
    model: Object3D<Object3DEventMap>,
    newParent: Object3D<Object3DEventMap> | null | undefined
  ) => {
    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      newParent,
      "New parent element not found"
    );

    const originalParent = model.parent;
    newParent!.attach(model);
    return originalParent;
  };

  static moveElementToNewNestPosition = (
    element: Object3D<Object3DEventMap>,
    newNest: Object3D<Object3DEventMap>
  ) => {
    const elementParent = element.parent;
    const scene = newNest.parent;

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      elementParent,
      "Nest parent not found"
    );

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      scene,
      "Scene element not found"
    );

    element.position.copy(newNest.position);
    element.quaternion.copy(newNest.quaternion);
    scene!.add(element);
    elementParent!.attach(element);
  };

  static arrangePalette = (
    model: Object3D<Object3DEventMap>,
    newPositionMarkerId: string,
    { paletteBaseMarkerId, paletteLegsMarkersIds }: PaletteMarkersData
  ) => {
    const { paletteBase, disconnectPalette } =
      ArrangementFunctionsHelper.completePalette(model, {
        paletteBaseMarkerId,
        paletteLegsMarkersIds,
      });

    const scene = model.parent;

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      scene,
      "Scene element not found"
    );

    const markerForPaletteBase = ArrangementFunctionsHelper.findMarkerById(
      scene!,
      newPositionMarkerId
    );

    ArrangementFunctionsHelper.moveElementToNewNestPosition(
      paletteBase,
      markerForPaletteBase
    );

    disconnectPalette();
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

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      scene,
      "Scene element not found"
    );

    const postPackage = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      postPackageBaseMarkerId,
      "Post package element not found"
    );

    const envelope = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      postPackageEnvelopeMarkerId,
      "Envelope element not found"
    );

    const markerForPackage = ArrangementFunctionsHelper.findMarkerById(
      scene!,
      newPositionMarkerId
    );

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
    }: MinifigMarkersData,
    sceneRootMarker?: Object3D<Object3DEventMap>
  ) => {
    const scene = sceneRootMarker || model.parent;

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      scene,
      "Scene element not found"
    );

    const minifigHeaps =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        minifigHeapsMarkerId,
        "Minifig heaps element not found"
      );

    const minifigTorso =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        minifigTorsoMarkerId,
        "Minifig torso element not found"
      );

    const minifigHead = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      minifigHeadMarkerId,
      "Minifig head element not found"
    );

    const minifigHut = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      minifigHutMarkerId,
      "Minifig hut element not found"
    );

    const markerForMinifig = ArrangementFunctionsHelper.findMarkerById(
      scene!,
      newMarkerForMinifigId
    );

    minifigHeaps.attach(minifigTorso);
    minifigHeaps.attach(minifigHead);
    minifigHeaps.attach(minifigHut);

    minifigHeaps.position.copy(markerForMinifig.position);
    minifigHeaps.quaternion.copy(markerForMinifig.quaternion);
    scene!.add(minifigHeaps);

    const disconnectMinifig = () => {
      ArrangementFunctionsHelper.attachModelToNewParent(minifigHut, model);
      ArrangementFunctionsHelper.attachModelToNewParent(minifigHead, model);
      ArrangementFunctionsHelper.attachModelToNewParent(minifigTorso, model);
      ArrangementFunctionsHelper.attachModelToNewParent(minifigHeaps, model);
    };

    return {
      minifigHeaps,
      minifigTorso,
      minifigHead,
      minifigHut,
      disconnectMinifig,
    };
  };

  static connectMinifig = (
    model: Object3D<Object3DEventMap>,
    minifigMarkersData: MinifigMarkersData
  ) => {
    const {
      minifigHeapsMarkerId,
      minifigTorsoMarkerId,
      minifigHeadMarkerId,
      minifigHutMarkerId,
    } = minifigMarkersData;

    const minifigHeaps =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        minifigHeapsMarkerId,
        "Minifig heaps element not found"
      );

    const minifigTorso =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        minifigTorsoMarkerId,
        "Minifig torso element not found"
      );

    const minifigHead = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      minifigHeadMarkerId,
      "Minifig head element not found"
    );

    const minifigHut = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      minifigHutMarkerId,
      "Minifig hut element not found"
    );

    minifigHeaps.attach(minifigTorso);
    minifigHeaps.attach(minifigHead);
    minifigHeaps.attach(minifigHut);

    const disconnectMinifig = () => {
      ArrangementFunctionsHelper.attachModelToNewParent(minifigHut, model);
      ArrangementFunctionsHelper.attachModelToNewParent(minifigHead, model);
      ArrangementFunctionsHelper.attachModelToNewParent(minifigTorso, model);
      ArrangementFunctionsHelper.attachModelToNewParent(minifigHeaps, model);
    };

    return {
      minifigHeaps,
      minifigTorso,
      minifigHead,
      minifigHut,
      disconnectMinifig,
    };
  };

  static completePalette = (
    model: Object3D<Object3DEventMap>,
    { paletteBaseMarkerId, paletteLegsMarkersIds }: PaletteMarkersData
  ) => {
    const paletteBase = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      paletteBaseMarkerId,
      "Palette base element not found"
    );

    const paletteLeg1 = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      paletteLegsMarkersIds[0],
      "Palette leg 1 element not found"
    );
    const paletteLeg2 = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      paletteLegsMarkersIds[1],
      "Palette leg 2 element not found"
    );

    ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg1, paletteBase);

    ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg2, paletteBase);

    const disconnectPalette = () => {
      ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg1, model);
      ArrangementFunctionsHelper.attachModelToNewParent(paletteLeg2, model);
      ArrangementFunctionsHelper.attachModelToNewParent(paletteBase, model);
    };

    return {
      paletteBase,
      disconnectPalette,
    };
  };

  static completeBarrel = (
    model: Object3D<Object3DEventMap>,
    {
      barrelBottomPartMarkerId,
      barrelRingMarkerId,
      barrelTopPartMarkerId,
    }: BarrelMarkersData
  ) => {
    const barrelBottomPart =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        barrelBottomPartMarkerId,
        "Barrel bottom part  element not found"
      );

    const barrelRing = ArrangementFunctionsHelper.findElementConnectedToMarker(
      model,
      barrelRingMarkerId,
      "Barrel ring element not found"
    );

    const barrelTopPart =
      ArrangementFunctionsHelper.findElementConnectedToMarker(
        model,
        barrelTopPartMarkerId,
        "Barrel top part element not found"
      );

    ArrangementFunctionsHelper.attachModelToNewParent(
      barrelRing,
      barrelBottomPart
    );

    ArrangementFunctionsHelper.attachModelToNewParent(
      barrelTopPart,
      barrelBottomPart
    );

    const disconnectBarrel = () => {
      ArrangementFunctionsHelper.attachModelToNewParent(barrelRing, model);
      ArrangementFunctionsHelper.attachModelToNewParent(barrelTopPart, model);
      ArrangementFunctionsHelper.attachModelToNewParent(
        barrelBottomPart,
        model
      );
    };

    return {
      barrelBottomPart,
      disconnectBarrel,
    };
  };

  static changeHoseNozzlePhase = (model: Object3D<Object3DEventMap>) => {
    const nozzle = model.getObjectByName("194cx1");

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      nozzle,
      "Hose nozzle element is missing"
    );

    switch (nozzle!.userData.activePhase) {
      case "base": {
        nozzle!.userData.activePhase = "bent_1";

        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          nozzle!,
          "bent_1"
        );
        break;
      }
      case "bent_1": {
        nozzle!.userData.activePhase = "bent_2";

        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          nozzle!,
          "bent_2"
        );
        break;
      }
      case "bent_2": {
        nozzle!.userData.activePhase = "bent_3";
        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          nozzle!,
          "bent_3"
        );
        break;
      }
      case "bent_3": {
        nozzle!.userData.activePhase = "bent_4";
        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          nozzle!,
          "bent_4"
        );
        break;
      }

      default:
        break;
    }

    return [];
  };

  static switchPhaseChildrenVisibilityAndScale = (
    model: Object3D<Object3DEventMap>,
    activePhase: string
  ) => {
    model.children.forEach((child) => {
      if (
        child.userData.phaseName === activePhase &&
        child.userData.isPhaseChild
      ) {
        child.scale.set(1, 1, 1);
        child.visible = true;
      } else if (
        child.userData.isPhaseChild &&
        child.userData.phaseName !== activePhase
      ) {
        child.visible = false;
        child.scale.set(0, 0, 0);
      }
    });
  };

  static rotateSmallAntenna = (
    model: Object3D<Object3DEventMap>,
    degree: number
  ) => {
    const antennaLeverHandle = ArrangementFunctionsHelper.findModelPartByName(
      model,
      "Antenna_Small_Lever_Handle"
    );

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      antennaLeverHandle,
      "Antenna lever handle element not found"
    );
    ArrangementFunctionsHelper.rotateElementOnZAxis(antennaLeverHandle, degree);
  };

  static hideElement = (model: Object3D<Object3DEventMap>) => {
    model.visible = false;
  };

  static changeWinchPhase = (model: Object3D<Object3DEventMap>) => {
    const winch = model.getObjectByName("73037");

    ArrangementFunctionsHelper.throwErrorIfElementIsMissing(
      winch,
      "Hose winch element is missing"
    );

    switch (winch!.userData.activePhase) {
      case "": {
        winch!.userData.activePhase = "layOnGround";

        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          winch!,
          "layOnGround"
        );
        break;
      }
      case "layOnGround": {
        winch!.userData.activePhase = "position_1";

        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          winch!,
          "position_1"
        );
        break;
      }
      case "position_1": {
        winch!.userData.activePhase = "position_2";

        ArrangementFunctionsHelper.switchPhaseChildrenVisibilityAndScale(
          winch!,
          "position_2"
        );
        break;
      }

      default:
        break;
    }

    return [];
  };

  static movePartialModelToCompletedModel = (
    completeModel: Object3D<Object3DEventMap>,
    partialModel: Object3D<Object3DEventMap>,
    targetMarkerId: string
  ) => {
    const partialModelTargetMarker =
      ArrangementFunctionsHelper.findMarkerByName(
        completeModel,
        targetMarkerId
      );

    const originalParent = ArrangementFunctionsHelper.attachModelToNewParent(
      partialModel,
      completeModel
    );

    partialModel.position.copy(partialModelTargetMarker!.position);

    const finishPartialModelConnection = () => {
      ArrangementFunctionsHelper.attachModelToNewParent(
        partialModel,
        originalParent
      );
    };

    return finishPartialModelConnection;
  };

  static connectHelmet = (
    parentModel: Object3D<Object3DEventMap>,
    helmetMarkersData: HelmetMarkersData
  ) => {
    const helmet = ArrangementFunctionsHelper.findElementConnectedToMarker(
      parentModel,
      helmetMarkersData.helmetMarkerId
    );
    const helmetVisor = ArrangementFunctionsHelper.findElementConnectedToMarker(
      parentModel,
      helmetMarkersData.helmetVisorMarkerId
    );

    ArrangementFunctionsHelper.attachModelToNewParent(helmetVisor, helmet);

    const disconnectHelmet = () => {
      ArrangementFunctionsHelper.attachModelToNewParent(
        helmetVisor,
        parentModel
      );
    };

    return {
      helmet,
      helmetVisor,
      disconnectHelmet,
    };
  };

  static changeElementPosition = (
    sceneRootMarker: Object3D<Object3DEventMap>,
    parentModel: Object3D<Object3DEventMap>,
    elementMarkerId: string,
    newPositionMarkerId: string
  ) => {
    const element = ArrangementFunctionsHelper.findElementConnectedToMarker(
      parentModel,
      elementMarkerId
    );

    const newPositionMarker = ArrangementFunctionsHelper.findMarkerByName(
      sceneRootMarker,
      newPositionMarkerId
    );

    ArrangementFunctionsHelper.attachModelToNewParent(element, sceneRootMarker);

    element.position!.copy(newPositionMarker!.position);
    element.rotation!.copy(newPositionMarker!.rotation);

    ArrangementFunctionsHelper.attachModelToNewParent(element, parentModel);
  };
}
