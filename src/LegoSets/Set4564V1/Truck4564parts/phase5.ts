import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_2x4_3020 } from "../../../PartsImports/Plate_2x4_3020";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";
import { plate_2x2_3022 } from "../../../PartsImports/Plate_2_x_2_3022";

export const truck4564Phase5: LegoBlockType[] = [
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 200),
    partType: "3020",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(210, 0, 150),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: plate_2x2_3022,
    partStartPosition: new Vector3(310, 0, 150),
    partType: "3022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
];
