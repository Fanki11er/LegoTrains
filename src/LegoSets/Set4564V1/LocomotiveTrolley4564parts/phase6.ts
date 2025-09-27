import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x2_3004 } from "../../../PartsImports/Brick_1x2_3004";
import { plate_1x6_3666 } from "../../../PartsImports/Plate_1x6_3666";
import { tile_1x2_with_Groove_3069b } from "../../../PartsImports/Tile_1x2_with_Groove_3069b";
import { minifig_Head_Plain_Undecorated_Fixed_3626b } from "../../../PartsImports/Minifig_Head_Plain_Undecorated_Fixed_3626b";

export const locomotiveTrolley4564Phase6: LegoBlockType[] = [
  {
    partPath: minifig_Head_Plain_Undecorated_Fixed_3626b,
    partStartPosition: new Vector3(560, 0, 125),
    partType: "3626b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: minifig_Head_Plain_Undecorated_Fixed_3626b,
    partStartPosition: new Vector3(560, 0, 105),
    partType: "3626b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 310),
    partType: "3004",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(370, 0, 70),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: tile_1x2_with_Groove_3069b,
    partStartPosition: new Vector3(560, 0, 175),
    partType: "3069b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: ["ModelMarker.014"],
  },
  {
    partPath: tile_1x2_with_Groove_3069b,
    partStartPosition: new Vector3(560, 0, 190),
    partType: "3069b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: ["ModelMarker.014"],
  },
];
