import {
  Box3,
  Euler,
  Mesh,
  Object3D,
  Object3DEventMap,
  SRGBColorSpace,
  Texture,
  Vector3,
} from "three";
import { SetLegoBlocks } from "../LegoSets/Set7722V1/SteamLocomotive7722Parts/SetLegoBlockTypes";
import { ModelBlock } from "../Types/ModelBlock";
import { saveErrorLog } from "../firebase/writeToDbFunctions";
import { ObjectPersistenceDataWithChildren } from "../Classes/PersistenceModule";

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

export const convertToVector3 = (numbers: number[]) => {
  return new Vector3().fromArray(numbers);
};

export const convertToEuler = (numbers: number[]) => {
  return new Euler(numbers[0], numbers[1], numbers[2]);
};

export const checkIfIsLoading = (loaders: boolean[]) => {
  return loaders.includes(true);
};

export const checkIfIsErrors = (errors: (Error | null)[]) => {
  const err = errors.find((e) => {
    return e !== null;
  });
  if (err) {
    saveErrorLog(err.message);
  }
  return err;
};

export const convertDegreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

export const setPersistenceDataRecursively = (
  persistenceDataChildren: ObjectPersistenceDataWithChildren[],
  modelChildren: Object3D<Object3DEventMap>[]
) => {
  if (persistenceDataChildren.length !== modelChildren.length) {
    console.log("Incorrect children number");
    return;
  }
  for (let i = 0; i < persistenceDataChildren.length; i++) {
    modelChildren[i].position.copy(
      convertToVector3(persistenceDataChildren[i].position)
    );
    modelChildren[i].rotation.copy(
      convertToEuler(persistenceDataChildren[i].rotation)
    );

    modelChildren[i].visible = persistenceDataChildren[i].visible;
    setPersistenceDataRecursively(
      persistenceDataChildren[i].children,
      modelChildren[i].children
    );
  }
};
