import { Vector3 } from "three";
import {
  brick_1x1_3005,
  brick_1x2_3004,
  brick_1x4_3010,
  brick_1x6_3009,
  brick_1x8_3008,
  brick_2x3_3002,
  brick_3003,
  brick_4070,
  cone_1x1_4589,
  dish_4_x_4_Round_Inverted_3960,
  electric_Wire_766c28,
  electricEngine_x469b,
  glass_For_Train_Door_4183,
  glass_For_Train_Window_1x2x3_4036,
  hose_Flexible_8p5_73590c01a,
  magnetCylindrical_73092,
  minifig_Head_Plain_Undecorated_3626b,
  plate_1x4_3710,
  plate_1x6_3666,
  plate_3023,
  plate_Specialty_1x2_With_One_Stud_On_Center_3794,
  plate_Specialty_1x2_With_Up_Arm_4623,
  plate_With_Ladder_4175,
  plate_x461b,
  round_Plate_4073,
  roundOpenStud_3062b,
  slope_3040,
  slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6,
  slope_Brick_45_2x3_3038,
  slope_Brick_Inverted_2x2_3660,
  slope_Brick_Inverted_3665,
  technic_Brick_1x2_With_Pin_Hole_3700,
  technic_Pin_Half_Length_4274,
  tile_2x2_With_Grove_3068b,
  train_Door_1x4x5_Left_4181,
  train_Door_1x4x5_Right_4182,
  train_Roof_6x6_4509,
  train_Wheel_Spoked_2ac02,
  train_Window_1x2x3_4035,
  trainBase_4178,
  trainCoupling_4023,
} from "./PartsImports";

type LegoBlockType = {
  partPath: string;
  partType: string;
  partStartPosition: Vector3;
  materialId?: string;
  canNotBeRotated?: boolean;
  noAutomaticMoveToGroundLevel?: boolean;
};

export type LegoBlock = LegoBlockType & { partId: number };

const setLegoBlockTypes: LegoBlockType[] = [
  {
    partPath: trainBase_4178,
    partStartPosition: new Vector3(0, 0, 60),
    partType: "4178",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-25, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-10, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(10, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(25, 0, 100),
    partType: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_x461b,
    partStartPosition: new Vector3(15, 0, 120),
    partType: "x461b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_x461b,
    partStartPosition: new Vector3(-15, 0, 120),
    partType: "x461b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(60, 0, 100),
    partType: "3023",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(80, 0, 100),
    partType: "3023",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: electricEngine_x469b,
    partStartPosition: new Vector3(0, 0, -80),
    partType: "x469b",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 100),
    partType: "3023",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 100),
    partType: "3023",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 45),
    partType: "4023",
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 65),
    partType: "4023",
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(110, 0, 85),
    partType: "73092",
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(125, 0, 85),
    partType: "73092",
  },
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(165, 0, 85),
    partType: "3040",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_3040,
    partStartPosition: new Vector3(145, 0, 85),
    partType: "3040",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_With_Ladder_4175,
    partStartPosition: new Vector3(40, 0, 130),
    partType: "4175",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_With_Ladder_4175,
    partStartPosition: new Vector3(65, 0, 130),
    partType: "4175",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: brick_3003,
    partStartPosition: new Vector3(145, 0, -30),
    partType: "3003",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 115),
    partType: "3023",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 115),
    partType: "3023",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 115),
    partType: "3009",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 130),
    partType: "3009",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(180, 0, 85),
    partType: "4070",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(195, 0, 85),
    partType: "4070",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(180, 0, 100),
    partType: "4070",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(195, 0, 100),
    partType: "4070",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: electric_Wire_766c28,
    partStartPosition: new Vector3(180, 0, -20),
    partType: "766c28",
    canNotBeRotated: true,
    noAutomaticMoveToGroundLevel: true,
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(195, 0, 70),
    partType: "4073",
    materialId: "whiteTransparentMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(195, 0, 55),
    partType: "4073",
    materialId: "whiteTransparentMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 55),
    partType: "4073",
    materialId: "redTransparentMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 70),
    partType: "4073",
    materialId: "redTransparentMaterial",
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 115),
    partType: "3010",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 115),
    partType: "3002",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 140),
    partType: "3002",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 165),
    partType: "3002",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_2x3_3002,
    partStartPosition: new Vector3(-55, 0, 190),
    partType: "3002",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 145),
    partType: "3666",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(230, 0, 95),
    partType: "3665",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(250, 0, 95),
    partType: "3665",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(220, 0, 70),
    partType: "3660",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_Inverted_2x2_3660,
    partStartPosition: new Vector3(245, 0, 70),
    partType: "3660",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6,
    partStartPosition: new Vector3(145, 0, 30),
    partType: "3039px6",
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 130),
    partType: "3010",

    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x4_3010,
    partStartPosition: new Vector3(230, 0, 145),
    partType: "3010",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x6_3009,
    partStartPosition: new Vector3(180, 0, 145),
    partType: "3009",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(210, 0, 85),
    partType: "4070",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_4070,
    partStartPosition: new Vector3(210, 0, 100),
    partType: "4070",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: hose_Flexible_8p5_73590c01a,
    partStartPosition: new Vector3(275, 0, 70),
    partType: "73590c01a",
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
  },
  {
    partPath: hose_Flexible_8p5_73590c01a,
    partStartPosition: new Vector3(315, 0, 70),
    partType: "73590c01a",
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
  },

  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 135),
    partType: "3005",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 135),
    partType: "3005",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(290, 0, 115),
    partType: "3008",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x8_3008,
    partStartPosition: new Vector3(290, 0, 130),
    partType: "3008",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: technic_Brick_1x2_With_Pin_Hole_3700,
    partStartPosition: new Vector3(275, 0, 100),
    partType: "3700",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 150),
    partType: "3005",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 150),
    partType: "3005",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x2_3004,
    partStartPosition: new Vector3(300, 0, 100),
    partType: "3004",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: technic_Pin_Half_Length_4274,
    partStartPosition: new Vector3(280, 0, 25),
    partType: "4274",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, 0),
    partType: "3038",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -25),
    partType: "3038",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -50),
    partType: "3038",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -75),
    partType: "3038",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -100),
    partType: "3038",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: slope_Brick_45_2x3_3038,
    partStartPosition: new Vector3(280, 0, -125),
    partType: "3038",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-80, 0, 165),
    partType: "3005",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(-95, 0, 165),
    partType: "3005",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: train_Door_1x4x5_Left_4181,
    partStartPosition: new Vector3(350, 0, 165),
    partType: "4181",
    materialId: "blackPlasticMaterial",
    noAutomaticMoveToGroundLevel: true,
    canNotBeRotated: false,
  },
  {
    partPath: train_Door_1x4x5_Right_4182,
    partStartPosition: new Vector3(390, 0, 165),
    partType: "4182",
    materialId: "blackPlasticMaterial",
    noAutomaticMoveToGroundLevel: true,
    canNotBeRotated: false,
  },
  {
    partPath: train_Window_1x2x3_4035,
    partStartPosition: new Vector3(340, 0, 130),
    partType: "4035",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: train_Window_1x2x3_4035,
    partStartPosition: new Vector3(370, 0, 130),
    partType: "4035",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_Specialty_1x2_With_Up_Arm_4623,
    partStartPosition: new Vector3(300, 0, 25),
    partType: "4623",
    materialId: "blackPlasticMaterial",
    canNotBeRotated: false,
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(330, 0, 25),
    partType: "3794",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_Specialty_1x2_With_One_Stud_On_Center_3794,
    partStartPosition: new Vector3(330, 0, 5),
    partType: "3794",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 130),
    partType: "3023",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 130),
    partType: "3023",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: glass_For_Train_Door_4183,
    partStartPosition: new Vector3(-120, 0, 150),
    partType: "4183",
  },
  {
    partPath: glass_For_Train_Door_4183,
    partStartPosition: new Vector3(-145, 0, 150),
    partType: "4183",
  },
  {
    partPath: glass_For_Train_Window_1x2x3_4036,
    partStartPosition: new Vector3(-120, 0, 180),
    partType: "4036",
  },
  {
    partPath: glass_For_Train_Window_1x2x3_4036,
    partStartPosition: new Vector3(-145, 0, 180),
    partType: "4036",
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 160),
    partType: "3666",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 175),
    partType: "3666",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_3003,
    partStartPosition: new Vector3(145, 0, 0),
    partType: "3003",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 40),
    partType: "4073",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 25),
    partType: "4073",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 135),
    partType: "3710",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: minifig_Head_Plain_Undecorated_3626b,
    partStartPosition: new Vector3(145, 0, 55),
    partType: "3626b",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-215, 0, 160),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-240, 0, 160),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: cone_1x1_4589,
    partStartPosition: new Vector3(360, 0, 25),
    partType: "4589",
    materialId: "yellowPLasticMaterial",
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(360, 0, 300),
    partType: "4509",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(400, 0, 25),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: dish_4_x_4_Round_Inverted_3960,
    partStartPosition: new Vector3(400, 0, -100),
    partType: "3960",
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(400, 0, -170),
    partType: "2ac02",
    canNotBeRotated: true,
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(440, 0, -170),
    partType: "2ac02",
    canNotBeRotated: true,
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(400, 0, -140),
    partType: "2ac02",
    canNotBeRotated: true,
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(440, 0, -140),
    partType: "2ac02",
    canNotBeRotated: true,
  },
];

export class SetLegoBlocks {
  setName: string;
  private setLegoBlocks: LegoBlock[] = [];
  private currentId = 0;

  constructor(setName: string) {
    this.setName = setName;
  }
  private incrementId = () => {
    this.currentId += 1;
  };

  addBlocks = (legoBlocks: LegoBlockType[]) => {
    legoBlocks.forEach((block) => {
      this.setLegoBlocks.push({ ...block, partId: this.currentId });
      this.incrementId();
    });
  };
  getSetLegoBlocks = () => {
    return this.setLegoBlocks;
  };
}

const set7722LegoBlocks = new SetLegoBlocks("SteamLocomotive7722");

set7722LegoBlocks.addBlocks(setLegoBlockTypes);

export default set7722LegoBlocks;
