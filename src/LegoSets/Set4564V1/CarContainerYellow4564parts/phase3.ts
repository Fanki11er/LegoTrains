import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
  hinge_Train_Gate_2x4_Yellow_With_Logo_2873,
} from "../set4564PartsImports";

export const carContainerYellow4564Phase3: LegoBlockType[] = [
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-245, 0, 200),
    partType: "4315",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: hinge_Train_Gate_2x4_Yellow_With_Logo_2873,
    partStartPosition: new Vector3(-155, 0, 240),
    partType: "2873",
    slotId: "ModelMarker.012",
    depends: ["ModelMarker.011"],
  },
];
