import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { vehicle_Mudguard_2x4_With_Arch_3788 } from "../../../PartsImports/Vehicle_Mudguard_2x4_With_Arch_3788";
import { tile_2x2_With_Grove_3068b } from "../../../PartsImports/Tile_2x2_With_Grove_3068b";

export const truck4564Phase7: LegoBlockType[] = [
  {
    partPath: vehicle_Mudguard_2x4_With_Arch_3788,
    partStartPosition: new Vector3(-390, 0, 260),
    partType: "3788",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-355, 0, 260),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
];
