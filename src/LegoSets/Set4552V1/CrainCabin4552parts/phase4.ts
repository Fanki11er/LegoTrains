import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x2_3004,
  brick_1x8_Yellow_With_Red_Train_Logo_Pattern_3008,
} from "../set4552PartsImports";

export const crainCabin4552Phase4: LegoBlockType[] = [
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(300, 0, 305),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: brick_1x8_Yellow_With_Red_Train_Logo_Pattern_3008,
    partStartPosition: new Vector3(500, 0, 370),
    partType: "3008",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: brick_1x8_Yellow_With_Red_Train_Logo_Pattern_3008,
    partStartPosition: new Vector3(500, 0, 385),
    partType: "3008",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
];
