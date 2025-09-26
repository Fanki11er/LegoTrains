import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";
import {
  arrangeLocomotiveWorkerMinifig,
  arrangeMinifigAccessoryRadioWithHandle,
  arrangeTrainWorkerMinifig,
  openCabinDoor,
  openEngineDoor,
} from "./locomotive4564helperFunctions";

const {
  findModelRootMarker,
  movePartialModelToCompletedModel,
  throwErrorIfElementIsMissing,
  rotateElementOnYAxis,
  rotateCoupling,
} = ArrangementFunctionsHelper;

//Todo: Rotate couplings

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

    rotateElementOnYAxis(locomotiveEngineTrolley!, -9);
    rotateElementOnYAxis(locomotiveTrolley!, 8);

    openEngineDoor(locomotiveCabin!);
    openCabinDoor(locomotiveCabin!);

    arrangeLocomotiveWorkerMinifig(minifigs!, sceneRootMarker!);

    rotateCoupling(
      locomotiveTrolley!,
      14,
      "ModelMarker.022",
      "ModelMarker.023"
    );

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
