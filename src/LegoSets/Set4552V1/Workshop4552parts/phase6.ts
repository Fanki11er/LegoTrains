import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  glass_For_Train_Window_1x2x3_4036,
  glass_for_Train_Window_1x4x3_4034,
  train_Window_1x2x3_4035,
  train_Window_1x4x3_6556,
} from "../set4552PartsImports";

export const workshop4552Phase6: LegoBlockType[] = [
  {
    partPath: train_Window_1x2x3_4035,
    partStartPosition: new Vector3(-235, 0, 260),
    partType: "4035",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
  {
    partPath: glass_For_Train_Window_1x2x3_4036,
    partStartPosition: new Vector3(-235, 0, 290),
    partType: "4036",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.023",
    depends: ["ModelMarker.022"],
  },
  {
    partPath: train_Window_1x2x3_4035,
    partStartPosition: new Vector3(-205, 0, 260),
    partType: "4035",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.024",
    depends: [],
  },
  {
    partPath: glass_For_Train_Window_1x2x3_4036,
    partStartPosition: new Vector3(-205, 0, 290),
    partType: "4036",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.025",
    depends: ["ModelMarker.024"],
  },
  {
    partPath: train_Window_1x4x3_6556,
    partStartPosition: new Vector3(-170, 0, 260),
    partType: "6556",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.026",
    depends: [],
  },
  {
    partPath: glass_for_Train_Window_1x4x3_4034,
    partStartPosition: new Vector3(-170, 0, 290),
    partType: "4034",
    materialId: "whiteTransparentMaterial",
    slotId: "ModelMarker.027",
    depends: ["ModelMarker.026"],
  },
];
