/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import brick_1x1_3005 from "../../assets/3D/Brick_1x1_3005/Brick_1x1_3005.glb";
import train_Door_1x4x5_Left_4181 from "../../assets/3D/Train_Door_1x4x5_Left_4181/Train_Door_1x4x5_Left_4181.glb";
import train_Door_1x4x5_Right_4182 from "../../assets/3D/Train_Door_1x4x5_Right_4182/Train_Door_1x4x5_Right_4182.glb";
import train_Window_1x2x3_4035 from "../../assets/3D/Train_Window_1x2x3_4035/Train_Window_1x2x3_4035.glb";
import plate_Specialty_1x2_With_Up_Arm_4623 from "../../assets/3D/Plate_Specialty_1x2_With_Up_Arm_4623/Plate_Specialty_1x2_With_Up_Arm_4623.glb";
import plate_Specialty_1x2_With_One_Stud_On_Center_3794 from "../../assets/3D/Plate_Specialty_1x2_With_One_Stud_On_Center_3794/Plate_Specialty_1x2_With_One_Stud_On_Center_3794.glb";
import plate_3023 from "../../assets/3D/Plate_3023/Plate_3023.glb";
import glass_For_Train_Door_4183 from "../../assets/3D/Glass_For_Train_Door_4183/Glass_For_Train_Door_4183.glb";
import glass_For_Train_Window_1x2x3_4036 from "../../assets/3D/Glass_For_Train_Window_1x2x3_4036/Glass_For_Train_Window_1x2x3_4036.glb";

export const phase10: PartInfo[] = [
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 165),
    partId: "3005",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 165),
    partId: "3005",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: train_Door_1x4x5_Left_4181,
    partStartPosition: new Vector3(350, 0, 165),
    partId: "4181",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
    noAutomaticMoveToGroundLevel: true,
    canNotBeRotated: false,
  },
  {
    partPath: train_Door_1x4x5_Right_4182,
    partStartPosition: new Vector3(390, 0, 165),
    partId: "4182",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
    noAutomaticMoveToGroundLevel: true,
    canNotBeRotated: false,
  },
  {
    partPath: train_Window_1x2x3_4035,
    partStartPosition: new Vector3(340, 0, 130),
    partId: "4035",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: train_Window_1x2x3_4035,
    partStartPosition: new Vector3(370, 0, 130),
    partId: "4035",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_Specialty_1x2_With_Up_Arm_4623,
    partStartPosition: new Vector3(300, 0, 25),
    partId: "4623",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(330, 0, 25),
    partId: "3794",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(330, 0, 5),
    partId: "3794",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 130),
    partId: "3023",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 130),
    partId: "3023",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: glass_For_Train_Door_4183,
    partStartPosition: new Vector3(-120, 0, 150),
    partId: "4183",
    partPriority: 2,
  },
  {
    partPath: glass_For_Train_Door_4183,
    partStartPosition: new Vector3(-145, 0, 150),
    partId: "4183",
    partPriority: 2,
  },
  {
    partPath: glass_For_Train_Window_1x2x3_4036,
    partStartPosition: new Vector3(-120, 0, 180),
    partId: "4036",
    partPriority: 2,
  },
  {
    partPath: glass_For_Train_Window_1x2x3_4036,
    partStartPosition: new Vector3(-145, 0, 180),
    partId: "4036",
    partPriority: 2,
  },
];
