import { Vector3 } from "three";
import {
  brick_3003,
  electricEngine_x469b,
  magnetCylindrical_73092,
  plate_3023,
  plate_With_Ladder_4175,
  plate_x461b,
  roundOpenStud_3062b,
  slope_3040,
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
