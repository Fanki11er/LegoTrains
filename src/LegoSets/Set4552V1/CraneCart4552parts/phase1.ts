import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_1x4_3710,
  plate_1x6_3666,
  tile_1x4_2431,
  Train_Base_6x24_with_3_Round_Holes_Each_End_And_Stickers_6584a,
} from "../set4552PartsImports";

export const craneCart4552Phase1: LegoBlockType[] = [
  {
    partPath: Train_Base_6x24_with_3_Round_Holes_Each_End_And_Stickers_6584a,
    partStartPosition: new Vector3(-460, 0, 370),
    partType: "6584a",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 320),
    partType: "2431",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-300, 0, 170),
    partType: "3710",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-300, 0, 185),
    partType: "3710",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(510, 0, 135),
    partType: "3666",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
];
