import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x2_3004,
  brick_2x3_3002,
  plate_1x4_3710,
  slope_Brick_45_2x2_3039,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722LoadingRampPhase3: LegoBlockType[] = [
  {
    partPath: slope_Brick_45_2x2_3039,
    partStartPosition: new Vector3(400, 0, -65),
    partType: "3039",
    slotId: "ModelMarker.012",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: slope_Brick_45_2x2_3039,
    partStartPosition: new Vector3(425, 0, -65),
    partType: "3039",
    slotId: "ModelMarker.013",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 240),
    partType: "3002",
    slotId: "ModelMarker.014",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(425, 0, 80),
    partType: "3004",
    slotId: "ModelMarker.015",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 270),
    partType: "3710",
    slotId: "ModelMarker.016",
    materialId: "oldGrayPlasticMaterial",
    depends: [],
  },
];
