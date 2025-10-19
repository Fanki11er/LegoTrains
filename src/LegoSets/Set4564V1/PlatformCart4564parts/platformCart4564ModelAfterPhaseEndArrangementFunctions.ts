import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

const { findElementConnectedToMarker, rotateElementOnZAxis } =
  ArrangementFunctionsHelper;

export const platformCart4564ModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => {
  switch (functionName) {
    case "closeHingeTrainGate":
      return closeHingeTrainGate(model, "ModelMarker.030");
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in loadingRamp4564ModelAfterPhaseEndArrangementFunction.`
  );
};

const closeHingeTrainGate = (
  model: Object3D<Object3DEventMap>,
  hingeTrainGateMarkerId: string
): ArraignmentFunctionResult => {
  const hingeTrainGate = findElementConnectedToMarker(
    model,
    hingeTrainGateMarkerId
  );

  rotateElementOnZAxis(hingeTrainGate, 90);

  return {
    touchedModels: [],
    status: "success",
  };
};
