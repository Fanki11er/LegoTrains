import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x3_3623 } from "../../../PartsImports/Plate_1x3_3623";
import { plate_1x10_4477 } from "../../../PartsImports/Plate_1x10_4477";

export const locomotiveCabin4564Phase2: LegoBlockType[] = [
  {
    partPath: plate_1x3_3623,
    partStartPosition: new Vector3(685, 0, 145),
    partType: "3623",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: plate_1x3_3623,
    partStartPosition: new Vector3(685, 0, 160),
    partType: "3623",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: plate_1x10_4477,
    partStartPosition: new Vector3(650, 0, 130),
    partType: "4477",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
  {
    partPath: plate_1x10_4477,
    partStartPosition: new Vector3(650, 0, 115),
    partType: "4477",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
];
