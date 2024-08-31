/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6 from "../../assets/3D/Slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6/Slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6.glb";
import brick_1x4_3010 from "../../assets/3D/Brick_1x4_3010/Brick_1x4_3010.glb";
import brick_1x6_3009 from "../../assets/3D/Brick_1x6_3009/Brick_1x6_3009.glb";
import brick_4070 from "../../assets/3D/Brick_4070/Brick_4070.glb";
import hose_Flexible_8p5_73590c01a from "../../assets/3D/Hose_Flexible_8p5_73590c01a/Hose_Flexible_8p5_73590c01a.glb";

export const phase7: PartInfo[] = [
  {
    partPath: slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6,
    partStartPosition: new Vector3(145, 0, 30),
    partId: "3039px6",
    partPriority: 1,
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 130),
    partId: "3010",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 145),
    partId: "3010",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 145),
    partId: "3009",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(210, 0, 85),
    partId: "4070",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(210, 0, 100),
    partId: "4070",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: hose_Flexible_8p5_73590c01a,
    partStartPosition: new Vector3(275, 0, 70),
    partId: "73590c01a",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
  },
  {
    partPath: hose_Flexible_8p5_73590c01a,
    partStartPosition: new Vector3(315, 0, 70),
    partId: "73590c01a",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
  },
];
