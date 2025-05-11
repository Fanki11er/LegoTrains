import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  slope_Brick_3_x_2_33_Degrees_3298,
  tile_2x2_With_Grove_3068b,
  train_Roof_6x6_4509,
} from "../PartsImports";

export const steamLocomotive7722batteryCarPhase3: LegoBlockType[] = [
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(420, 0, 300),
    partType: "4509",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(480, 0, 300),
    partType: "4509",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(315, 0, -180),
    partType: "3298",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(315, 0, -145),
    partType: "3298",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-215, 0, 180),
    partType: "3068b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-240, 0, 180),
    partType: "3068b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: ["ModelMarker.014"],
  },
];
