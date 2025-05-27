import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_Specialty_2_x_4_with_Black_Spoked_Train_Wheels_4180c01,
  plate_4_x_4_3031,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722PostCarPhase4: LegoBlockType[] = [
  {
    partPath: brick_Specialty_2_x_4_with_Black_Spoked_Train_Wheels_4180c01,
    partStartPosition: new Vector3(430, 0, 370),
    partType: "4180c01",
    slotId: "ModelMarker.030",
    depends: [],
  },
  {
    partPath: brick_Specialty_2_x_4_with_Black_Spoked_Train_Wheels_4180c01,
    partStartPosition: new Vector3(470, 0, 370),
    partType: "4180c01",
    slotId: "ModelMarker.029",
    depends: [],
  },
  {
    partPath: plate_4_x_4_3031,
    partStartPosition: new Vector3(-600, 0, 290),
    partType: "3031",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
];
