import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2_x_2_3022,
  plate_Specialty_1x2_With_One_Stud_On_Center_3794,
  technic_Axle_6_3706,
  technic_Connector_Axle_and_Pin_3651,
} from "../set4552PartsImports";

export const crainBoom4552Phase5: LegoBlockType[] = [
  {
    partPath: plate_2_x_2_3022,
    partStartPosition: new Vector3(-20, 0, 200),
    partType: "3022",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(150, 0, 345),
    partType: "3794",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(150, 0, 360),
    partType: "3794",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: technic_Connector_Axle_and_Pin_3651,
    partStartPosition: new Vector3(390, 0, 245),
    partType: "3651",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: technic_Connector_Axle_and_Pin_3651,
    partStartPosition: new Vector3(390, 0, 270),
    partType: "3651",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: technic_Axle_6_3706,
    partStartPosition: new Vector3(535, 0, 35),
    partType: "3706",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: technic_Axle_6_3706,
    partStartPosition: new Vector3(535, 0, 50),
    partType: "3706",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: [],
  },
];
