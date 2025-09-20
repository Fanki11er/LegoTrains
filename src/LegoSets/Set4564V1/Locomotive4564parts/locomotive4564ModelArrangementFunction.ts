import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  arrangeMinifigAccessoryRadioWithHandle,
  arrangeTrainWorkerMinifig,
} from "./locomotive4564helperFunctions";

const {
  findModelRootMarker,
  movePartialModelToCompletedModel,
  throwErrorIfElementIsMissing,
} = ArrangementFunctionsHelper;

//Todo: Open Doors
//Todo: Open engine doors
//Todo: Move minifig to cabin

export const locomotive4564ModelArrangementFunction: ModelArraignmentFunction =
  (
    model: Object3D<Object3DEventMap>,
    sceneRootMarker: Object3D<Object3DEventMap>
  ) => {
    throwErrorIfElementIsMissing(
      model,
      "Model is missing in connectCraneCartToCraneCompleteModel"
    );

    throwErrorIfElementIsMissing(
      sceneRootMarker,
      "Scene root marker is missing in connectCraneCartToCraneCompleteModel"
    );

    const locomotiveEngineTrolley = findModelRootMarker(
      sceneRootMarker,
      "LocomotiveEngineTrolley4564Model"
    );

    const locomotiveTrolley = findModelRootMarker(
      sceneRootMarker,
      "LocomotiveTrolley4564Model"
    );

    const locomotiveCabin = findModelRootMarker(
      sceneRootMarker,
      "LocomotiveCabin4564Model"
    );

    const minifigs = findModelRootMarker(sceneRootMarker!, "Minifigs4564Model");

    arrangeTrainWorkerMinifig(minifigs!, sceneRootMarker!);

    arrangeMinifigAccessoryRadioWithHandle(model!, sceneRootMarker!);

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
