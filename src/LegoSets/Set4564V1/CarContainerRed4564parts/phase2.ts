import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_4x6_3032 } from "../../../PartsImports/Plate_4_x_6_3032";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";

export const carContainerRed4564Phase2: LegoBlockType[] = [
  {
    partPath: plate_4x6_3032,
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
