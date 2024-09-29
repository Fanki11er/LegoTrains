import { Object3D, Scene } from "three";
import { MarkersInfo, Model } from "./Model";
import { SetLegoBlocks } from "../PartsLists/SteamLocomotive7722Parts/SetLegoBlockTypes";
import { ModelPersistanceData, PersistanceModule } from "./PersistanceModule";

export class TrainInstruction {
  private models: Model[] = [];
  private scene: Scene | null = null;
  private activeModel: Model | null = null;
  private setLegoBlocks: SetLegoBlocks | null = null;
  private connectedMarkersIds: string[] = [];
  private persistanceModule: PersistanceModule;
  private sceneMarkersInfo: MarkersInfo;

  constructor(modelMarkersPath: string, markersId: string = "SceneRootMarker") {
    this.sceneMarkersInfo = {
      markersPath: modelMarkersPath,
      rootMarkerId: markersId,
    };

    this.persistanceModule = new PersistanceModule(this);
  }

  addSetLegoBlocks = (setLegoBlocks: SetLegoBlocks) => {
    this.setLegoBlocks = setLegoBlocks;
  };

  getSceneMarkersInfo = () => {
    return this.sceneMarkersInfo;
  };

  getModelRootMarkerByName = (rootMarkerName: string) => {
    if (this.scene) {
      return this.scene.getObjectByName(rootMarkerName);
    }
    return undefined;
  };

  getSetRootMarker = () => {
    return this.getModelRootMarkerByName(this.sceneMarkersInfo.rootMarkerId);
  };

  getModels = () => {
    return this.models;
  };

  getModelsReadyToRender = () => {
    const arrangedModels = this.models.filter((model) => {
      return model.getIsModelArranged();
    });

    if (this.activeModel) {
      return [...arrangedModels, this.activeModel];
    }
    return arrangedModels;
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

  getIsActiveModelArranged = () => {
    if (this.activeModel) {
      return this.activeModel.getIsModelArranged();
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
      this.changeToNextActiveModel();
    }
  };

  // setActiveModel = (index: number) => {
  //   if (this.models.length > index) {
  //     this.activeModel = this.models[index];
  //   }
  // };

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
      const foundModel = data.find((modelData) => {
        return modelData.modelName === model.getModelName();
      });

      if (!foundModel) {
        //Todo: Errors
        console.log("Error, no model found");
        return;
      }

      if (!foundModel.isModelFinished) {
        if (foundModel.activePhaseId) {
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
        model.setIsModelFinished(foundModel.isModelFinished);
        model.setIsModelArranged(foundModel.isModelArranged);
      }
    });
    this.changeToNextActiveModel();
  };

  moveReadyModelToSetArrangement = () => {
    if (this.activeModel && this.scene) {
      const modelName = this.activeModel.getModelName();
      const modelRootMarkerId = this.activeModel.getRootModelMarkerId();
      const modelRootMarker = this.getModelRootMarkerByName(modelRootMarkerId);
      const sceneRootMarker = this.getModelRootMarkerByName(
        this.sceneMarkersInfo.rootMarkerId
      );

      if (modelRootMarker && sceneRootMarker) {
        const destinationMarker = sceneRootMarker.children.find((child) => {
          return child.userData && child.userData.forModelId === modelName;
        });

        if (!destinationMarker) {
          //Todo: Error
          console.log("Error, destination marker not found");
          return false;
        }

        modelRootMarker.position.copy(destinationMarker.position);
        modelRootMarker.quaternion.copy(destinationMarker.quaternion);
        sceneRootMarker.add(modelRootMarker);
        this.activeModel.setIsModelArranged(true);
        this.changeToNextActiveModel();
        return true;
      } else {
        //Todo: Error
        console.log("Error, markers not found");
        return false;
      }
    }
    return false;
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

  private changeToNextActiveModel = () => {
    let newActiveModel: Model | null = null;

    for (let i = 0; i < this.models.length; i++) {
      if (!this.models[i].getIsModelArranged()) {
        newActiveModel = this.models[i];
        break;
      }
    }
    this.activeModel = newActiveModel;
  };
}
