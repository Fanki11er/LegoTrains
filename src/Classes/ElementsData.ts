import { RefObject } from "react";
import {
  Color,
  Group,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Object3DEventMap,
} from "three";
import { SlotOrConnector } from "../Enums/SlotsOrConnector";
import { SelectedObject } from "../Types/SelectedObject";

export class ElementsData {
  private blocks: Object3D[] = [];
  private emptyNests: Object3D[] = [];
  private selectedObject: SelectedObject | null = null;

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

  setSelectedObject = (object: Object3D<Object3DEventMap>) => {
    if (this.selectedObject?.object && this.selectedObject.object !== object) {
      console.log("Reset");
      this.resetSelectedObject();
    }

    const typedObject = object as Mesh;
    const material = typedObject.material as MeshBasicMaterial;
    this.selectedObject = {
      object: object as Mesh,
      originalMaterialColor: material.color,
    };
    material.color = new Color("lightgreen");
  };

  resetSelectedObject = () => {
    if (this.selectedObject) {
      const material = this.selectedObject.object.material as MeshBasicMaterial;
      material.color = this.selectedObject.originalMaterialColor;
      this.selectedObject = null;
    }
  };
}
