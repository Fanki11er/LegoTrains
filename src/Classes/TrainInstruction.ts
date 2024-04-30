import { Object3D, Scene } from "three";
import { Model } from "./Model";

export class TrainInstruction {
  private models: Model[] = [];
  private scene: Scene | null = null;
  private activeModel: Model | null = null;

  getActiveModelPartsList = () => {
    if (this.activeModel) {
      return this.activeModel.getModelPartsList();
    }
    return [];
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
      this.activeModel.updateNeededPartList(marker.userData.forPartId);
  };
}
