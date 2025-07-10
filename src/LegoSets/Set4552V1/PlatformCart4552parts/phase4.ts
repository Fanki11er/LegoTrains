import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_1x2_3023,
  plate_2_x_6_3795,
  plate_With_Ladder_4175,
} from "../set4552PartsImports";

export const platformCart4552Phase4: LegoBlockType[] = [
  {
    partPath: plate_With_Ladder_4175,
    partStartPosition: new Vector3(-55, 0, 270),
    partType: "4175",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: plate_With_Ladder_4175,
    partStartPosition: new Vector3(-55, 0, 300),
    partType: "4175",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(25, 0, 390),
    partType: "3795",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: ["ModelMarker.011", "ModelMarker.012"],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 210),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(150, 0, 225),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: ["ModelMarker.013"],
  },
];
