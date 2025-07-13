import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  technic_Pin_Smooth_without_Friction_Ridges_3673,
  tile_1x4_2431,
} from "../set4552PartsImports";

export const crainBoom4552Phase4: LegoBlockType[] = [
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 365),
    partType: "2431",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 380),
    partType: "2431",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: technic_Pin_Smooth_without_Friction_Ridges_3673,
    partStartPosition: new Vector3(390, 0, 215),
    partType: "3673",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: technic_Pin_Smooth_without_Friction_Ridges_3673,
    partStartPosition: new Vector3(390, 0, 230),
    partType: "3673",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
];
