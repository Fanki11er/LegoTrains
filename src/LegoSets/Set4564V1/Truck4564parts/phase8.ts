import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_2x4_3020 } from "../../../PartsImports/Plate_2x4_3020";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";

export const truck4564Phase8: LegoBlockType[] = [
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 225),
    partType: "3020",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-95, 0, 180),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.024",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-50, 0, 180),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.025",
    depends: [],
  },
];
