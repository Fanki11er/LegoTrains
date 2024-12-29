import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_2_x_10_3832, plate_6_x_16_3027 } from "../PartsImports";

export const steamLocomotive7722PostCarPhase1: LegoBlockType[] = [
  {
    partPath: plate_6_x_16_3027,
    partStartPosition: new Vector3(-560, 0, 140),
    partType: "3027",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_2_x_10_3832,
    partStartPosition: new Vector3(250, 0, 230),
    partType: "3082",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
];
