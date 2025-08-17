import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_Specialty_2x2_with_Wheels_Holder_4600,
  roundOpenStud_3062b,
} from "../set4564PartsImports";

export const truck4564Phase3: LegoBlockType[] = [
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 150),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 165),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_with_Wheels_Holder_4600,
    partStartPosition: new Vector3(-290, 0, 220),
    partType: "4600",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_with_Wheels_Holder_4600,
    partStartPosition: new Vector3(-290, 0, 250),
    partType: "4600",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
];
