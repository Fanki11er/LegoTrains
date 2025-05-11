import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_3023,
  plate_Specialty_2x2_with_Socket_3730,
  slope_Brick_Inverted_2x2_3660,
} from "../PartsImports";

export const steamLocomotive7722ForkliftTrailerPhase3: LegoBlockType[] = [
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(245, 0, -30),
    partType: "3660",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 205),
    partType: "3023",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_with_Socket_3730,
    partStartPosition: new Vector3(500, 0, -65),
    partType: "3730",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
];
