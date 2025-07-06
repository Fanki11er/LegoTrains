import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_Specialty_1x1_with_Clip_Horizontal_6019,
  roundOpenStud_3062b,
} from "../set4552PartsImports";

export const torch4552Phase3: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x1_with_Clip_Horizontal_6019,
    partStartPosition: new Vector3(-175, 0, 150),
    partType: "6019",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-100, 0, 175),
    partType: "3062b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-100, 0, 190),
    partType: "3062b",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
];
