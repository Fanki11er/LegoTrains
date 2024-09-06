import { Vector3 } from "three";
import {
  brick_1x4_3010,
  brick_1x6_3009,
  brick_2x3_3002,
  brick_3003,
  brick_4070,
  electric_Wire_766c28,
  electricEngine_x469b,
  hose_Flexible_8p5_73590c01a,
  magnetCylindrical_73092,
  plate_1x6_3666,
  plate_3023,
  plate_With_Ladder_4175,
  plate_x461b,
  round_Plate_4073,
  roundOpenStud_3062b,
  slope_3040,
  slope_Brick_45_2x2_With_Gauges_And_Knobs_3039px6,
  slope_Brick_Inverted_2x2_3660,
  slope_Brick_Inverted_3665,
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
