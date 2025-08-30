import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x2_3004 } from "../../../PartsImports/Brick_1x2_3004";
import { brick_1x6_3009 } from "../../../PartsImports/Brick_1x6_3009";
import { brick_Specialty_2x2_Corner_2357 } from "../../../PartsImports/Brick_Specialty_2x2_Corner_2357";

export const loadingRamp4564Phase2: LegoBlockType[] = [
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 175),
    partType: "3004",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 190),
    partType: "3004",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(430, 0, 130),
    partType: "3009",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
  {
    partPath: brick_Specialty_2x2_Corner_2357,
    partStartPosition: new Vector3(590, 0, 150),
    partType: "2357",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: brick_Specialty_2x2_Corner_2357,
    partStartPosition: new Vector3(590, 0, 175),
    partType: "2357",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },
];
