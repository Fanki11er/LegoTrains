import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";
import { plate_1x6_3666 } from "../../../PartsImports/Plate_1x6_3666";

export const locomotiveCabin4564Phase5: LegoBlockType[] = [
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-50, 0, 225),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.033",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-95, 0, 240),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-50, 0, 240),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.035",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(210, 0, 255),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.036",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 270),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.037",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(370, 0, 85),
    partType: "3666",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.046",
    depends: [],
  },
];
