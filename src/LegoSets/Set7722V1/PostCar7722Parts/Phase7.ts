import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x4_3010,
  brick_1x6_3009,
  tile_1x2_with_Mail_Envelope_3069p01,
} from "../PartsImports";

export const steamLocomotive7722PostCarPhase7: LegoBlockType[] = [
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 190),
    partType: "3009",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.047",
    depends: [],
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 205),
    partType: "3009",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.048",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 190),
    partType: "3010",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.049",
    depends: [],
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 205),
    partType: "3010",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.050",
    depends: [],
  },
  {
    partPath: tile_1x2_with_Mail_Envelope_3069p01,
    partStartPosition: new Vector3(-240, 0, 300),
    partType: "3069p01",
    slotId: "ModelMarker.051",
    depends: [],
  },
];
