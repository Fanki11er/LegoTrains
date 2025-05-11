import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_4070,
  plate_1x4_3710,
  round_Plate_4073,
  slope_3040,
  slope_Brick_45_2x2_3039,
} from "../PartsImports";

export const steamLocomotive7722ForkliftPhase6: LegoBlockType[] = [
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(530, 0, 30),
    partType: "4070",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(550, 0, 30),
    partType: "4070",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.024",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(490, 0, 15),
    partType: "4073",
    materialId: "yellowTransparentMaterial",
    slotId: "ModelMarker.025",
    depends: ["ModelMarker.023"],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(510, 0, 15),
    partType: "4073",
    materialId: "yellowTransparentMaterial",
    slotId: "ModelMarker.026",
    depends: ["ModelMarker.024"],
  },
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(450, 0, -5),
    partType: "3040",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.027",
    depends: [],
  },
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(470, 0, -5),
    partType: "3040",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 345),
    partType: "3710",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.029",
    depends: [],
  },
  {
    partPath: slope_Brick_45_2x2_3039,
    partStartPosition: new Vector3(400, 0, -40),
    partType: "3039",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.030",
    depends: [],
  },
  {
    partPath: slope_Brick_45_2x2_3039,
    partStartPosition: new Vector3(425, 0, -40),
    partType: "3039",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.031",
    depends: [],
  },
];
