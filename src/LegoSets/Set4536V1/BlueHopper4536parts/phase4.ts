import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { bar_1x6_with_Studs_Open_4873 } from "../../../PartsImports/Bar_1x6_with_Studs_Open_4873";
import { plate_1x10_4477 } from "../../../PartsImports/Plate_1x10_4477";
import { plate_2x3_3021 } from "../../../PartsImports/Plate_2x3_3021";
import { brick_4070 } from "../../../PartsImports/Brick_4070";

export const blueHopper4536Phase4: LegoBlockType[] = [
  {
    partPath: bar_1x6_with_Studs_Open_4873,
    partStartPosition: new Vector3(430, 0, 140),
    partType: "4873",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.026",
    depends: [],
  },
  {
    partPath: bar_1x6_with_Studs_Open_4873,
    partStartPosition: new Vector3(430, 0, 155),
    partType: "4873",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.027",
    depends: [],
  },

  {
    partPath: plate_1x10_4477,
    partStartPosition: new Vector3(450, 0, 270),
    partType: "4477",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
  {
    partPath: plate_1x10_4477,
    partStartPosition: new Vector3(450, 0, 285),
    partType: "4477",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.029",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 245),
    partType: "3021",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.030",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 270),
    partType: "3021",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.031",
    depends: [],
  },

  {
    partPath: brick_4070,
    partStartPosition: new Vector3(95, 0, 210),
    partType: "4070",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.032",
    depends: [],
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(95, 0, 225),
    partType: "4070",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.033",
    depends: [],
  },
];
