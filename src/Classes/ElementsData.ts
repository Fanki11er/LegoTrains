import { RefObject } from "react";
import { Group, Object3D, Object3DEventMap } from "three";
import { SlotOrConnector } from "../Enums/SlotsOrConnector";

export class ElementsData {
  private blocks: Object3D[] = [];
  private emptyNests: Object3D[] = [];

  fillBlocksArray = (ref: RefObject<Group<Object3DEventMap>>) => {
    if (ref.current) {
      ref.current.children.forEach((mesh) => {
        this.blocks.push(mesh);
      });
    }
  };

  fillEmptyNestsArray = () => {
    this.blocks.forEach((block) => {
      const nests = block.children.filter((children) => {
        return children.userData.Type === SlotOrConnector.NestSlot;
      });
      this.emptyNests.push(...nests);
    });
  };

  getBlocksArrayLength = () => {
    return this.blocks.length;
  };

  getBlocksArray = () => {
    return this.blocks;
  };

  getEmptyNestArray = () => {
    return this.emptyNests;
  };
}
