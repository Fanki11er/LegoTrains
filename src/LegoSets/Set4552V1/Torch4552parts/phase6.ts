import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_1x1_3024,
  plate_Specialty_1x1_with_Clip_Horizontal_6019,
} from "../set4552PartsImports";

export const torch4552Phase6: LegoBlockType[] = [
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(-80, 0, 175),
    partType: "3024",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },

  {
    partPath: plate_Specialty_1x1_with_Clip_Horizontal_6019,
    partStartPosition: new Vector3(-60, 0, 175),
    partType: "6019",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
];
