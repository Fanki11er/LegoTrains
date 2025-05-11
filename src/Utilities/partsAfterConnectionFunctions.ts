import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunction } from "../Types/ArrangementFunction";

const { rotateLeg, rotateMinifigArm, rotateElementOnYAxis } =
  ArrangementFunctionsHelper;

export type PartsArraignmentFunctionsTypes =
  | "rightLeg30Forward"
  | "rotateHead30Left"
  | "rotateHat30Left"
  | "rightArmForward60deg"
  | "minifigSit"
  | "minifigArms60DegForward";

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
    case "minifigSit": {
      return minifigSit;
    }
    case "minifigArms60DegForward": {
      return minifigArms60DegForward;
    }

    default: {
      return undefined;
    }
  }
};

const rightLeg30Forward = (model: Object3D<Object3DEventMap>) => {
  rotateLeg(model, -30, "Right");
  return [];
};

const rotateHead30Left = (model: Object3D<Object3DEventMap>) => {
  rotateElementOnYAxis(model, 30);
  return [];
};

const rotateCup30Left = (model: Object3D<Object3DEventMap>) => {
  rotateElementOnYAxis(model, 30);
  return [];
};

const rightArmForward60deg = (model: Object3D<Object3DEventMap>) => {
  rotateMinifigArm(model, "Right", 60, 30);
  return [];
};

const minifigSit = (model: Object3D<Object3DEventMap>) => {
  rotateLeg(model, -90, "Right");
  rotateLeg(model, -90, "Left");
  return [];
};

const minifigArms60DegForward = (model: Object3D<Object3DEventMap>) => {
  rotateMinifigArm(model, "Right", 20, 25);
  rotateMinifigArm(model, "Left", 25, 0);
  return [];
};
