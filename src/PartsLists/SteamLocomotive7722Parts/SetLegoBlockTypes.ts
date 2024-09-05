import { Vector3 } from "three";
import { roundOpenStud_3062b, trainBase_4178 } from "./PartsImports";

type LegoBlockType = {
  partPath: string;
  partId: string;
  partStartPosition: Vector3;
  materialId?: string;
  canNotBeRotated?: boolean;
  noAutomaticMoveToGroundLevel?: boolean;
};

export type LegoBlock = LegoBlockType & { Id: number };

const setLegoBlockTypes: LegoBlockType[] = [
  {
    partPath: trainBase_4178,
    partStartPosition: new Vector3(0, 0, 60),
    partId: "4178",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-25, 0, 100),
    partId: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-10, 0, 100),
    partId: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(10, 0, 100),
    partId: "3062b",
    materialId: "redPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(25, 0, 100),
    partId: "3062b",
    materialId: "redPlasticMaterial",
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
      this.setLegoBlocks.push({ ...block, Id: this.currentId });
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
