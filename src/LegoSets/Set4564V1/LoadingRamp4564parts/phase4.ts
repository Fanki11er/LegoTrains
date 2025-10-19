import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_2x6_2456 } from "../../../PartsImports/Brick_2x6_2456";
import { brick_1x6_3009 } from "../../../PartsImports/Brick_1x6_3009";
import { slope_Brick_1x2_45_Degrees_3040 } from "../../../PartsImports/Slope_Brick_1x2_45_Degrees_3040";
import { brick_1x4_3010 } from "../../../PartsImports/Brick_1x4_3010";

export const loadingRamp4564Phase4: LegoBlockType[] = [
  {
    partPath: brick_2x6_2456,
    partStartPosition: new Vector3(635, 0, 150),
    partType: "2456",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(430, 0, 115),
    partType: "3009",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: slope_Brick_1x2_45_Degrees_3040,
    partStartPosition: new Vector3(470, 0, 120),
    partType: "3040",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: slope_Brick_1x2_45_Degrees_3040,
    partStartPosition: new Vector3(490, 0, 120),
    partType: "3040",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(520, 0, 130),
    partType: "3010",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
];
