import { Vector3 } from "three";
import { LegoBlockType } from "../../Types/LegoBlockType";
import {
  brick_1x1_3005,
  brick_1x8_3008,
  technic_Brick_1x2_With_Pin_Hole_3700,
} from "./PartsImports";

export const steamLocomotive7722LocomotiveModelPhase8: LegoBlockType[] = [
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 135),
    partType: "3005",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.053",
    depends: [],
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 135),
    partType: "3005",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.054",
    depends: [],
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(290, 0, 115),
    partType: "3008",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.056",
    depends: [],
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(290, 0, 130),
    partType: "3008",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.057",
    depends: [],
  },
  {
    partPath: technic_Brick_1x2_With_Pin_Hole_3700,
    partStartPosition: new Vector3(275, 0, 100),
    partType: "3700",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.055",
    depends: [],
  },
];
