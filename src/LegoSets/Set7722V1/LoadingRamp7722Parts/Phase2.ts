import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x2_3004,
  brick_2x3_3002,
  slope_Brick_3_x_2_33_Degrees_3298,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722LoadingRampPhase2: LegoBlockType[] = [
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(475, 0, -180),
    partType: "3298",
    slotId: "ModelMarker.005",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(475, 0, -145),
    partType: "3298",
    slotId: "ModelMarker.006",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(375, 0, 80),
    partType: "3004",
    slotId: "ModelMarker.007",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(400, 0, 80),
    partType: "3004",
    slotId: "ModelMarker.008",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(375, 0, 60),
    partType: "3004",
    slotId: "ModelMarker.009",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(400, 0, 60),
    partType: "3004",
    slotId: "ModelMarker.010",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 215),
    partType: "3002",
    slotId: "ModelMarker.011",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
];
