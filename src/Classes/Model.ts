import { Phase } from "./Phase";
import { TrainInstruction } from "./TrainInstruction";

export class Model {
  private phases: Phase[] = [];
  private activePhase: Phase | null = null;
  private instruction: TrainInstruction;
  private modelMarkersPath: string | null = null;

  constructor(instruction: TrainInstruction) {
    this.instruction = instruction;
  }
  getActivePhase = () => {
    return this.activePhase;
  };

  getModelMarkersPath = () => {
    if (!this.modelMarkersPath) {
      console.error("Model markers missed");
    }
    return this.modelMarkersPath;
  };

  addPhases = (phasesList: Phase[]) => {
    this.phases = phasesList;
    if (!this.activePhase) {
      this.activePhase = this.findFirstPhase();
    }
  };

  addModelMarkersPath = (path: string) => {
    this.modelMarkersPath = path;
  };

  getModelPartsList = () => {
    return this.phases
      .map((phase) => {
        return phase.getPhasePartsList();
      })
      .flat();
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

  updateNeededPartList = (partId: string) => {
    if (this.activePhase) {
      const partsLeft = this.activePhase.updateNeededPartList(partId);
      if (!partsLeft) {
        this.incrementActivePhase();
      }
    }
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
