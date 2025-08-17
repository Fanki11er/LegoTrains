import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2x3_3021,
  plate_Specialty_1x2_With_One_Stud_On_Center_3794,
  round_Plate_4073,
  tile_1x1_with_Groove_3070b,
} from "../set4564PartsImports";

export const truck4564Phase6: LegoBlockType[] = [
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 150),
    partType: "3021",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(370, 0, 145),
    partType: "3794",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(370, 0, 160),
    partType: "3794",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(370, 0, 175),
    partType: "3794",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(390, 0, 145),
    partType: "4073",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: tile_1x1_with_Groove_3070b,
    partStartPosition: new Vector3(410, 0, 145),
    partType: "3070b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: ["ModelMarker.019"],
  },
];
