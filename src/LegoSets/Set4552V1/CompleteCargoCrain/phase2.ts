import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  minifig_Head_with_Standard_Grin_and_Sunglasses_Pattern_3626bp04,
  minifig_Headgear_Construction_Helmet_3833,
  minifig_Hips_and_Legs_970c00,
  minifig_Torso_Train_Red_Vest_Pattern_973px8c01,
} from "../set4552PartsImports";

export const completeCargoCrain4552Phase2: LegoBlockType[] = [
  {
    partPath: minifig_Hips_and_Legs_970c00,
    partStartPosition: new Vector3(455, 0, 210),
    partType: "970c00",
    materialId: "bluePlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: minifig_Torso_Train_Red_Vest_Pattern_973px8c01,
    partStartPosition: new Vector3(455, 0, 190),
    partType: "973px8c01",
    slotId: "ModelMarker.005",
    multipart: true,
    noAutomaticMoveToGroundLevel: true,
    depends: ["ModelMarker.004"],
  },

  {
    partPath: minifig_Head_with_Standard_Grin_and_Sunglasses_Pattern_3626bp04,
    partStartPosition: new Vector3(455, 0, 165),
    partType: "3626bp04",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.005"],
  },
  {
    partPath: minifig_Headgear_Construction_Helmet_3833,
    partStartPosition: new Vector3(455, 0, 140),
    partType: "3833",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.007",
    depends: ["ModelMarker.006"],
  },
];
