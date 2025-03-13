import { Object3D, Object3DEventMap } from "three";
import { convertDegreesToRadians } from "../Utilities/utilities";

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
    degree: number,
    armSide: "Left" | "Right"
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

    const selectedLeg = arm as Object3D<Object3DEventMap>;
    selectedLeg.rotateZ(convertDegreesToRadians(degree));
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
}
