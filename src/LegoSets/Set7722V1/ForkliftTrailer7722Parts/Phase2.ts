import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2_x_2_3022,
  slope_Brick_Inverted_2x2_3660,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722ForkliftTrailerPhase2: LegoBlockType[] = [
  {
    partPath: plate_2_x_2_3022,
    partStartPosition: new Vector3(-265, 0, 200),
    partType: "3022",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(245, 0, -10),
    partType: "3660",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
];
