import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  door_Sliding_with_Vertical_Lines_4511,
  plate_1_x_8_3460,
  plate_1x4_3710,
  plate_Specialty_1_x_8_with_Door_Rail_4510,
} from "../PartsImports";

export const steamLocomotive7722PostCarPhase11: LegoBlockType[] = [
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 240),
    partType: "3710",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.078",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 255),
    partType: "3710",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.079",
    depends: [],
  },
  {
    partPath: plate_1_x_8_3460,
    partStartPosition: new Vector3(610, 0, 375),
    partType: "3460",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.080",
    depends: [],
  },
  {
    partPath: plate_1_x_8_3460,
    partStartPosition: new Vector3(610, 0, 390),
    partType: "3460",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.081",
    depends: [],
  },
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(530, 0, 410),
    partType: "4510",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.082",
    depends: [],
  },
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(530, 0, 430),
    partType: "4510",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.083",
    depends: [],
  },
  {
    partPath: door_Sliding_with_Vertical_Lines_4511,
    partStartPosition: new Vector3(370, 0, 430),
    partType: "4511",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.084",
    depends: [],
  },
  {
    partPath: door_Sliding_with_Vertical_Lines_4511,
    partStartPosition: new Vector3(450, 0, 430),
    partType: "4511",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.085",
    depends: [],
  },
];
