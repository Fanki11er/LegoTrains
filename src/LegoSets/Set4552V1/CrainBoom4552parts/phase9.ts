import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_Specialty_1_x_2_with_Pin_2458,
  crane_Arm_Center_2351,
  tile_Specialty_1x1_with_Clip_2555,
} from "../set4552PartsImports";

export const crainBoom4552Phase9: LegoBlockType[] = [
  {
    partPath: crane_Arm_Center_2351,
    partStartPosition: new Vector3(-10, 0, 520),
    partType: "2351",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.024",
    depends: [],
  },
  {
    partPath: brick_Specialty_1_x_2_with_Pin_2458,
    partStartPosition: new Vector3(300, 0, 385),
    partType: "2458",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.025",
    depends: [],
  },
  {
    partPath: brick_Specialty_1_x_2_with_Pin_2458,
    partStartPosition: new Vector3(300, 0, 410),
    partType: "2458",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.026",
    depends: [],
  },
  {
    partPath: tile_Specialty_1x1_with_Clip_2555,
    partStartPosition: new Vector3(-55, 0, 145),
    partType: "2555",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.027",
    depends: [],
  },
];
