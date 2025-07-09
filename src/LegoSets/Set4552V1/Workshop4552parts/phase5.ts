import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  antenna_Small_Base_with_Lever_4592c02,
  brick_1x2_3004,
  brick_Specialty_1x2x5_2454,
  brick_Specialty_with_Train_Logo_Pattern_1x2x5_2454pb04,
  plate_1x2_3023,
  plate_Specialty_2x2_with_Pin_Hole_One_Side_Only_2444,
  technic_Pin_Half_Length_4274,
} from "../set4552PartsImports";

export const workshop4552Phase5: LegoBlockType[] = [
  {
    partPath: brick_Specialty_1x2x5_2454,
    partStartPosition: new Vector3(330, 0, 160),
    partType: "2454",
    materialId: "greenPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: brick_Specialty_with_Train_Logo_Pattern_1x2x5_2454pb04,
    partStartPosition: new Vector3(360, 0, 160),
    partType: "2454pb04",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 180),
    partType: "3023",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(300, 0, 260),
    partType: "3004",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.017",
    depends: ["ModelMarker.016"],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 195),
    partType: "3023",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.018",
    depends: ["ModelMarker.017"],
  },
  {
    partPath: plate_Specialty_2x2_with_Pin_Hole_One_Side_Only_2444,
    partStartPosition: new Vector3(265, 0, 200),
    partType: "2444",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.019",
    depends: ["ModelMarker.018"],
  },
  {
    partPath: technic_Pin_Half_Length_4274,
    partStartPosition: new Vector3(390, 0, 140),
    partType: "4274",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: ["ModelMarker.019"],
  },
  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(60, 0, 240),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    multipart: true,
    slotId: "ModelMarker.021",
    depends: ["ModelMarker.020"],
  },
];
