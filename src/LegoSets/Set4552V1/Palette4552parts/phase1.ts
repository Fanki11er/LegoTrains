import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x4_3710 } from "../set4552PartsImports";

export const palette4552Phase1: LegoBlockType[] = [
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-300, 0, 140),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-300, 0, 155),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
];
