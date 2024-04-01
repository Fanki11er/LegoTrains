import { Mesh } from "three";

export const rotateElementUp = (
  element: Mesh,
  axis: "x" | "y",
  angle: number | undefined
) => {
  const rotationAngle = (angle !== undefined ? angle : 90) * (Math.PI / 180);
  switch (axis) {
    case "y": {
      element.rotateY(rotationAngle);
      break;
    }
    default: {
      element.rotateX(rotationAngle);
      break;
    }
  }
};
