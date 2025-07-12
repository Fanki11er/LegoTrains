import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x2_3004,
  plate_1x2_3023,
  slope_Brick_1x3_33_Degrees_4286,
} from "../set4552PartsImports";

export const crainCabin4552Phase3: LegoBlockType[] = [
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(210, 0, 220),
    partType: "4286",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(210, 0, 255),
    partType: "4286",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(300, 0, 275),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(300, 0, 290),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 330),
    partType: "3023",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
];
