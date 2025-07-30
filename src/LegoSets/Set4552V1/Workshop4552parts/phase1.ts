import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_4x8_3035 } from "../set4552PartsImports";

export const workshop4552Phase1: LegoBlockType[] = [
  {
    partPath: plate_4x8_3035,
    partStartPosition: new Vector3(-400, 0, 195),
    partType: "3035",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
];
