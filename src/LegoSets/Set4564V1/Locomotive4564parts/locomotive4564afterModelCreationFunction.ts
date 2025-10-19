import { Object3D, Object3DEventMap, Scene } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";
import { moveTrainWorkerMinifig } from "./locomotive4564helperFunctions";

const {
  throwErrorIfElementIsMissing,
  findElementByName,
  findModelRootMarker,
  movePartialModelToCompletedModel,
  rotateMinifigArm,
} = ArrangementFunctionsHelper;

export const locomotive4564afterModelCreationFunction = (
  model?: Object3D<Object3DEventMap>,
  scene?: Scene
): ArraignmentFunctionResult => {
  throwErrorIfElementIsMissing(
    model,
    "Model is missing in completeCargoCrain4552afterModelCreationFunction"
  );

  throwErrorIfElementIsMissing(
    scene,
    "Scene is missing in completeCargoCrain4552afterModelCreationFunction"
  );
  const sceneRootMarker = findElementByName(scene!, "SceneRootMarker");

  const locomotiveEngineTrolley = findModelRootMarker(
    sceneRootMarker!,
    "LocomotiveEngineTrolley4564Model"
  );

  const locomotiveTrolley = findModelRootMarker(
    sceneRootMarker!,
    "LocomotiveTrolley4564Model"
  );

  const locomotiveCabin = findModelRootMarker(
    sceneRootMarker!,
    "LocomotiveCabin4564Model"
  );

  const minifigs = findModelRootMarker(sceneRootMarker!, "Minifigs4564Model");

  const { disconnectMinifig: disconnectTrainWorkerMinifig, minifigTorso } =
    moveTrainWorkerMinifig(minifigs!, model!, "TrainWorkerMinifig");

  rotateMinifigArm(minifigTorso!, "Right", 45, 20, -5);
  rotateMinifigArm(minifigTorso!, "Left", 45, 20, -5);

  disconnectTrainWorkerMinifig();

  const finishTrolleyConnection = movePartialModelToCompletedModel(
    model!,
    locomotiveTrolley!,
    "CompleteModelMarker.001"
  );

  const finishEngineTrolleyConnection = movePartialModelToCompletedModel(
    model!,
    locomotiveEngineTrolley!,
    "CompleteModelMarker.002"
  );

  const finishLocomotiveCabinConnection = movePartialModelToCompletedModel(
    model!,
    locomotiveCabin!,

    "CompleteModelMarker.003"
  );

  moveElementToFloorLevel(model!);

  finishTrolleyConnection();
  finishEngineTrolleyConnection();
  finishLocomotiveCabinConnection();

  return {
    touchedModels: [
      "LocomotiveEngineTrolley4564Model",
      "LocomotiveTrolley4564Model",
      "LocomotiveCabin4564Model",
      "Minifigs4564Model",
    ],
    status: "success",
  };
};
