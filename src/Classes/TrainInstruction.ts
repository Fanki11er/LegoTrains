import { Object3D, Scene } from "three";
import { Model } from "./Model";
import { SetLegoBlocks } from "../PartsLists/SteamLocomotive7722Parts/SetLegoBlockTypes";

export class TrainInstruction {
  private models: Model[] = [];
  private scene: Scene | null = null;
  private activeModel: Model | null = null;
  private setLegoBlocks!: SetLegoBlocks;

  addSetLegoBlocks = (setLegoBlocks: SetLegoBlocks) => {
    this.setLegoBlocks = setLegoBlocks;
  };

  getSetLegoBlocks = () => {
    return this.setLegoBlocks;
  };

  getActiveModelPartsList = () => {
    if (this.setLegoBlocks) {
      return this.setLegoBlocks.getSetLegoBlocks();
    }
    return [];
  };

  getIsSceneLoaded = () => {
    return !!this.scene;
  };

  addModel = (model: Model) => {
    this.models.push(model);
    if (!this.activeModel) {
      this.activeModel = model;
    }
  };

  setActiveModel = (index: number) => {
    if (this.models.length > index) {
      this.activeModel = this.models[index];
    }
  };

  getMarkers = () => {
    if (this.scene) {
      const rootModelMarker = this.scene.getObjectByName("ModelRootMarker");
      if (rootModelMarker && this.activeModel) {
        const activePhase = this.activeModel.getActivePhase();
        return rootModelMarker.children.filter((marker) => {
          return marker.userData.phaseId === activePhase?.getPhaseNumber();
        });
      }
    }
    return [];
  };

  getMarkerById = (id: number) => {
    if (this.scene) {
      return this.scene.getObjectById(id);
    }
  };

  loadScene = (scene: Scene) => {
    this.scene = scene;
  };

  getActiveModel = () => {
    return this.activeModel;
  };

  finishPartConnection = (marker: Object3D) => {
    marker.removeFromParent();
    if (this.activeModel && this.activeModel.getActivePhase())
      this.activeModel.updateNeededPartList(marker.userData.name);
  };
}
