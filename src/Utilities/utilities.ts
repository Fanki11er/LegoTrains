import { Box3, Mesh, Object3D, SRGBColorSpace, Texture } from "three";
import { SetLegoBlocks } from "../LegoSets/Set7722V1/SteamLocomotive7722Parts/SetLegoBlockTypes";
import { ModelBlock } from "../Types/ModelBlock";

export const rotateElementUp = (
  element: Mesh | Object3D,
  axis: "x" | "y",
  angle: number | undefined
) => {
  const rotationAngle = (angle !== undefined ? angle : 90) * (Math.PI / 180);

  switch (axis) {
    case "y": {
      element.rotateY(rotationAngle);
      moveElementToFloorLevel(element);
      break;
    }
    default: {
      element.rotateX(rotationAngle);
      moveElementToFloorLevel(element);
      break;
    }
  }
};

export const moveElementToFloorLevel = (model: Mesh | Object3D) => {
  const box = new Box3();
  box.setFromObject(model);
  if (box.min.y < 0 && box.min.y !== -Infinity) {
    model.position.y += Math.abs(box.min.y);
  } else if (box.min.y > 0 && box.min.y !== Infinity) {
    model.position.y -= Math.abs(box.min.y);
  }
};

export const setTextureOptions = (texture: Texture) => {
  texture.flipY = false;
  texture.colorSpace = SRGBColorSpace;
};

export const addForModelPhaseBlocks = (
  setLegoBlocks: SetLegoBlocks,
  modelName: string,
  blocks: ModelBlock[]
) => {
  blocks.forEach((block) => {
    setLegoBlocks.addForModelPhaseBlocks(
      modelName,
      block.phaseId,
      block.legoBlockTypes
    );
  });
};
