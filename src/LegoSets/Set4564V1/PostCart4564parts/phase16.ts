import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";

import { train_Roof_6x6_4509 } from "../../../PartsImports/Train_Roof_6x6_4509";
import { slope_Brick_3x4_33_Degrees_3297 } from "../../../PartsImports/Slope_Brick_3x4_33_Degrees_3297";

export const postCart4564Phase16: LegoBlockType[] = [
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(-90, 0, 340),
    partType: "4509",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.092",
    depends: [],
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(-90, 0, 400),
    partType: "4509",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.093",
    depends: [],
  },
  {
    partPath: slope_Brick_3x4_33_Degrees_3297,
    partStartPosition: new Vector3(-200, 0, 595),
    partType: "3297",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.094",
    depends: [],
  },
  {
    partPath: slope_Brick_3x4_33_Degrees_3297,
    partStartPosition: new Vector3(-200, 0, 560),
    partType: "3297",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.095",
    depends: [],
  },
];
