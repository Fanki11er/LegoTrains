/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import brick_1x1_3005 from "../../assets/3D/Brick_1x1_3005/Brick_1x1_3005.glb";
import brick_1x2_3004 from "../../assets/3D/Brick_1x2_3004/Brick_1x2_3004.glb";
import technic_Pin_Half_Length_4274 from "../../assets/3D/Technic_Pin_Half_Length_4274/Technic_Pin_Half_Length_4274.glb";
import slope_Brick_45_2x3_3038 from "../../assets/3D/Slope_Brick_45_2x3_3038/Slope_Brick_45_2x3_3038.glb";

export const phase9: PartInfo[] = [
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 150),
    partId: "3005",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 150),
    partId: "3005",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(300, 0, 100),
    partId: "3004",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: technic_Pin_Half_Length_4274,
    partStartPosition: new Vector3(280, 0, 25),
    partId: "4274",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, 0),
    partId: "3038",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -25),
    partId: "3038",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -50),
    partId: "3038",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -75),
    partId: "3038",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -100),
    partId: "3038",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -125),
    partId: "3038",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
];
