import { Object3D, Object3DEventMap } from "three";
import { Phase } from "./Phase";
import { TrainInstruction } from "./TrainInstruction";
import { PartInfo } from "../Types/PartInfo";
import { LegoBlock } from "../Types/LegoBlock";
import { ArraignmentFunction } from "../Types/ArrangementFunction";
import { ArraignmentFunctionRegistrationEntry } from "../Types/ModelTypes";

export type MarkersInfo = {
  markersPath: string;
  rootMarkerId: string;
};
export class Model {
  private modelName: string;
  private isFinished: boolean = false;
  private isModelArranged: boolean = false;
  private phases: Phase[] = [];
  private activePhase: Phase | null = null;
  private instruction: TrainInstruction;
  private modelMarkersInfo: MarkersInfo;
  private connectedMarkersIds: string[] = [];
  private arraignmentFunctionRegistrationEntries: ArraignmentFunctionRegistrationEntry[] =
    [];
  private modelArrangementFunction: ArraignmentFunction | undefined;

  constructor(
    modelName: string,
    modelMarkersPath: string,
    instruction: TrainInstruction
  ) {
    this.instruction = instruction;
    this.modelName = modelName;
    this.modelMarkersInfo = {
      markersPath: modelMarkersPath,
      rootMarkerId: `${modelName}_ModelRootMarker`,
    };
  }

  getActivePhase = () => {
    return this.activePhase;
  };

  getIsModelArranged = () => {
    return this.isModelArranged;
  };

  getModelName = () => {
    return this.modelName;
  };

  getModelMarkersPath = () => {
    return this.modelMarkersInfo.markersPath;
  };

  getRootModelMarkerId = () => {
    return this.modelMarkersInfo.rootMarkerId;
  };

  getModelMarkersInfo = () => {
    return this.modelMarkersInfo;
  };

  getIsModelFinished = () => {
    return this.isFinished;
  };

  getPhases = () => {
    return this.phases;
  };

  getModelArrangementFunction = () => {
    return this.modelArrangementFunction;
  };

  setIsModelFinished = (isFinished: boolean) => {
    this.isFinished = isFinished;
  };

  setIsModelArranged = (isModelArranged: boolean) => {
    this.isModelArranged = isModelArranged;
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

  getMarkersForSelectedPart = (partType: string) => {
    const listOfValidSlotsToConnectSelectedPart: Object3D<Object3DEventMap>[] =
      [];
    if (this.activePhase) {
      const listOfPartsNeededInPhase =
        this.activePhase.checkIfPartTypeIsNeededInPhase(partType);

      if (listOfPartsNeededInPhase.length) {
        const markers = this.instruction.getMarkersForActivePhase();

        listOfPartsNeededInPhase.forEach((part) => {
          if (!part.depends.length) {
            const marker = this.findMarkerByPartType(part, markers);

            if (marker) {
              listOfValidSlotsToConnectSelectedPart.push(marker);
            }
          } else {
            for (let i = 0; i < part.depends.length; i++) {
              if (!this.checkIfWasMarkerUsed(part.depends[i])) {
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

  updateNeededPartList = (partType: string) => {
    if (this.activePhase) {
      const partsLeft = this.activePhase.updateNeededPartList(partType);
      if (!partsLeft) {
        this.incrementActivePhase();
        return true;
      }
    }
    return false;
  };

  incrementActivePhase = () => {
    if (this.activePhase) {
      const currentPhaseIndex = this.phases.indexOf(this.activePhase);
      const newPhaseIndex = currentPhaseIndex + 1;
      if (newPhaseIndex < this.phases.length) {
        this.activePhase = this.phases[newPhaseIndex];
      } else {
        this.activePhase = null;
        this.isFinished = true;
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

  findPhaseByNumber = (phaseNumber: number) => {
    return this.phases.find((phase) => {
      return phase.getPhaseNumber() === phaseNumber;
    });
  };

  setActivePhase = (phase: Phase) => {
    this.activePhase = phase;
  };

  registerBlocksAfterConnectArraignmentsFunctionsNames = (
    arraignmentFunctionRegistrationEntries: ArraignmentFunctionRegistrationEntry[]
  ) => {
    this.arraignmentFunctionRegistrationEntries =
      arraignmentFunctionRegistrationEntries;
  };

  addArraignmentFunctionsToMarkers = (model: Object3D<Object3DEventMap>) => {
    this.arraignmentFunctionRegistrationEntries.forEach((entry) => {
      const marker = this.getMarkerByName(entry.markerId, model);

      if (marker) {
        marker.userData.afterConnectionArraignmentFunctionName =
          entry.arraignmentFunctionName;
      }
    });
  };

  registerModelArrangementFunction = (
    modelArrangementFunction: ArraignmentFunction
  ) => {
    this.modelArrangementFunction = modelArrangementFunction;
  };

  addConnectedMarkerIdToArray = (markerId: string) => {
    this.connectedMarkersIds.push(markerId);
  };

  addConnectedMarkersIdToArray = (markersId: string[]) => {
    markersId.forEach((markerId) => {
      this.addConnectedMarkerIdToArray(markerId);
    });
  };

  getConnectedMarkersIds = () => {
    return this.connectedMarkersIds;
  };

  private getMarkerByName = (
    name: string,
    model: Object3D<Object3DEventMap>
  ) => {
    const markerName = name.replace(".", "");
    const marker = model.getObjectByName(markerName);
    return marker;
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

  private checkIfWasMarkerUsed = (markerId: string) => {
    const result = this.connectedMarkersIds.find((id) => {
      return id === markerId;
    });

    return !!result;
  };
}
