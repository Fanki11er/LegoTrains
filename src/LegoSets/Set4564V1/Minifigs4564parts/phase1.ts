import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { minifig_Hips_and_Legs_970c00 } from "../../../PartsImports/Minifig_Hips_and_Legs_970c00";
import { minifig_Torso_Overalls_Blue_Pattern_973pb201c01 } from "../../../PartsImports/Minifig_Torso_Overalls_Blue_Pattern_973pb201c01";
import { minifig_Head_with_Standard_Grin_Pattern_Stud_Solid_3626ap01 } from "../../../PartsImports/Minifig_Head_with_Standard_Grin_Pattern_Stud_Solid_3626ap01";
import { minifig_Accessory_Headgear_Cap_4485 } from "../../../PartsImports/Minifig_Accessory_Headgear_Cap_4485";
import { minifig_Torso_Train_Red_Chevron_Pattern_973p19c01 } from "../../../PartsImports/Minifig_Torso_Train_Red_Chevron_Pattern_973p19c01";
import { minifig_Headgear_Construction_Helmet_3833 } from "../../../PartsImports/Minifig_Headgear_Construction_Helmet_3833";
import { minifig_Torso_Train_Suit_Red_Tie_973px1c01 } from "../../../PartsImports/Minifig_Torso_Train_Suit_Red_Tie_973px1c01";
import { minifig_Headgear_Hat_Peaked_Cap_3624 } from "../../../PartsImports/Minifig_Headgear_Hat_Peaked_Cap_3624";

export const minifigs4564Phase1: LegoBlockType[] = [
  {
    partPath: minifig_Hips_and_Legs_970c00,
    partStartPosition: new Vector3(-400, 0, 225),
    partType: "970c00",
    materialId: "bluePlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: minifig_Torso_Overalls_Blue_Pattern_973pb201c01,
    partStartPosition: new Vector3(-400, 0, 200),
    partType: "973pb201c01",
    multipart: true,
    noAutomaticMoveToGroundLevel: true,
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: minifig_Head_with_Standard_Grin_Pattern_Stud_Solid_3626ap01,
    partStartPosition: new Vector3(-400, 0, 175),
    partType: "3626ap01",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.002"],
  },
  {
    partPath: minifig_Accessory_Headgear_Cap_4485,
    partStartPosition: new Vector3(-400, 0, 150),
    partType: "4485",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.004",
    depends: ["ModelMarker.003"],
  },

  {
    partPath: minifig_Hips_and_Legs_970c00,
    partStartPosition: new Vector3(-365, 0, 225),
    partType: "970c00",
    materialId: "bluePlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: minifig_Torso_Train_Red_Chevron_Pattern_973p19c01,
    partStartPosition: new Vector3(-365, 0, 200),
    partType: "973p19c01",
    multipart: true,
    noAutomaticMoveToGroundLevel: true,
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.005"],
  },
  {
    partPath: minifig_Head_with_Standard_Grin_Pattern_Stud_Solid_3626ap01,
    partStartPosition: new Vector3(-365, 0, 175),
    partType: "3626ap01",
    slotId: "ModelMarker.007",
    depends: ["ModelMarker.006"],
  },
  {
    partPath: minifig_Headgear_Construction_Helmet_3833,
    partStartPosition: new Vector3(-365, 0, 150),
    partType: "3833",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: ["ModelMarker.007"],
  },
  {
    partPath: minifig_Hips_and_Legs_970c00,
    partStartPosition: new Vector3(-330, 0, 225),
    partType: "970c00",
    materialId: "bluePlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: minifig_Torso_Train_Suit_Red_Tie_973px1c01,
    partStartPosition: new Vector3(-330, 0, 200),
    partType: "973px1c01",
    multipart: true,
    noAutomaticMoveToGroundLevel: true,
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.009"],
  },
  {
    partPath: minifig_Head_with_Standard_Grin_Pattern_Stud_Solid_3626ap01,
    partStartPosition: new Vector3(-330, 0, 175),
    partType: "3626ap01",
    slotId: "ModelMarker.011",
    depends: ["ModelMarker.010"],
  },
  {
    partPath: minifig_Headgear_Hat_Peaked_Cap_3624,
    partStartPosition: new Vector3(-330, 0, 150),
    partType: "3624",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: ["ModelMarker.011"],
  },
];
