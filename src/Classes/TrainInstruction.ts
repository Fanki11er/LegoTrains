import { Object3D, Scene } from "three";
import { Model } from "./Model";
import { SetLegoBlocks } from "../PartsLists/SteamLocomotive7722Parts/SetLegoBlockTypes";
import { ModelPersistanceData, PersistanceModule } from "./PersistanceModule";

export class TrainInstruction {
  private models: Model[] = [];
  private scene: Scene | null = null;
  private activeModel: Model | null = null;
  private setLegoBlocks: SetLegoBlocks | null = null;
  private connectedMarkersIds: string[] = [];
  private persistanceModule: PersistanceModule;

  constructor() {
    this.persistanceModule = new PersistanceModule(this);
  }

  addSetLegoBlocks = (setLegoBlocks: SetLegoBlocks) => {
    this.setLegoBlocks = setLegoBlocks;
  };

  getModelRootMarkerByName = (rootMarkerName: string) => {
    if (this.scene) {
      return this.scene.getObjectByName(rootMarkerName);
    }
    return undefined;
  };

  getModels = () => {
    return this.models;
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

  getActiveModelName = () => {
    if (this.activeModel) {
      return this.activeModel.getModelName();
    }
    return "";
  };

  getIsActiveModelFinished = () => {
    if (this.activeModel) {
      return this.activeModel.getIsModelFinished();
    }
    return null;
  };

  getPersistanceModule = () => {
    return this.persistanceModule;
  };

  getConnectedMarkersIds = () => {
    return this.connectedMarkersIds;
  };

  getActivePhaseId = () => {
    if (this.activeModel) {
      const activePhase = this.activeModel.getActivePhase();

      if (activePhase) {
        return activePhase.getPhaseNumber();
      }
    }
    return null;
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

  getMarkersForActivePhase = () => {
    if (this.scene) {
      const rootModelMarker = this.getActiveModelMarkers();

      if (rootModelMarker && this.activeModel) {
        const activePhase = this.activeModel.getActivePhase();
        return rootModelMarker.children.filter((marker) => {
          return marker.userData.phaseId === activePhase?.getPhaseNumber();
        });
      }
    }
    return [];
  };

  getActiveModelMarkers = () => {
    if (this.activeModel && this.scene) {
      const rootModelMarkerId = this.activeModel.getRootModelMarkerId();
      return this.scene.getObjectByName(rootModelMarkerId);
    }
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

  checkIfWasMarkerUsed = (markerId: string) => {
    const result = this.connectedMarkersIds.find((id) => {
      return id === markerId;
    });

    return !!result;
  };

  finishPartConnection = (marker: Object3D) => {
    let isPhaseFinished = false;
    marker.removeFromParent();
    if (this.activeModel && this.activeModel.getActivePhase()) {
      isPhaseFinished = this.activeModel.updateNeededPartList(
        marker.userData.name
      );

      this.connectedMarkersIds.push(marker.userData.name);
    }
    return isPhaseFinished;
  };

  prepareDataToSaveAfterPhaseEnd = () => {
    return this.persistanceModule.prepareDataToSaveAfterPhaseEnd();
  };

  usePersistanceData = (data: ModelPersistanceData[]) => {
    this.models.forEach((model) => {
      if (!model.getIsModelFinished()) {
        const foundModel = data.find((modelData) => {
          return modelData.modelName === model.getModelName();
        });
        if (foundModel && foundModel.activePhaseId) {
          const phase = model.findPhaseByNumber(foundModel.activePhaseId);

          if (phase) {
            model.setActivePhase(phase);
            this.clearNeededPartsInModelPhasesBeforePhaseId(
              model,
              phase.getPhaseNumber()
            );
          }
        }
      } else {
        this.clearNeededPartsListInAllModelPhases(model);
      }
    });
  };

  private clearNeededPartsInModelPhasesBeforePhaseId = (
    model: Model,
    phaseId: number
  ) => {
    const phases = model.getPhases();

    phases.forEach((phase) => {
      if (phase.getPhaseNumber() < phaseId) {
        phase.clearPhasePartsList();
      }
    });
  };

  private clearNeededPartsListInAllModelPhases = (model: Model) => {
    const phases = model.getPhases();

    phases.forEach((phase) => {
      phase.clearPhasePartsList();
    });
  };
}
