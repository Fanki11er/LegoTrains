import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { cone_1x1_4589 } from "../../../PartsImports/Cone_1x1_4589";
import { minifig_Accessory_Radio_with_Compact_Handle_3962a } from "../../../PartsImports/Minifig_Accessory_Radio_with_Compact_Handle_3962a";

export const locomotive4564Phase1: LegoBlockType[] = [
  {
    partPath: cone_1x1_4589,
    partStartPosition: new Vector3(-355, 0, 410),
    partType: "4589",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: minifig_Accessory_Radio_with_Compact_Handle_3962a,
    partStartPosition: new Vector3(-355, 0, 465),
    partType: "3962a",
    materialId: "darkGrayPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
];
