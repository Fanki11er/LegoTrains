import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  antenna_Small_Base_with_Lever_4592c02,
  hinge_Tile_1x4_4625,
  hinge_Train_Gate_2x4_2873,
} from "../set4552PartsImports";

export const car4552Phase8: LegoBlockType[] = [
  {
    partPath: hinge_Tile_1x4_4625,
    partStartPosition: new Vector3(235, 0, 150),
    partType: "4625",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
  {
    partPath: hinge_Train_Gate_2x4_2873,
    partStartPosition: new Vector3(260, 0, 150),
    partType: "2873",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.024",
    depends: ["ModelMarker.023"],
  },
  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(60, 0, 210),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    multipart: true,
    slotId: "ModelMarker.025",
    depends: [],
  },
  {
    partPath: antenna_Small_Base_with_Lever_4592c02,
    partStartPosition: new Vector3(60, 0, 225),
    partType: "4592c02",
    materialId: "blackPlasticMaterial",
    multipart: true,
    slotId: "ModelMarker.026",
    depends: [],
  },
];
