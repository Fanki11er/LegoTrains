import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { roundOpenStud_3062b, trainBase_4178 } from "../Set7722V1PartsImports";

export const steamLocomotive7722LocomotiveModelPhase1: LegoBlockType[] = [
  {
    partPath: trainBase_4178,
    partStartPosition: new Vector3(0, 0, 60),
    partType: "4178",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-25, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: ["ModelMarker.006"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-10, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.006"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(10, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.006"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(25, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: ["ModelMarker.006"],
  },
];
