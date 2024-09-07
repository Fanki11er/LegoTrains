import { Vector3 } from "three";
import { plate_3023, plate_x461b } from "./PartsImports";
import { LegoBlockType } from "../../Types/LegoBlockType";

export const steamLocomotive7722LocomotiveModelPhase2: LegoBlockType[] = [
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(60, 0, 100),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(80, 0, 100),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: plate_x461b,
    partStartPosition: new Vector3(15, 0, 120),
    partType: "x461b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker",
    depends: [],
  },
  {
    partPath: plate_x461b,
    partStartPosition: new Vector3(-15, 0, 120),
    partType: "x461b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
];
