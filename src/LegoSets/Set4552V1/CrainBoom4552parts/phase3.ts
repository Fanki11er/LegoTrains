import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2x4_3020,
  plate_Specialty_2x2_with_Pin_Hole_One_Side_Only_2444,
} from "../set4552PartsImports";

export const crainBoom4552Phase3: LegoBlockType[] = [
  {
    partPath: plate_Specialty_2x2_with_Pin_Hole_One_Side_Only_2444,
    partStartPosition: new Vector3(-20, 0, 250),
    partType: "2444",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(-120, 0, 565),
    partType: "3020",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
];
