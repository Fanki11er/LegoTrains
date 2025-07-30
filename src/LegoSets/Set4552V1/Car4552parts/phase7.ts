import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  minifig_Accessory_Tool_Spanner_Screwdriver_4006,
  minifig_Tool_Mallet_Utensil_4522,
  slope_Brick_1x3_33_Degrees_4286,
} from "../set4552PartsImports";

export const car4552Phase7: LegoBlockType[] = [
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(210, 0, 150),
    partType: "4286",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(210, 0, 185),
    partType: "4286",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: minifig_Tool_Mallet_Utensil_4522,
    partStartPosition: new Vector3(-265, 0, 150),
    partType: "4522",
    materialId: "darkGrayPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: minifig_Accessory_Tool_Spanner_Screwdriver_4006,
    partStartPosition: new Vector3(-265, 0, 190),
    partType: "4006",
    materialId: "darkGrayPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: ["ModelMarker.021"],
  },
];
