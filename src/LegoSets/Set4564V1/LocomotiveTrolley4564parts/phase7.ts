import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x6_3666 } from "../../../PartsImports/Plate_1x6_3666";
import { plate_2x2_3022 } from "../../../PartsImports/Plate_2_x_2_3022";
import { brick_2x4_3001 } from "../../../PartsImports/Brick_2x4_3001";

export const locomotiveTrolley4564Phase7: LegoBlockType[] = [
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(370, 0, 55),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: plate_2x2_3022,
    partStartPosition: new Vector3(310, 0, 225),
    partType: "3022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: brick_2x4_3001,
    partStartPosition: new Vector3(795, 0, 150),
    partType: "3001",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: brick_2x4_3001,
    partStartPosition: new Vector3(795, 0, 175),
    partType: "3001",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
];
