/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import brick_1x4_3010 from "../../assets/3D/Brick_1x4_3010/Brick_1x4_3010.glb";
import brick_2x3_3002 from "../../assets/3D/Brick_2x3_3002/Brick_2x3_3002.glb";
import plate_1x6_3666 from "../../assets/3D/Plate_1x6_3666/plate_1x6_3666.glb";
import slope_Brick_Inverted_3665 from "../../assets/3D/Slope_Brick_Inverted_3665/Slope_Brick_Inverted_3665.glb";
import slope_Brick_Inverted_2x2_3660 from "../../assets/3D/Slope_Brick_Inverted_2x2_3660/Slope_Brick_Inverted_2x2_3660.glb";

export const phase6: PartInfo[] = [
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 115),
    partId: "3010",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 115),
    partId: "3002",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 140),
    partId: "3002",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 165),
    partId: "3002",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 190),
    partId: "3002",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 145),
    partId: "3666",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(220, 0, 95),
    partId: "3665",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(240, 0, 95),
    partId: "3665",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(220, 0, 70),
    partId: "3660",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(245, 0, 70),
    partId: "3660",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
];
