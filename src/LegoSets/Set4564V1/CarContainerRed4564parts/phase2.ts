import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x4_3710, plate_4_x_6_3032 } from "../set4564PartsImports";

export const carContainerRed4564Phase2: LegoBlockType[] = [
  {
    partPath: plate_4_x_6_3032,
    partStartPosition: new Vector3(-460, 0, 205),
    partType: "3032",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-95, 0, 165),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },
];
