import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  glass_for_Train_Door_4183,
  train_Door_1x4x5_Left_With_Logo_4181,
  train_Door_1x4x5_Right_4182,
} from "../set4552PartsImports";

export const workshop4552Phase7: LegoBlockType[] = [
  {
    partPath: train_Door_1x4x5_Right_4182,
    partStartPosition: new Vector3(-235, 0, 340),
    partType: "6182",
    materialId: "greenPlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
  {
    partPath: glass_for_Train_Door_4183,
    partStartPosition: new Vector3(-235, 0, 390),
    partType: "4183",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.029",
    depends: ["ModelMarker.028"],
  },
  {
    partPath: train_Door_1x4x5_Left_With_Logo_4181,
    partStartPosition: new Vector3(-160, 0, 340),
    partType: "6181",
    materialId: "greenPlasticMaterial",
    slotId: "ModelMarker.030",
    depends: [],
  },
  {
    partPath: glass_for_Train_Door_4183,
    partStartPosition: new Vector3(-210, 0, 390),
    partType: "4183",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.031",
    depends: ["ModelMarker.030"],
  },
];
