import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  antenna_Small_Base_with_Lever_4592c02,
  brick_1x1_3005,
  brick_2x6_2456,
  plate_1x1_3024,
  slope_Brick_1x3_33_Degrees_4286,
} from "../set4552PartsImports";

export const crainCabin4552Phase10: LegoBlockType[] = [
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(210, 0, 290),
    partType: "4286",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.037",
    depends: [],
  },
  {
    partPath: slope_Brick_1x3_33_Degrees_4286,
    partStartPosition: new Vector3(210, 0, 325),
    partType: "4286",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.038",
    depends: [],
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(40, 0, 245),
    partType: "3005",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.039",
    depends: [],
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(40, 0, 260),
    partType: "3005",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.040",
    depends: [],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(-80, 0, 190),
    partType: "3024",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.041",
    depends: [],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(-80, 0, 205),
    partType: "3024",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.042",
    depends: [],
  },
  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(60, 0, 255),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    multipart: true,
    slotId: "ModelMarker.043",
    depends: [],
  },

  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(60, 0, 270),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    multipart: true,
    slotId: "ModelMarker.044",
    depends: [],
  },
  {
    partPath: brick_2x6_2456,
    partStartPosition: new Vector3(160, 0, 440),
    partType: "2456",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.045",
    depends: [],
  },
];
