import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x2_3004,
  brick_Specialty_1x2_with_Grill_2877,
  plate_Specialty_1x2_1x4_Bracket_2436,
  technic_Brick_1x2_With_Pin_Hole_3700,
  tile_1x1_with_Groove_3070b,
} from "../set4564PartsImports";

export const truck4564Phase13: LegoBlockType[] = [
  {
    partPath: brick_Specialty_1x2_with_Grill_2877,
    partStartPosition: new Vector3(460, 0, 145),
    partType: "2877",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.040",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(485, 0, 145),
    partType: "3004",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.041",
    depends: [],
  },
  {
    partPath: technic_Brick_1x2_With_Pin_Hole_3700,
    partStartPosition: new Vector3(510, 0, 145),
    partType: "3700",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.042",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_1x4_Bracket_2436,
    partStartPosition: new Vector3(-395, 0, 360),
    partType: "2436",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.043",
    depends: [],
  },
  {
    partPath: tile_1x1_with_Groove_3070b,
    partStartPosition: new Vector3(410, 0, 160),
    partType: "3070b",
    materialId: "redTransparentMaterial",
    slotId: "ModelMarker.044",
    depends: ["ModelMarker.043"],
  },
  {
    partPath: tile_1x1_with_Groove_3070b,
    partStartPosition: new Vector3(410, 0, 175),
    partType: "3070b",
    materialId: "redTransparentMaterial",
    slotId: "ModelMarker.045",
    depends: ["ModelMarker.043"],
  },
];
