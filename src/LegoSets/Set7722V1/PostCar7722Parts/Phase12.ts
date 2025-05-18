import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  slope_Brick_3_x_2_33_Degrees_3298,
  tile_2x2_With_Grove_3068b,
  train_Roof_6x6_4509,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722PostCarPhase12: LegoBlockType[] = [
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(340, 0, -180),
    partType: "3298",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.086",
    depends: [],
  },
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(365, 0, -180),
    partType: "3298",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.087",
    depends: [],
  },
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(340, 0, -145),
    partType: "3298",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.088",
    depends: [],
  },
  {
    partPath: slope_Brick_3_x_2_33_Degrees_3298,
    partStartPosition: new Vector3(365, 0, -145),
    partType: "3298",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.089",
    depends: [],
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(540, 0, 300),
    partType: "4509",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.090",
    depends: [],
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(600, 0, 300),
    partType: "4509",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.091",
    depends: [],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-240, 0, 200),
    partType: "3068b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.092",
    depends: ["ModelMarker.090"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-215, 0, 200),
    partType: "3068b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.093",
    depends: ["ModelMarker.091"],
  },
];
