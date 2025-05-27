import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  battery_Car_Roof_bb54,
  train_Battery_Box_Car_x488c02,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722batteryCarPhase1: LegoBlockType[] = [
  {
    partPath: train_Battery_Box_Car_x488c02,
    partStartPosition: new Vector3(-400, 0, 200),
    partType: "x488c02",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: battery_Car_Roof_bb54,
    partStartPosition: new Vector3(-400, 0, 260),
    partType: "bb54",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
];
