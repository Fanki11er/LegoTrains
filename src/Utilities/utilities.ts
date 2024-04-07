import { Mesh } from "three";

export const rotateElementUp = (
  element: Mesh,
  axis: "x" | "y",
  angle: number | undefined
) => {
  const rotationAngle = (angle !== undefined ? angle : 90) * (Math.PI / 180);
  switch (axis) {
    case "y": {
      if (element.userData.isConnected && element.parent) {
        element.parent!.rotateY(rotationAngle);
      } else {
        element.rotateY(rotationAngle);
      }
      break;
    }
    default: {
      if (element.userData.isConnected && element.parent) {
        element.parent!.rotateX(rotationAngle);
      } else {
        element.rotateX(rotationAngle);
      }
      break;
    }
  }
};
