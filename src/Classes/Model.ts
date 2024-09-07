import { Object3D, Object3DEventMap } from "three";
import { Phase } from "./Phase";
import { TrainInstruction } from "./TrainInstruction";
import { PartInfo } from "../Types/PartInfo";
import { LegoBlock } from "../Types/LegoBlock";

export class Model {
  private modelName: string;
  private phases: Phase[] = [];
  private activePhase: Phase | null = null;
  private instruction: TrainInstruction;
  private modelMarkersPath: string | null = null;

  constructor(modelName: string, instruction: TrainInstruction) {
    this.instruction = instruction;
    this.modelName = modelName;
  }
  getActivePhase = () => {
    return this.activePhase;
  };

  getModelName = () => {
    return this.modelName;
  };

  getModelMarkersPath = () => {
    if (!this.modelMarkersPath) {
      console.error("Model markers missed");
    }
    return this.modelMarkersPath;
  };

  addPhase = (phaseNumber: number, legoBlocks: LegoBlock[]) => {
    const phase = this.phases.find((phase) => {
      return phaseNumber === phase.getPhaseNumber();
    });

    const partsInfo = this.mapBlockToPartsInfo(legoBlocks);

    if (phase) {
      phase.addPartsToPhase(partsInfo);
    } else {
      this.phases.push(new Phase(phaseNumber, partsInfo));
    }
    if (!this.activePhase) {
      this.activePhase = this.findFirstPhase();
    }
  };

  addModelMarkersPath = (path: string) => {
    this.modelMarkersPath = path;
  };

  private mapBlockToPartsInfo = (legoBlocks: LegoBlock[]) => {
    return legoBlocks.map((block) => {
      return {
        partType: block.partType,
        slotId: block.slotId,
        depends: block.depends,
      };
    });
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

  getMarkersForSelectedPart = (partType: string) => {
    const listOfValidSlotsToConnectSelectedPart: Object3D<Object3DEventMap>[] =
      [];
    if (this.activePhase) {
      const listOfPartsNeededInPhase =
        this.activePhase.checkIfPartTypeIsNeededInPhase(partType);

      if (listOfPartsNeededInPhase.length) {
        const markers = this.instruction.getMarkers();

        listOfPartsNeededInPhase.forEach((part) => {
          if (!part.depends.length) {
            const marker = this.findMarkerByPartType(part, markers);

            if (marker) {
              listOfValidSlotsToConnectSelectedPart.push(marker);
            }
          } else {
            for (let i = 0; i < part.depends.length; i++) {
              if (
                !this.instruction.checkIfMarkerWasMarkerUsed(part.depends[i])
              ) {
                return;
              }
            }
            const marker = this.findMarkerByPartType(part, markers);

            if (marker) {
              listOfValidSlotsToConnectSelectedPart.push(marker);
            }
          }
        });
      }
    }
    return listOfValidSlotsToConnectSelectedPart;
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

  findMarkerByPartType = (
    part: PartInfo,
    markers: Object3D<Object3DEventMap>[]
  ) => {
    return markers.find((marker) => {
      return marker.userData.name === part.slotId;
    });
  };
}
