import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  antenna_Small_Base_with_Lever_4592c02,
  brick_1x2_3004,
  slope_3040,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722ForkliftPhase7: LegoBlockType[] = [
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(490, 0, -5),
    partType: "3040",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.032",
    depends: [],
  },
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(510, 0, -5),
    partType: "3040",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.033",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(450, 0, 180),
    partType: "3004",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(450, 0, -40),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.035",
    depends: [],
  },
  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(470, 0, -40),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.036",
    depends: [],
  },
];
