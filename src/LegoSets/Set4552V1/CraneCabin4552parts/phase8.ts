import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x8_3008,
  slope_Brick_3x4_33_Degrees_3297,
  tile_2x2_With_Grove_3068b,
  tile_Specialty_1x2_Grille_2412,
} from "../set4552PartsImports";

export const craneCabin4552Phase8: LegoBlockType[] = [
  {
    partPath: slope_Brick_3x4_33_Degrees_3297,
    partStartPosition: new Vector3(530, 0, 255),
    partType: "3297",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.025",
    depends: [],
  },
  {
    partPath: slope_Brick_3x4_33_Degrees_3297,
    partStartPosition: new Vector3(530, 0, 290),
    partType: "3297",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.026",
    depends: [],
  },
  {
    partPath: tile_Specialty_1x2_Grille_2412,
    partStartPosition: new Vector3(100, 0, 350),
    partType: "2412",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.027",
    depends: ["ModelMarker.025", "ModelMarker.026"],
  },
  {
    partPath: tile_Specialty_1x2_Grille_2412,
    partStartPosition: new Vector3(100, 0, 365),
    partType: "2412",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.028",
    depends: ["ModelMarker.025", "ModelMarker.026"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-20, 0, 175),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.029",
    depends: ["ModelMarker.025", "ModelMarker.026"],
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(500, 0, 400),
    partType: "3008",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.035",
    depends: [],
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(500, 0, 415),
    partType: "3008",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.036",
    depends: [],
  },
];
