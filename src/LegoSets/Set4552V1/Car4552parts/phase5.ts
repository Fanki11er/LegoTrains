import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  panel_1x1x1_Corner_6231,
  plate_1x2_3023,
} from "../set4552PartsImports";

export const car4552Phase5: LegoBlockType[] = [
  {
    partPath: panel_1x1x1_Corner_6231,
    partStartPosition: new Vector3(60, 0, 150),
    partType: "6231",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: panel_1x1x1_Corner_6231,
    partStartPosition: new Vector3(60, 0, 165),
    partType: "6231",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },
  {
    partPath: panel_1x1x1_Corner_6231,
    partStartPosition: new Vector3(60, 0, 180),
    partType: "6231",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: panel_1x1x1_Corner_6231,
    partStartPosition: new Vector3(60, 0, 195),
    partType: "6231",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 150),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 165),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
];
