import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunction } from "../Types/ArrangementFunction";

export type PartsArraignmentFunctionsTypes =
  | "rightLeg30Forward"
  | "rotateHead30Left"
  | "rotateHat30Left"
  | "rightArmForward60deg";

export const getPartArrangementFunction = (
  name: PartsArraignmentFunctionsTypes
): ArraignmentFunction | undefined => {
  switch (name) {
    case "rightLeg30Forward": {
      return rightLeg30Forward;
    }
    case "rotateHead30Left": {
      return rotateHead30Left;
    }
    case "rotateHat30Left": {
      return rotateCup30Left;
    }
    case "rightArmForward60deg": {
      return rightArmForward60deg;
    }
    default: {
      return undefined;
    }
  }
};

const rightLeg30Forward = (model: Object3D<Object3DEventMap>) => {
  ArrangementFunctionsHelper.rotateLeg(model, -30, "Right");
};

const rotateHead30Left = (model: Object3D<Object3DEventMap>) => {
  ArrangementFunctionsHelper.rotateElementOnYAxis(model, 30);
};

const rotateCup30Left = (model: Object3D<Object3DEventMap>) => {
  ArrangementFunctionsHelper.rotateElementOnYAxis(model, 30);
};

const rightArmForward60deg = (model: Object3D<Object3DEventMap>) => {
  ArrangementFunctionsHelper.rotateMinifigArm(model, "Right", 60, 30);
};
