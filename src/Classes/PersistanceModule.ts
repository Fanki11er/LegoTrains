import {
  Euler,
  Matrix4,
  Object3D,
  Object3DEventMap,
  Quaternion,
  Vector3,
} from "three";
import { TrainInstruction } from "./TrainInstruction";
import { PartUserData } from "../Types/PartUserData";

type ObjectPersistanceData = {
  matrix: Matrix4;
  matrixWorld: Matrix4;
  position: Vector3;
  quaternion: Quaternion;
  rotation: Euler;
};
export type ModelMarkerPersistanceData = ObjectPersistanceData & {
  name: string;
};
export type PartPersistanceData = ObjectPersistanceData & {
  userData: PartUserData;
};

export type ModelPersistanceData = {
  modelName: string;
  markersData: ModelMarkerPersistanceData;
  usedPartsData: PartPersistanceData[];
  connectedMarkersIds: string[];
  activePhaseId: number;
  //!! Remove needed parts in Phases
};

export class PersistanceModule {
  private trainInstruction: TrainInstruction;

  constructor(trainInstruction: TrainInstruction) {
    this.trainInstruction = trainInstruction;
  }

  prepareDataToSaveAfterPhaseEnd = (): ModelPersistanceData | undefined => {
    const modelName = this.trainInstruction.getActiveModelName();
    if (!modelName) {
      return undefined;
    }

    const markers = this.trainInstruction.getActiveModelMarkers();
    if (!markers) {
      return undefined;
    }
    const activePhaseId = this.trainInstruction.getActivePhaseId();

    if (!activePhaseId) {
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
    };
  };

  private prepareModelMarkerDataToSave = (
    modelMarkers: Object3D<Object3DEventMap>
  ): ModelMarkerPersistanceData => {
    return {
      name: modelMarkers.name,
      matrix: modelMarkers.matrix,
      matrixWorld: modelMarkers.matrixWorld,
      position: modelMarkers.position,
      quaternion: modelMarkers.quaternion,
      rotation: modelMarkers.rotation,
    };
  };

  private prepareModelPartsDataToSave = (
    modelMarkers: Object3D<Object3DEventMap>
  ) => {
    const parts = modelMarkers.children.filter((child) => {
      return child.type === "Mesh";
    });

    const partsPreparedToSave: PartPersistanceData[] = parts.map((part) => {
      const data = part.userData as PartUserData;
      data.modelId = modelMarkers.name;
      return {
        matrix: part.matrix,
        matrixWorld: part.matrixWorld,
        position: part.position,
        quaternion: part.quaternion,
        rotation: part.rotation,
        userData: data,
      };
    });

    return partsPreparedToSave;
  };
}
