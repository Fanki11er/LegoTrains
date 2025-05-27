import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x2_3004, brick_1x6_3009 } from "../Set7722V1PartsImports";

export const steamLocomotive7722PostCarPhase8: LegoBlockType[] = [
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 220),
    partType: "3009",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.052",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 235),
    partType: "3009",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.053",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(375, 0, 100),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.054",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(400, 0, 100),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.055",
    depends: [],
  },
];
