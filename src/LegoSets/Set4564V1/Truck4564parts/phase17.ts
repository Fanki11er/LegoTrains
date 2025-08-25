import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x1_3005 } from "../../../PartsImports/Brick_1x1_3005";
import { brick_1x2_3004 } from "../../../PartsImports/Brick_1x2_3004";
import { windscreen_2x4x2_3823 } from "../../../PartsImports/Windscreen_2x4x2_3823";

export const truck4564Phase17: LegoBlockType[] = [
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(535, 0, 175),
    partType: "3005",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.067",
    depends: [],
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(535, 0, 190),
    partType: "3005",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.068",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 160),
    partType: "3004",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.069",
    depends: [],
  },
  {
    partPath: windscreen_2x4x2_3823,
    partStartPosition: new Vector3(-390, 0, 490),
    partType: "3823",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.070",
    depends: [],
  },
];
