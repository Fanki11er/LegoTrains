import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x4_3010,
  brick_1x6_3009,
  minifig_Accessory_Seat_2x2_4079,
  slope_Brick_Inverted_2x2_3660,
  tile_1x2_with_Mail_Envelope_3069p01,
} from "../PartsImports";

export const steamLocomotive7722PostCarPhase6: LegoBlockType[] = [
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 160),
    partType: "3009",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.043",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 175),
    partType: "3009",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.044",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 160),
    partType: "3010",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.045",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 175),
    partType: "3010",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.046",
    depends: [],
  },
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(245, 0, 10),
    partType: "3660",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.042",
    depends: [],
  },
  {
    partPath: minifig_Accessory_Seat_2x2_4079,
    partStartPosition: new Vector3(440, 0, -110),
    partType: "4079",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.040",
    depends: [],
  },
  {
    partPath: tile_1x2_with_Mail_Envelope_3069p01,
    partStartPosition: new Vector3(-215, 0, 300),
    partType: "3069p01",
    slotId: "ModelMarker.041",
    depends: [],
  },
];
