import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  minifig_Accessory_Seat_2x2_4079,
  plate_1x6_3666,
  plate_2x4_3020,
  technic_Plate_1x6_with_Holes_Toothed_Ends_4262,
} from "../set4552PartsImports";

export const crainCabin4552Phase9: LegoBlockType[] = [
  {
    partPath: minifig_Accessory_Seat_2x2_4079,
    partStartPosition: new Vector3(10, 0, 210),
    partType: "4079",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.030",
    depends: [],
  },
  {
    partPath: technic_Plate_1x6_with_Holes_Toothed_Ends_4262,
    partStartPosition: new Vector3(315, 0, 60),
    partType: "4262",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.031",
    depends: [],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(-120, 0, 490),
    partType: "3020",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.032",
    depends: [],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(-120, 0, 515),
    partType: "3020",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.033",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(510, 0, 120),
    partType: "3666",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
];
