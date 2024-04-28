import { Object3D, Scene } from "three";
import { PartInfo } from "../Types/PartInfo";

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
      if (rootModelMarker) {
        return rootModelMarker.children;
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
    if (this.activeModel && this.activeModel.activePhase)
      this.activeModel.activePhase.updateNeededPartList(
        marker.userData.forPartId
      );
  };
}

//!! Model
export class Model {
  private phases: Phase[] = [];
  activePhase: Phase | null = null;
  private instruction: TrainInstruction;

  constructor(instruction: TrainInstruction) {
    this.instruction = instruction;
    // if (!phases.length) {
    //   throw new Error("Model phases number is 0");
    // }

    //this.activePhase = this.findFirstPhase();
  }

  addPhases = (phasesList: Phase[]) => {
    this.phases = phasesList;
    if (!this.activePhase) {
      this.activePhase = this.phases[0];
    }
  };

  getModelPartsList = () => {
    //??
    console.log("GetPartsList");
    return this.phases
      .map((phase) => {
        return phase.getPhasePartsList();
      })
      .flat();
  };

  // private findFirstPhaseNumber = () => {
  //   const firstPhaseNumber = Math.min(
  //     ...this.phases.map((phase) => {
  //       return phase.getPhaseNumber();
  //     })
  //   );
  //   return firstPhaseNumber;
  // };

  // private findFirstPhase = () => {
  //   const firstPhase =
  //     this.phases.find((phase) => {
  //       return phase.getPhaseNumber() === this.findFirstPhaseNumber();
  //     }) || this.phases[0];
  //   return firstPhase;
  // };

  getMarkersForSelectedPart = (partId: string) => {
    if (this.activePhase) {
      const isPartNeededInActivePhase =
        this.activePhase.checkIfPartIsNeededInPhase(partId);
      if (isPartNeededInActivePhase) {
        const markers = this.instruction.getMarkers();
        return markers.filter((marker) => {
          return marker.userData.forPartId === partId;
        });
      }
    }
    return [];
  };

  incrementActivePhase = () => {
    if (this.activePhase) {
      const currentPhaseIndex = this.phases.indexOf(this.activePhase);
      const newPhaseIndex = currentPhaseIndex + 1;
      if (newPhaseIndex <= this.phases.length) {
        this.activePhase = this.phases[newPhaseIndex];
      }
    }
  };
}
//!! Phase
export class Phase {
  private phaseNumber: number;
  private neededPartsList: string[] = [];
  private phasePartsList: PartInfo[] = [];
  model: Model;

  constructor(model: Model, phaseNumber: number, phasePartsList: PartInfo[]) {
    this.model = model;
    this.phaseNumber = phaseNumber;
    this.addPartsToPhase(phasePartsList);
  }

  getPhaseNumber = () => {
    return this.phaseNumber;
  };

  checkIfPartIsNeededInPhase = (partId: string) => {
    if (this.neededPartsList.includes(partId)) {
      return true;
    }
    return false;
  };

  updateNeededPartList = (partId: string) => {
    const recordIndexToRemove = this.neededPartsList.indexOf(partId);
    this.neededPartsList.splice(recordIndexToRemove, 1);
    if (!this.neededPartsList.length) {
      this.model.incrementActivePhase();
    }
  };

  getPhasePartsList = () => {
    return this.phasePartsList;
  };

  addPartsToPhase = (partInfoList: PartInfo[]) => {
    partInfoList.forEach((partInfo) => {
      this.phasePartsList.push(partInfo);
      this.neededPartsList.push(partInfo.partId);
    });
  };
}
