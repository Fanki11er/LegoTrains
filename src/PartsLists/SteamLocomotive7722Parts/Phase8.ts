/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import brick_1x1_3005 from "../../assets/3D/Brick_1x1_3005/Brick_1x1_3005.glb";
import brick_1x8_3008 from "../../assets/3D/Brick_1x8_3008/Brick_1x8_3008.glb";
import technic_Brick_1x2_With_Pin_Hole_3700 from "../../assets/3D/Technic_Brick_1x2_With_Pin_Hole_3700/Technic_Brick_1x2_With_Pin_Hole_3700.glb";

export const phase8: PartInfo[] = [
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 135),
    partId: "3005",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 135),
    partId: "3005",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(290, 0, 115),
    partId: "3008",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(290, 0, 130),
    partId: "3008",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: technic_Brick_1x2_With_Pin_Hole_3700,
    partStartPosition: new Vector3(275, 0, 100),
    partId: "3700",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
];
