import { Object3D, Object3DEventMap } from "three";
import { TrainInstruction } from "./TrainInstruction";
import { PartUserData } from "../Types/PartUserData";
import { Model } from "./Model";

type ObjectPersistenceData = {
  position: number[];
  rotation: number[];
};

export type ModelMarkerPersistenceData = ObjectPersistenceData & {
  name: string;
};
export type PartPersistenceData = ObjectPersistenceData & {
  userData: PartUserData;
};

export type ModelPersistenceData = {
  modelName: string;
  markersData: ModelMarkerPersistenceData;
  usedPartsData: PartPersistenceData[];
  connectedMarkersIds: string[];
  activePhaseId: number | null | undefined;
  isModelFinished: boolean;
  isModelArranged: boolean;
};

export type ExistingDataInfo = string;

export type SetPersistenceData = {
  setName: string;
  modelsList: string[];
  allModelsNumber: number;
  finishedModelsNumber: number;
};

export type User = {
  userSetsList: ExistingDataInfo[];
};

export class PersistenceModule {
  private trainInstruction: TrainInstruction;

  constructor(trainInstruction: TrainInstruction) {
    this.trainInstruction = trainInstruction;
  }

  prepareDataToSaveAfterModelArrangement = (
    model: Model
  ): ModelPersistenceData | undefined => {
    const modelName = model.getModelName();
    const isModelFinished = model.getIsModelFinished();
    const isModelArranged = model.getIsModelArranged();

    if (!modelName || isModelFinished === null || isModelArranged === null) {
      return undefined;
    }

    const markers = this.trainInstruction.getModelMarkers(model);
    if (!markers) {
      return undefined;
    }

    const activePhaseId = model.getActivePhase()?.getPhaseNumber();
    if (!activePhaseId && !isModelFinished) {
      return undefined;
    }

    const preparedMarkerData = this.prepareModelMarkerDataToSave(markers);
    const partsPreparedToSave = this.prepareModelPartsDataToSave(markers);

    const connectedMarkersIds = this.trainInstruction.getConnectedMarkersIds();

    return {
      modelName: modelName,
      markersData: preparedMarkerData,
      usedPartsData: partsPreparedToSave,
      connectedMarkersIds: connectedMarkersIds,
      activePhaseId: activePhaseId,
      isModelFinished: isModelFinished,
      isModelArranged: isModelArranged,
    };
  };

  prepareDataToSaveAfterPhaseEnd = (): ModelPersistenceData | undefined => {
    const modelName = this.trainInstruction.getActiveModelName();
    const isModelFinished = this.trainInstruction.getIsActiveModelFinished();
    const isModelArranged = this.trainInstruction.getIsActiveModelArranged();

    if (!modelName || isModelFinished === null || isModelArranged === null) {
      return undefined;
    }

    const markers = this.trainInstruction.getActiveModelMarkers();
    if (!markers) {
      return undefined;
    }

    const activePhaseId = this.trainInstruction.getActivePhaseId();
    if (!activePhaseId && !isModelFinished) {
      return undefined;
    }

    const preparedMarkerData = this.prepareModelMarkerDataToSave(markers);
    const partsPreparedToSave = this.prepareModelPartsDataToSave(markers);

    const connectedMarkersIds = this.trainInstruction.getConnectedMarkersIds();

    return {
      modelName: modelName,
      markersData: preparedMarkerData,
      usedPartsData: partsPreparedToSave,
      connectedMarkersIds: connectedMarkersIds,
      activePhaseId: activePhaseId,
      isModelFinished: isModelFinished,
      isModelArranged: isModelArranged,
    };
  };

  private prepareModelMarkerDataToSave = (
    modelMarkers: Object3D<Object3DEventMap>
  ): ModelMarkerPersistenceData => {
    const rotation: number[] = [];
    const position: number[] = [];
    modelMarkers.rotation.toArray(rotation);
    modelMarkers.position.toArray(position);

    return {
      name: modelMarkers.name,
      position,
      rotation,
    };
  };

  private prepareModelPartsDataToSave = (
    modelMarkers: Object3D<Object3DEventMap>
  ) => {
    const parts = modelMarkers.children.filter((child) => {
      return child.type === "Mesh" || child.type === "Group";
    });

    const partsPreparedToSave: PartPersistenceData[] = parts.map((part) => {
      const data = part.userData as PartUserData;
      data.modelId = modelMarkers.name;
      const rotation: number[] = [];
      const position: number[] = [];
      part.rotation.toArray(rotation);
      part.position.toArray(position);
      return {
        position,
        rotation,
        userData: data,
      };
    });

    return partsPreparedToSave;
  };
}
