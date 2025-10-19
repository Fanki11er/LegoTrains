import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_4x12_3029 } from "../../../PartsImports/Plate_4x12_3029";
import { plate_4x4_3031 } from "../../../PartsImports/Plate_4_x_4_3031";
import { plate_1x1_3024 } from "../../../PartsImports/Plate_1x1_3024";

export const locomotiveCabin4564Phase12: LegoBlockType[] = [
  {
    partPath: plate_4x12_3029,
    partStartPosition: new Vector3(-540, 0, 205),
    partType: "3029",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.112",
    depends: [],
  },
  {
    partPath: plate_4x4_3031,
    partStartPosition: new Vector3(-510, 0, 250),
    partType: "3031",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.113",
    depends: [],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(40, 0, 210),
    partType: "3024",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.114",
    depends: [],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(60, 0, 210),
    partType: "3024",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.115",
    depends: [],
  },
];
