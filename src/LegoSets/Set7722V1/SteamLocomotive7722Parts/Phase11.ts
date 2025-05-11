import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_3003,
  minifig_Head_Plain_Undecorated_3626b,
  plate_1x4_3710,
  plate_1x6_3666,
  round_Plate_4073,
} from "../PartsImports";

export const steamLocomotive7722LocomotiveModelPhase11: LegoBlockType[] = [
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 160),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.088",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 175),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.089",
    depends: [],
  },
  {
    partPath: brick_3003,
    partStartPosition: new Vector3(145, 0, 0),
    partType: "3003",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.083",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 40),
    partType: "4073",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.086",
    depends: [],
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 25),
    partType: "4073",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.085",
    depends: ["ModelMarker.086"],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 135),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.087",
    depends: [],
  },
  {
    partPath: minifig_Head_Plain_Undecorated_3626b,
    partStartPosition: new Vector3(145, 0, 55),
    partType: "3626b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.084",
    depends: [],
  },
];
