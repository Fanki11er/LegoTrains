import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  electricEngine_x469b,
  magnetCylindrical_73092,
  plate_3023,
  trainCoupling_4023,
} from "../PartsImports";

export const steamLocomotive7722LocomotiveModelPhase3: LegoBlockType[] = [
  {
    partPath: electricEngine_x469b,
    partStartPosition: new Vector3(0, 0, -80),
    partType: "x469b",
    slotId: "ModelMarker.010",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 100),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 100),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 45),
    partType: "4023",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 65),
    partType: "4023",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(110, 0, 85),
    partType: "73092",
    slotId: "ModelMarker.014",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(125, 0, 85),
    partType: "73092",
    slotId: "ModelMarker.016",
    depends: ["ModelMarker.015"],
  },
];
