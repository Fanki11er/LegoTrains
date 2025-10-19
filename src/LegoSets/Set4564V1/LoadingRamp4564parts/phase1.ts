import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x6_3666 } from "../../../PartsImports/Plate_1x6_3666";
import { plate_1x8_3460 } from "../../../PartsImports/Plate_1_x_8_3460";

export const loadingRamp4564Phase1: LegoBlockType[] = [
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(370, 0, 130),
    partType: "3666",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(370, 0, 115),
    partType: "3666",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(370, 0, 100),
    partType: "3666",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: plate_1x8_3460,
    partStartPosition: new Vector3(260, 0, 200),
    partType: "3460",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: plate_1x8_3460,
    partStartPosition: new Vector3(260, 0, 215),
    partType: "3460",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
];
