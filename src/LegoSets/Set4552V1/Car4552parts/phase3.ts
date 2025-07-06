import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x3_3623, plate_2_x_2_3022 } from "../set4552PartsImports";

export const car4552Phase3: LegoBlockType[] = [
  {
    partPath: plate_2_x_2_3022,
    partStartPosition: new Vector3(-20, 0, 150),
    partType: "3022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: plate_1x3_3623,
    partStartPosition: new Vector3(10, 0, 145),
    partType: "3623",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: plate_1x3_3623,
    partStartPosition: new Vector3(10, 0, 160),
    partType: "3623",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
];
