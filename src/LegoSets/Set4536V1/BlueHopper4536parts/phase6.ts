import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_1x2_3004 } from "../../../PartsImports/Brick_1x2_3004";
import { antenna_5x1_3857 } from "../../../PartsImports/Antenna_5x1_3857";
import { brick_4070 } from "../../../PartsImports/Brick_4070";

export const blueHopper4536Phase6: LegoBlockType[] = [
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(115, 0, 350),
    partType: "3004",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.042",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(115, 0, 365),
    partType: "3004",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.043",
    depends: [],
  },
  {
    partPath: antenna_5x1_3857,
    partStartPosition: new Vector3(410, 0, 170),
    partType: "3857",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.044",
    depends: [],
  },

  {
    partPath: antenna_5x1_3857,
    partStartPosition: new Vector3(425, 0, 170),
    partType: "3857",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.045",
    depends: [],
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(95, 0, 240),
    partType: "4070",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.046",
    depends: ["ModelMarker.044"],
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(95, 0, 255),
    partType: "4070",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.047",
    depends: ["ModelMarker.045"],
  },
];
