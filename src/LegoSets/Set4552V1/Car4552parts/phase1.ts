import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_4_x_6_3032 } from "../set4552PartsImports";

export const car4552Phase1: LegoBlockType[] = [
  {
    partPath: plate_4_x_6_3032,
    partStartPosition: new Vector3(-400, 0, 150),
    partType: "3032",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
];
