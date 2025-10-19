import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_4x12_3029 } from "../../../PartsImports/Plate_4x12_3029";
import { plate_6x12_3028 } from "../../../PartsImports/Plate_6x12_3028";

export const loadingRamp4564Phase5: LegoBlockType[] = [
  {
    partPath: plate_4x12_3029,
    partStartPosition: new Vector3(-540, 0, 160),
    partType: "3029",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
  {
    partPath: plate_6x12_3028,
    partStartPosition: new Vector3(-480, 0, 110),
    partType: "3028",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
];
