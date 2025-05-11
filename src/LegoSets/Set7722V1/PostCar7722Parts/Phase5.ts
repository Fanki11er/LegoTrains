import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x2_3004,
  plate_1_x_8_3460,
  plate_1x4_3710,
  plate_Specialty_1_x_8_with_Door_Rail_4510,
  turntable_2_x_2_Plate_Black_3680c01,
} from "../PartsImports";

export const steamLocomotive7722PostCarPhase5: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(530, 0, 370),
    partType: "4510",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.035",
    depends: [],
  },
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(530, 0, 390),
    partType: "4510",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.036",
    depends: [],
  },
  {
    partPath: plate_1_x_8_3460,
    partStartPosition: new Vector3(610, 0, 345),
    partType: "3460",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.033",
    depends: [],
  },
  {
    partPath: plate_1_x_8_3460,
    partStartPosition: new Vector3(610, 0, 360),
    partType: "3460",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 210),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.031",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 225),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.032",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(325, 0, 100),
    partType: "3004",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.037",
    depends: [],
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(350, 0, 100),
    partType: "3004",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.038",
    depends: [],
  },
  {
    partPath: turntable_2_x_2_Plate_Black_3680c01,
    partStartPosition: new Vector3(180, 0, -80),
    partType: "3680c01",
    slotId: "ModelMarker.039",
    depends: [],
  },
];
