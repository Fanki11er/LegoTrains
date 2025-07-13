import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  round_Plate_4073,
  technic_Bush_1_2_Type_II_Toothed_4265b,
} from "../set4552PartsImports";

export const crainBoom4552Phase7: LegoBlockType[] = [
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(-80, 0, 265),
    partType: "4073",
    materialId: "yellowTransparentMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(-80, 0, 280),
    partType: "4073",
    materialId: "yellowTransparentMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: technic_Bush_1_2_Type_II_Toothed_4265b,
    partStartPosition: new Vector3(390, 0, 295),
    partType: "4265b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: technic_Bush_1_2_Type_II_Toothed_4265b,
    partStartPosition: new Vector3(390, 0, 310),
    partType: "4265b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
];
