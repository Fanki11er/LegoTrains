import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_Specialty_1x1_with_Clip_Vertical_4085c,
  plate_Specialty_2_x_2_Corner_2420,
} from "../set4552PartsImports";

export const car4552Phase6: LegoBlockType[] = [
  {
    partPath: plate_Specialty_2_x_2_Corner_2420,
    partStartPosition: new Vector3(180, 0, 150),
    partType: "2420",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: plate_Specialty_2_x_2_Corner_2420,
    partStartPosition: new Vector3(180, 0, 175),
    partType: "2420",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x1_with_Clip_Vertical_4085c,
    partStartPosition: new Vector3(-60, 0, 205),
    partType: "4085c",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x1_with_Clip_Vertical_4085c,
    partStartPosition: new Vector3(-60, 0, 220),
    partType: "4085c",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
];
