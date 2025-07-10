import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x3_3622,
  plate_1x2_3023,
  tile_1x4_2431,
} from "../set4552PartsImports";

export const platformCart4552Phase7: LegoBlockType[] = [
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 240),
    partType: "3023",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 255),
    partType: "3023",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 260),
    partType: "2431",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 275),
    partType: "2431",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
  {
    partPath: brick_1x3_3622,
    partStartPosition: new Vector3(300, 0, 120),
    partType: "3622",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.024",
    depends: [],
  },
  {
    partPath: brick_1x3_3622,
    partStartPosition: new Vector3(300, 0, 105),
    partType: "3622",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.025",
    depends: [],
  },
];
