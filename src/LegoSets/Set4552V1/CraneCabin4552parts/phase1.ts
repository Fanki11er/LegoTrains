import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_6x12_3028,
  plate_Specialty_1x2_1x4_Bracket_2436,
  tile_Specialty_1x2_Grille_2412,
} from "../set4552PartsImports";

export const craneCabin4552Phase1: LegoBlockType[] = [
  {
    partPath: plate_6x12_3028,
    partStartPosition: new Vector3(-490, 0, 200),
    partType: "3028",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: tile_Specialty_1x2_Grille_2412,
    partStartPosition: new Vector3(100, 0, 320),
    partType: "2412",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: tile_Specialty_1x2_Grille_2412,
    partStartPosition: new Vector3(100, 0, 335),
    partType: "2412",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_Specialty_1x2_1x4_Bracket_2436,
    partStartPosition: new Vector3(435, 0, 55),
    partType: "2436",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: ["ModelMarker.001"],
  },
];
