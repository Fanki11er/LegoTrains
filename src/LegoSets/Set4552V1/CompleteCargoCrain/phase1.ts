import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_1x2_3023,
  plate_1x2_with_Crane_Hook_Modified_Left_3127,
  tile_1x2_with_Groove_3069b,
} from "../set4552PartsImports";

export const completeCargoCrain4552Phase1: LegoBlockType[] = [
  {
    partPath: plate_1x2_with_Crane_Hook_Modified_Left_3127,
    partStartPosition: new Vector3(10, 0, 230),
    partType: "3127",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 135),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: tile_1x2_with_Groove_3069b,
    partStartPosition: new Vector3(-55, 0, 350),
    partType: "3069b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.001"],
  },
];
