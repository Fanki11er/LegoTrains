import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  cone_1x1_4589,
  plate_Specialty_1x6_with_Train_Wagon_End_6583,
} from "../set4552PartsImports";

export const craneCart4552Phase5: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(390, 0, 100),
    partType: "6583",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.049",
    depends: [],
  },
  {
    partPath: cone_1x1_4589,
    partStartPosition: new Vector3(-120, 0, 205),
    partType: "4589",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.050",
    depends: [],
  },
  {
    partPath: cone_1x1_4589,
    partStartPosition: new Vector3(-120, 0, 220),
    partType: "4589",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.051",
    depends: [],
  },
];
