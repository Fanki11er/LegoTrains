import { Object3D, Scene } from "three";
import { MarkersInfo, Model } from "./Model";
import { SetLegoBlocks } from "../LegoSets/Set7722V1/SteamLocomotive7722Parts/SetLegoBlockTypes";
import { ModelPersistenceData, PersistenceModule } from "./PersistenceModule";
import { saveErrorLog } from "../firebase/writeToDbFunctions";

export class TrainInstruction {
  private models: Model[] = [];
  sceneLoader!: () => Scene;
  private activeModel: Model | null = null;
  private setLegoBlocks: SetLegoBlocks | null = null;
  private connectedMarkersIds: string[] = [];
  private persistenceModule: PersistenceModule;
  private sceneMarkersInfo: MarkersInfo;

  constructor(modelMarkersPath: string, markersId: string = "SceneRootMarker") {
    this.sceneMarkersInfo = {
      markersPath: modelMarkersPath,
      rootMarkerId: markersId,
    };

    this.persistenceModule = new PersistenceModule(this);
  }

  addSetLegoBlocks = (setLegoBlocks: SetLegoBlocks) => {
    this.setLegoBlocks = setLegoBlocks;
  };

  getSceneMarkersInfo = () => {
    return this.sceneMarkersInfo;
  };

  getModelRootMarkerByName = (rootMarkerName: string) => {
    const scene = this.sceneLoader();
    return scene.getObjectByName(rootMarkerName);
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

  getPersistenceModule = () => {
    return this.persistenceModule;
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

  getMarkersForActivePhase = () => {
    const rootModelMarker = this.getActiveModelMarkers();

    if (rootModelMarker && this.activeModel) {
      const activePhase = this.activeModel.getActivePhase();
      return rootModelMarker.children.filter((marker) => {
        return marker.userData.phaseId === activePhase?.getPhaseNumber();
      });
    }
    return [];
  };

  getActiveModelMarkers = () => {
    const scene = this.sceneLoader();

    if (this.activeModel) {
      const rootModelMarkerId = this.activeModel.getRootModelMarkerId();
      return scene.getObjectByName(rootModelMarkerId);
    }
  };

  getMarkerById = (id: number) => {
    const scene = this.sceneLoader();

    return scene.getObjectById(id);
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
    return this.persistenceModule.prepareDataToSaveAfterPhaseEnd();
  };

  usePersistenceData = (data: ModelPersistenceData[]) => {
    this.models.forEach((model) => {
      const foundModel = data.find((modelData) => {
        return modelData.modelName === model.getModelName();
      });

      if (!foundModel) {
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
    if (this.activeModel) {
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
          saveErrorLog(
            "Error, destination marker not found",
            sceneRootMarker.name
          );
          return false;
        }

        modelRootMarker.position.copy(destinationMarker.position);
        modelRootMarker.quaternion.copy(destinationMarker.quaternion);
        sceneRootMarker.add(modelRootMarker);
        this.activeModel.setIsModelArranged(true);
        this.changeToNextActiveModel();
        return true;
      } else {
        saveErrorLog(
          "Error, markers not found",
          this.activeModel.getModelName()
        );
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
  getSceneLoader = (fn: () => Scene) => {
    this.sceneLoader = fn;
  };
}
