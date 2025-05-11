import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x4_3010,
  brick_1x6_3009,
  brick_4070,
  hose_Flexible_8p5_73590c01a,
  slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6,
} from "../PartsImports";

export const steamLocomotive7722LocomotiveModelPhase7: LegoBlockType[] = [
  {
    partPath: slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6,
    partStartPosition: new Vector3(145, 0, 30),
    partType: "3039px6",
    slotId: "ModelMarker.048",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 130),
    partType: "3010",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.045",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 145),
    partType: "3010",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.046",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 145),
    partType: "3009",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.047",
    depends: [],
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(210, 0, 85),
    partType: "4070",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.050",
    depends: [],
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(210, 0, 100),
    partType: "4070",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.049",
    depends: [],
  },
  {
    partPath: hose_Flexible_8p5_73590c01a,
    partStartPosition: new Vector3(275, 0, 70),
    partType: "73590c01a",
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
    slotId: "ModelMarker.052",
    depends: ["ModelMarker.050"],
  },
  {
    partPath: hose_Flexible_8p5_73590c01a,
    partStartPosition: new Vector3(315, 0, 70),
    partType: "73590c01a",
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
    slotId: "ModelMarker.051",
    depends: ["ModelMarker.049"],
  },
];
