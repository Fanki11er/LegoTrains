import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { tile_1x2_with_Groove_3069b } from "../../../PartsImports/Tile_1x2_with_Groove_3069b";
import { tile_2x2_With_Grove_3068b } from "../../../PartsImports/Tile_2x2_With_Grove_3068b";
import { windscreen_2x6x2_Train_with_Glass_6567 } from "../../../PartsImports/Windscreen_2x6x2_Train_with_Glass_6567";

export const locomotiveCabin4564Phase15: LegoBlockType[] = [
  {
    partPath: tile_1x2_with_Groove_3069b,
    partStartPosition: new Vector3(560, 0, 160),
    partType: "3069b",
    slotId: "ModelMarker.126",
    materialId: "yellowPLasticMaterial",
    depends: [],
  },

  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-355, 0, 285),
    partType: "3068b",
    slotId: "ModelMarker.127",
    materialId: "yellowPLasticMaterial",
    depends: [],
  },
  {
    partPath: windscreen_2x6x2_Train_with_Glass_6567,
    partStartPosition: new Vector3(-200, 0, 700),
    partType: "6567",
    slotId: "ModelMarker.128",
    depends: [],
  },
  {
    partPath: windscreen_2x6x2_Train_with_Glass_6567,
    partStartPosition: new Vector3(-200, 0, 730),
    partType: "6567",
    slotId: "ModelMarker.129",
    depends: [],
  },
];
