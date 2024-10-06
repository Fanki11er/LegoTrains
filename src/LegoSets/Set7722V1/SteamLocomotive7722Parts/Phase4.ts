import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_3003,
  plate_3023,
  plate_With_Ladder_4175,
  slope_3040,
} from "../PartsImports";

export const steamLocomotive7722LocomotiveModelPhase4: LegoBlockType[] = [
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(165, 0, 85),
    partType: "3040",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(145, 0, 85),
    partType: "3040",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: plate_With_Ladder_4175,
    partStartPosition: new Vector3(40, 0, 130),
    partType: "4175",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: plate_With_Ladder_4175,
    partStartPosition: new Vector3(65, 0, 130),
    partType: "4175",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: brick_3003,
    partStartPosition: new Vector3(145, 0, -30),
    partType: "3003",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 115),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 115),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
];
