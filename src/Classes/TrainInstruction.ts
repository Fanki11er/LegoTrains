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
    this.activeModel?.activePhase.updateNeededPartList(
      marker.userData.forPartId
    );
  };
}

//!! Model
export class Model {
  private phases: Phase[];
  activePhase: Phase;
  private partsList: PartInfo[];
  private instruction: TrainInstruction;

  constructor(
    partsList: PartInfo[],
    phases: Phase[],
    instruction: TrainInstruction
  ) {
    this.partsList = partsList;
    this.phases = phases;
    this.instruction = instruction;
    if (!phases.length) {
      throw new Error("Model phases number is 0");
    }

    this.activePhase = this.findFirstPhase();
  }

  getModelPartsList = () => {
    //??
    console.log("GetPartsList");
    return this.partsList;
  };

  private findFirstPhaseNumber = () => {
    const firstPhaseNumber = Math.min(
      ...this.phases.map((phase) => {
        return phase.getPhaseNumber();
      })
    );
    return firstPhaseNumber;
  };

  private findFirstPhase = () => {
    const firstPhase =
      this.phases.find((phase) => {
        return phase.getPhaseNumber() === this.findFirstPhaseNumber();
      }) || this.phases[0];
    return firstPhase;
  };

  getMarkersForSelectedPart = (partId: string) => {
    const isPartNeededInActivePhase =
      this.activePhase.checkIfPartIsNeededInPhase(partId);
    if (isPartNeededInActivePhase) {
      const markers = this.instruction.getMarkers();
      return markers.filter((marker) => {
        return marker.userData.forPartId === partId;
      });
    }
    return [];
  };
}
//!! Phase
export class Phase {
  private phaseNumber: number;
  private neededPartsList: string[];

  constructor(phaseNumber: number, neededPartsList: string[]) {
    this.phaseNumber = phaseNumber;
    this.neededPartsList = neededPartsList;
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
    console.log(this.neededPartsList);
  };
}
