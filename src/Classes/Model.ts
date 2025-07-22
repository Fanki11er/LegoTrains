import { Object3D, Object3DEventMap, Scene } from "three";
import { Phase } from "./Phase";
import { TrainInstruction } from "./TrainInstruction";
import { PartInfo } from "../Types/PartInfo";
import { LegoBlock } from "../Types/LegoBlock";
import {
  AfterModelCreationFunction,
  AfterPhaseEndArraignmentFunction,
  ModelArraignmentFunction,
} from "../Types/ArrangementFunction";
import {
  AfterPhaseEndArraignmentFunctionRegistrationEntry,
  ArraignmentFunctionRegistrationEntry,
} from "../Types/ModelTypes";

export type MarkersInfo = {
  markersPath: string;
  rootMarkerId: string;
};
export class Model {
  private modelName: string;
  private isFinished: boolean = false;
  private isModelArranged: boolean = false;
  private isPartialModel: boolean = false;
  private completeModelId: string;
  private isArrangedAfterCreation: boolean = false;
  private phases: Phase[] = [];
  private activePhase: Phase | null = null;
  private previousPhaseId: number = 0;
  private instruction: TrainInstruction;
  private modelMarkersInfo: MarkersInfo;
  private connectedMarkersIds: string[] = [];
  private doNotMoveToTheFloorLevel: boolean;
  private arraignmentFunctionRegistrationEntries: ArraignmentFunctionRegistrationEntry[] =
    [];
  private afterPhaseEndArraignmentFunctionsNames: AfterPhaseEndArraignmentFunctionRegistrationEntry[] =
    [];
  private modelArrangementFunction: ModelArraignmentFunction | undefined;
  private afterModelCreationFunction: AfterModelCreationFunction | undefined;
  private afterPhaseEndArraignmentFunction:
    | AfterPhaseEndArraignmentFunction
    | undefined;

  constructor(
    modelName: string,
    modelMarkersPath: string,
    instruction: TrainInstruction,
    isPartialModel: boolean = false,
    doNotMoveToTheFloorLevel: boolean = false,
    completeModelId: string = ""
  ) {
    this.instruction = instruction;
    this.modelName = modelName;
    this.isPartialModel = isPartialModel;
    this.completeModelId = completeModelId;
    this.doNotMoveToTheFloorLevel = doNotMoveToTheFloorLevel;
    this.modelMarkersInfo = {
      markersPath: modelMarkersPath,
      rootMarkerId: `${modelName}_ModelRootMarker`,
    };
  }

  checkIfPartialModelParentIsCompleted = (): boolean => {
    const model = this.instruction.getModels().find((model) => {
      return model.getModelName() === this.completeModelId;
    });
    return model ? model.getIsModelFinished() : false;
  };

  getDoNotMoveToTheFloorLevel = () => {
    return this.doNotMoveToTheFloorLevel;
  };

  getActivePhase = () => {
    return this.activePhase;
  };

  getIsModelArranged = () => {
    return this.isModelArranged;
  };

  getIsPartialModel = () => {
    return this.isPartialModel;
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

  getIsArrangedAfterCreation = () => {
    return this.isArrangedAfterCreation;
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

  getAfterModelCreationFunction = () => {
    return this.afterModelCreationFunction;
  };

  setIsModelFinished = (isFinished: boolean) => {
    this.isFinished = isFinished;
  };

  setIsModelArranged = (isModelArranged: boolean) => {
    this.isModelArranged = isModelArranged;
  };

  setIsArrangedAfterCreation = (isArrangedAfterCreation: boolean) => {
    this.isArrangedAfterCreation = isArrangedAfterCreation;
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
      this.previousPhaseId = this.activePhase.getPhaseNumber();
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

  registerAfterPhaseEndArraignmentFunctionsNames = (
    afterPhaseEndArraignmentFunctionsNames: AfterPhaseEndArraignmentFunctionRegistrationEntry[]
  ) => {
    this.afterPhaseEndArraignmentFunctionsNames =
      afterPhaseEndArraignmentFunctionsNames;
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
    modelArrangementFunction: ModelArraignmentFunction
  ) => {
    this.modelArrangementFunction = modelArrangementFunction;
  };

  registerAfterModelCreationFunction = (
    afterModelCreationFunction: AfterModelCreationFunction
  ) => {
    this.afterModelCreationFunction = afterModelCreationFunction;
  };

  registerAfterPhaseEndArraignmentFunction = (
    afterPhaseEndArraignmentFunction: AfterPhaseEndArraignmentFunction
  ) => {
    this.afterPhaseEndArraignmentFunction = afterPhaseEndArraignmentFunction;
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

  partsArrangeAfterPhaseEnd = (
    model: Object3D<Object3DEventMap>,
    scene: Scene
  ) => {
    const touchedModels: string[] = [];

    const areAfterPhaseEndArraignmentFunctionsRegistered =
      this.afterPhaseEndArraignmentFunctionsNames.filter((entry) => {
        return entry.phaseId === this.previousPhaseId;
      });
    if (
      this.afterPhaseEndArraignmentFunction &&
      this.previousPhaseId &&
      areAfterPhaseEndArraignmentFunctionsRegistered.length
    ) {
      areAfterPhaseEndArraignmentFunctionsRegistered.forEach((entry) => {
        const result = this.afterPhaseEndArraignmentFunction!(
          model,
          this.previousPhaseId,
          entry.arraignmentFunctionName,
          scene
        );
        if (result.status === "error") {
          console.error(
            `Error in after phase end arraignment function: ${entry.arraignmentFunctionName}`
          );
          return;
        }
        result.touchedModels.forEach((modelName) => {
          if (!touchedModels.includes(modelName)) {
            touchedModels.push(modelName);
          }
        });
      });
    }
    return {
      touchedModels,
      status: "success",
    };
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
