import { Scene } from "three";
import { PartInfo } from "../Types/PartInfo";

export class TrainInstruction {
  private models: Model[] = [];
  private scene: Scene | null = null;

  //Todo Fix active model info
  getActiveModelPartsList = () => {
    return this.models[0].getModelPartsList();
  };
  addModel = (model: Model) => {
    this.models.push(model);
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

  loadScene = (scene: Scene) => {
    this.scene = scene;
  };

  getActiveModel = () => {
    return this.models[0];
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
        //Todo Change name to camelCase
        return marker.userData.ForPartId === partId;
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
}
