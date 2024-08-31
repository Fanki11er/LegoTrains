/* eslint-disable @typescript-eslint/ban-ts-comment */ ////
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import brick_4070 from "../../assets/3D/Brick_4070/Brick_4070.glb";
import electric_Wire_766c28 from "../../assets/3D/ElectricWire_766c28/Electric_Wire_766c28.glb";
import round_Plate_4073 from "../../assets/3D/Round_Plate_4073/Round_Plate_4073.glb";
import brick_1x6_3009 from "../../assets/3D/Brick_1x6_3009/Brick_1x6_3009.glb";

export const phase5: PartInfo[] = [
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 115),
    partId: "3009",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 130),
    partId: "3009",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(180, 0, 85),
    partId: "4070",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(195, 0, 85),
    partId: "4070",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(180, 0, 100),
    partId: "4070",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(195, 0, 100),
    partId: "4070",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: electric_Wire_766c28,
    partStartPosition: new Vector3(180, 0, -20),
    partId: "766c28",
    partPriority: 2,
    canNotBeRotated: true,
    noAutomaticMoveToGroundLevel: true,
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(195, 0, 70),
    partId: "4073",
    partPriority: 2,
    materialId: "whiteTransparentMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(195, 0, 55),
    partId: "4073",
    partPriority: 2,
    materialId: "whiteTransparentMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 55),
    partId: "4073",
    partPriority: 2,
    materialId: "redTransparentMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 70),
    partId: "4073",
    partPriority: 2,
    materialId: "redTransparentMaterial",
  },
];
