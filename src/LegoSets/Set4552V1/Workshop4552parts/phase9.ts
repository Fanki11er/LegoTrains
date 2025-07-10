import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  tile_2x2_Round_with_Lifting_Ring_2376,
  tile_Specialty_1x2_Grille_2412,
} from "../set4552PartsImports";

export const workshop4552Phase9: LegoBlockType[] = [
  {
    partPath: tile_2x2_Round_with_Lifting_Ring_2376,
    partStartPosition: new Vector3(265, 0, 225),
    partType: "2376",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.033",
    depends: [],
  },
  {
    partPath: tile_Specialty_1x2_Grille_2412,
    partStartPosition: new Vector3(100, 0, 230),
    partType: "2412",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
  {
    partPath: tile_Specialty_1x2_Grille_2412,
    partStartPosition: new Vector3(100, 0, 245),
    partType: "2412",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.035",
    depends: [],
  },
];
