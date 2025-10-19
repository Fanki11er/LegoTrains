import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x2_3004 } from "../../../PartsImports/Brick_1x2_3004";
import { slope_Brick_45_2x3_Double_3042 } from "../../../PartsImports/Slope_Brick_45_2x3_Double_3042";

export const coalCart4564Phase6: LegoBlockType[] = [
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 280),
    partType: "3004",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 295),
    partType: "3004",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: slope_Brick_45_2x3_Double_3042,
    partStartPosition: new Vector3(-270, 0, 670),
    partType: "3042",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: slope_Brick_45_2x3_Double_3042,
    partStartPosition: new Vector3(-270, 0, 645),
    partType: "3042",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
];
