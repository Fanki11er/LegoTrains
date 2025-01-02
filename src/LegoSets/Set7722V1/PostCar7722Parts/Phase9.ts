import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x2_3004, brick_1x6_3009 } from "../PartsImports";

export const steamLocomotive7722PostCarPhase9: LegoBlockType[] = [
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 250),
    partType: "3009",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.056",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 265),
    partType: "3009",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.057",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(425, 0, 100),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.058",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(450, 0, 100),
    partType: "3004",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.059",
    depends: [],
  },
];
