import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_3023,
  plate_Specialty_1x1_with_Clip_Light_4081b,
} from "../set4564PartsImports";

export const truck4564Phase2: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x1_with_Clip_Light_4081b,
    partStartPosition: new Vector3(140, 0, 150),
    partType: "4081b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x1_with_Clip_Light_4081b,
    partStartPosition: new Vector3(140, 0, 175),
    partType: "4081b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(185, 0, 150),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
];
