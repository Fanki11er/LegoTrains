import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { train_Door_Sliding_Type_2_Sticker_Front_Left_2874 } from "../../../PartsImports/Train_Door_Sliding_Type_2_Sticker_Front_Left_2874";
import { train_Door_Sliding_Type_2_Sticker_Back_Left_2874 } from "../../../PartsImports/Train_Door_Sliding_Type_2_Sticker_Back_Left_2874";
import { train_Door_Sliding_Type_2_Sticker_Front_Right_2874 } from "../../../PartsImports/Train_Door_Sliding_Type_2_Sticker_Front_Right_2874";
import { train_Door_Sliding_Type_2_Sticker_Back_Right_2874 } from "../../../PartsImports/Train_Door_Sliding_Type_2_Sticker_Back_Right_2874";
import { plate_Specialty_1_x_8_with_Door_Rail_4510 } from "../../Set7722V1/Set7722V1PartsImports";

export const postCart4564Phase13: LegoBlockType[] = [
  {
    partPath: train_Door_Sliding_Type_2_Sticker_Front_Left_2874,
    partStartPosition: new Vector3(340, 0, 370),
    partType: "2874",
    slotId: "ModelMarker.078",
    depends: [],
  },
  {
    partPath: train_Door_Sliding_Type_2_Sticker_Back_Left_2874,
    partStartPosition: new Vector3(340, 0, 315),
    partType: "2874",
    slotId: "ModelMarker.079",
    depends: ["ModelMarker.078"],
  },
  {
    partPath: train_Door_Sliding_Type_2_Sticker_Front_Right_2874,
    partStartPosition: new Vector3(340, 0, 425),
    partType: "2874",
    slotId: "ModelMarker.080",
    depends: [],
  },
  {
    partPath: train_Door_Sliding_Type_2_Sticker_Back_Right_2874,
    partStartPosition: new Vector3(340, 0, 480),
    partType: "2874",
    slotId: "ModelMarker.081",
    depends: ["ModelMarker.080"],
  },
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(-130, 0, 570),
    partType: "4510",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.082",
    depends: ["ModelMarker.079"],
  },
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(-130, 0, 545),
    partType: "4510",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.083",
    depends: ["ModelMarker.081"],
  },
];
