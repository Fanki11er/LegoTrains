import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { slope_Brick_1x3_33_Degrees_4286 } from "../../../PartsImports/Slope_Brick_1x3_33_Degrees_4286";
import { hinge_Brick_1x2_Base_3937 } from "../../../PartsImports/Hinge_Brick_1x2_Base_3937";
import { hinge_2x2_Top_Brick_Plate_Thin_6134 } from "../../../PartsImports/Hinge_2x2_Top_Brick_Plate_Thin_6134";

export const loadingRamp4564Phase3: LegoBlockType[] = [
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(-10, 0, 240),
    partType: "4286",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(-10, 0, 275),
    partType: "4286",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: hinge_Brick_1x2_Base_3937,
    partStartPosition: new Vector3(15, 0, 250),
    partType: "3937",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: hinge_Brick_1x2_Base_3937,
    partStartPosition: new Vector3(15, 0, 275),
    partType: "3937",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: hinge_2x2_Top_Brick_Plate_Thin_6134,
    partStartPosition: new Vector3(15, 0, 300),
    partType: "6134",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: hinge_2x2_Top_Brick_Plate_Thin_6134,
    partStartPosition: new Vector3(15, 0, 325),
    partType: "6134",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: ["ModelMarker.014"],
  },
];
