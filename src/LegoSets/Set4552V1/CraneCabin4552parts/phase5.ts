import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  hinge_Tile_1x4_4625,
  plate_Specialty_1x2_1x4_Bracket_2436,
} from "../set4552PartsImports";

export const craneCabin4552Phase5: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x2_1x4_Bracket_2436,
    partStartPosition: new Vector3(435, 0, 35),
    partType: "2436",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: hinge_Tile_1x4_4625,
    partStartPosition: new Vector3(235, 0, 305),
    partType: "4625",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: hinge_Tile_1x4_4625,
    partStartPosition: new Vector3(235, 0, 345),
    partType: "4625",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
];
