import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_1_x_8_3460,
  plate_Specialty_2_x_2_Corner_2420,
} from "../set4552PartsImports";

export const craneCabin4552Phase2: LegoBlockType[] = [
  {
    partPath: plate_Specialty_2_x_2_Corner_2420,
    partStartPosition: new Vector3(180, 0, 300),
    partType: "2420",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: plate_Specialty_2_x_2_Corner_2420,
    partStartPosition: new Vector3(180, 0, 325),
    partType: "2420",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: plate_1_x_8_3460,
    partStartPosition: new Vector3(520, 0, 180),
    partType: "3460",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: plate_1_x_8_3460,
    partStartPosition: new Vector3(520, 0, 195),
    partType: "3460",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
];
