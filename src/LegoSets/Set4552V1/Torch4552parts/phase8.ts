import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  minifig_Headgear_Accessory_Helmet_Visor_2447,
  minifig_Headgear_Helmet_Modern_Style_with_Curved_Sides_2446,
} from "../set4552PartsImports";

export const torch4552Phase8: LegoBlockType[] = [
  {
    partPath: minifig_Headgear_Helmet_Modern_Style_with_Curved_Sides_2446,
    partStartPosition: new Vector3(-215, 0, 150),
    partType: "2446",
    materialId: "darkGrayPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: minifig_Headgear_Accessory_Helmet_Visor_2447,
    partStartPosition: new Vector3(-235, 0, 150),
    partType: "2447",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
];
