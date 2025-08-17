import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2x4_3020,
  plate_Specialty_2x2_with_Wheels_Holder_4600,
  technic_Plate_2x8_with_7_Holes_3738,
} from "../set4564PartsImports";

export const truck4564Phase4: LegoBlockType[] = [
  {
    partPath: technic_Plate_2x8_with_7_Holes_3738,
    partStartPosition: new Vector3(260, 0, 150),
    partType: "3738",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_with_Wheels_Holder_4600,
    partStartPosition: new Vector3(-290, 0, 275),
    partType: "4600",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.009"],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 175),
    partType: "3020",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
];
