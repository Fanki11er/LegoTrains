import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  round_Plate_4073,
  technic_Plate_1x6_with_Holes_Toothed_Ends_4262,
} from "../set4552PartsImports";

export const crainBoom4552Phase6: LegoBlockType[] = [
  {
    partPath: technic_Plate_1x6_with_Holes_Toothed_Ends_4262,
    partStartPosition: new Vector3(300, 0, 60),
    partType: "4262",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(-80, 0, 235),
    partType: "4073",
    materialId: "yellowTransparentMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(-80, 0, 250),
    partType: "4073",
    materialId: "yellowTransparentMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
];
