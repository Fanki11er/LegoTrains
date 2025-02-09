import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_3023,
  plate_Speciality_2x2_with_Medium_Wheels_122c01MW,
  plate_Speciality_2x2_with_Small_Wheels_122c01SW,
  plate_Specialty_2x2_with_Towball_3731,
} from "../PartsImports";

export const steamLocomotive7722ForkliftPhase4: LegoBlockType[] = [
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 205),
    partType: "3023",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_with_Towball_3731,
    partStartPosition: new Vector3(450, 0, -65),
    partType: "3731",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.009"],
  },
  {
    partPath: plate_Speciality_2x2_with_Small_Wheels_122c01SW,
    partStartPosition: new Vector3(590, 0, 460),
    partType: "122c01SW",
    slotId: "ModelMarker.011",
    depends: ["ModelMarker.010"],
  },
  {
    partPath: plate_Speciality_2x2_with_Medium_Wheels_122c01MW,
    partStartPosition: new Vector3(590, 0, 420),
    partType: "122c01MW",
    slotId: "ModelMarker.012",
    depends: [],
  },
];
