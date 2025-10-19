import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4564LocomotiveModelMarkers from "../../../assets/Set_4564_V1/ModelsMarkers/Locomotive4564/Markers.glb";
import { locomotive4564ModelArrangementFunction } from "./locomotive4564ModelArrangementFunction";
import { locomotive4564ModelBlocks } from "./locomotive4564ModelBlocks";
import { locomotive4564afterModelCreationFunction } from "./locomotive4564afterModelCreationFunction";

export const locomotive4564Configuration: ModelConfiguration = {
  modelName: "Locomotive4564Model",
  modelMarkers: set4564LocomotiveModelMarkers,
  modelBlocks: locomotive4564ModelBlocks,
  doNotMoveToTheFloorLevel: true,
  isCollectiveModel: true,
  arrangementFunction: locomotive4564ModelArrangementFunction,
  afterModelCreationFunction: locomotive4564afterModelCreationFunction,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};
