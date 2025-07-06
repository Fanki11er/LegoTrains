import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2x2_Round_with_Wheel_Holder_Thin_2655,
  wheel_Trolley_Skateboard_Old_2496,
} from "../set4552PartsImports";

export const torch4552Phase1: LegoBlockType[] = [
  {
    partPath: wheel_Trolley_Skateboard_Old_2496,
    partStartPosition: new Vector3(-100, 0, 150),
    partType: "2496",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_2x2_Round_with_Wheel_Holder_Thin_2655,
    partStartPosition: new Vector3(-120, 0, 150),
    partType: "2655",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
];
