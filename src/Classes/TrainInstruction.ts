import { Object3D, Object3DEventMap, Scene } from "three";
import { MarkersInfo, Model } from "./Model";
import { SetLegoBlocks } from "../LegoSets/Set7722V1/SteamLocomotive7722Parts/SetLegoBlockTypes";
import { ModelPersistenceData, PersistenceModule } from "./PersistenceModule";
import { saveErrorLog } from "../firebase/writeToDbFunctions";
import {
  getPartArrangementFunction,
  PartsArraignmentFunctionsTypes,
} from "../Utilities/partsAfterConnectionFunctions";
import { ModelConfiguration } from "../Types/ModelTypes";
//import { CompleteModel } from "./CompleteModel";
export class TrainInstruction {
  private legoSetNumber: string;
  private models: Model[] = [];
  sceneLoader!: () => Scene;
  private activeModel: Model | null = null;
  private setLegoBlocks: SetLegoBlocks;
  private persistenceModule: PersistenceModule;
  private sceneMarkersInfo: MarkersInfo;
  private isPersistenceDataLoaded: boolean = false;

  constructor(
    legoSetNumber: string,
    modelMarkersPath: string,
    markersId: string = "SceneRootMarker"
  ) {
    this.legoSetNumber = legoSetNumber;
    this.sceneMarkersInfo = {
      markersPath: modelMarkersPath,
      rootMarkerId: markersId,
    };

    this.persistenceModule = new PersistenceModule(this);
    this.setLegoBlocks = new SetLegoBlocks(this);
  }

  getLegoSetNumber = () => {
    return this.legoSetNumber;
  };

  createModel = (modelConfiguration: ModelConfiguration) => {
    const {
      modelName,
      modelMarkers,
      modelBlocks,
      isPartialModel,
      arrangementFunction,
      doNotMoveToTheFloorLevel,
      afterModelCreationFunction,
      afterPhaseEndArraignmentFunction,
      afterConnectArraignmentFunctionsNames,
      afterPhaseEndArraignmentFunctionsNames,
      completeModelId,
    } = modelConfiguration;

    const model = new Model(
      modelName,
      modelMarkers,
      this,
      isPartialModel,
      doNotMoveToTheFloorLevel,
      completeModelId
    );

    model.registerBlocksAfterConnectArraignmentsFunctionsNames(
      afterConnectArraignmentFunctionsNames
    );

    if (arrangementFunction) {
      model.registerModelArrangementFunction(arrangementFunction);
    }

    if (afterModelCreationFunction) {
      model.registerAfterModelCreationFunction(afterModelCreationFunction);
    }

    if (afterPhaseEndArraignmentFunction) {
      model.registerAfterPhaseEndArraignmentFunction(
        afterPhaseEndArraignmentFunction
      );
    }

    model.registerAfterPhaseEndArraignmentFunctionsNames(
      afterPhaseEndArraignmentFunctionsNames
    );

    this.addModel(model);

    this.setLegoBlocks.addForModelBlocks(modelName, modelBlocks);
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

  getModelByName = (modelName: string) => {
    return this.models.find((model) => {
      return model.getModelName() === modelName;
    });
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

  getPersistenceModule = () => {
    return this.persistenceModule;
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

  getIsPersistenceDataLoaded = () => {
    return this.isPersistenceDataLoaded;
  };

  setIsPersistenceDataLoaded = (isPersistenceDataLoaded: boolean) => {
    this.isPersistenceDataLoaded = isPersistenceDataLoaded;
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

  getModelMarkers = (model: Model) => {
    const scene = this.sceneLoader();
    const rootModelMarkerId = model.getRootModelMarkerId();
    return scene.getObjectByName(rootModelMarkerId);
  };

  getMarkerById = (id: number) => {
    const scene = this.sceneLoader();

    return scene.getObjectById(id);
  };

  getActiveModel = () => {
    return this.activeModel;
  };

  finishPartConnection = (marker: Object3D) => {
    let isPhaseFinished = false;
    marker.removeFromParent();
    if (this.activeModel && this.activeModel.getActivePhase()) {
      isPhaseFinished = this.activeModel.updateNeededPartList(
        marker.userData.name
      );

      this.activeModel.addConnectedMarkerIdToArray(marker.userData.name);
    }
    return isPhaseFinished;
  };

  prepareDataToSaveAfterPhaseEnd = () => {
    return this.persistenceModule.prepareDataToSaveAfterPhaseEnd(
      this.activeModel
    );
  };

  prepareDataToSaveAfterModelArrangement = (model: Model) => {
    return this.persistenceModule.prepareDataToSaveAfterModelArrangement(model);
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
        model.addConnectedMarkersIdToArray(foundModel.connectedMarkersIds);
        model.setIsModelArranged(foundModel.isModelArranged);
        model.setIsArrangedAfterCreation(foundModel.isArrangedAfterCreation);
      } else {
        this.clearNeededPartsListInAllModelPhases(model);
        model.setIsModelFinished(foundModel.isModelFinished);
        model.setIsModelArranged(foundModel.isModelArranged);
        model.setIsArrangedAfterCreation(foundModel.isArrangedAfterCreation);
      }
    });

    this.changeToNextActiveModel();
    this.isPersistenceDataLoaded = true;
  };

  setFinalModelArrangement = () => {
    let otherModifiedModelsIds: string[] = [];
    let status = "success";
    if (this.activeModel) {
      const oldModel = this.activeModel;
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
          return null;
        }

        modelRootMarker.position.copy(destinationMarker.position);
        modelRootMarker.quaternion.copy(destinationMarker.quaternion);
        sceneRootMarker.add(modelRootMarker);

        this.activeModel.setIsModelArranged(true);

        const modelArrangementFunction =
          this.activeModel.getModelArrangementFunction();

        //?? Arrange elements like doors and connectors

        if (modelArrangementFunction) {
          const result = modelArrangementFunction(
            modelRootMarker,
            sceneRootMarker
          );
          otherModifiedModelsIds = result.touchedModels;
          status = result.status;
        }
        this.changeToNextActiveModel();

        return {
          oldModel,
          otherModifiedModelsIds,
          status,
        };
      } else {
        saveErrorLog(
          "Error, markers not found",
          this.activeModel.getModelName()
        );
        return null;
      }
    }
    return null;
  };

  checkIfSetIsFinished = () => {
    return !this.models.find((model) => {
      return !model.getIsModelArranged();
    });
  };

  getShouldByHelperVisible() {
    if (this.activeModel) {
      return !this.activeModel.getConnectedMarkersIds().length;
    }
    return true;
  }

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

  arrangePartAfterConnection = (
    model: Object3D<Object3DEventMap>,
    arraignmentFunctionName: PartsArraignmentFunctionsTypes
  ) => {
    const arraignmentFunction = getPartArrangementFunction(
      arraignmentFunctionName
    );

    if (arraignmentFunction) {
      const modelRootMarker = this.getActiveModelMarkers();
      arraignmentFunction(model, modelRootMarker);
    }
  };

  partsArrangeAfterPhaseEnd = () => {
    const rootModelMarker = this.getActiveModelMarkers();
    const scene = this.sceneLoader();

    if (!rootModelMarker) {
      console.error("Error, root model marker not found");
      saveErrorLog(
        "Error, root model marker not found",
        this.activeModel?.getModelName() || "Unknown Model"
      );
      return {
        touchedModels: [],
        status: "error",
      };
    }
    const result = this.activeModel?.partsArrangeAfterPhaseEnd(
      rootModelMarker,
      scene
    );
    return result?.status === "success"
      ? {
          touchedModels: result.touchedModels,
          status: "success",
        }
      : {
          touchedModels: [],
          status: "error",
        };
  };
}
