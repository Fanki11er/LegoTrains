import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_4x8_3035,
  turntable_2_x_2_Plate_Blue_3680c01,
} from "../PartsImports";

export const steamLocomotive7722ForkliftTrailerPhase1: LegoBlockType[] = [
  {
    partPath: plate_4x8_3035,
    partStartPosition: new Vector3(-540, 0, 330),
    partType: "3035",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: turntable_2_x_2_Plate_Blue_3680c01,
    partStartPosition: new Vector3(210, 0, -80),
    partType: "3680c01",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
];
