import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { rotateHingeTrainGate } from "./helperFunctions";

export const carContainerYellow4564ModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => {
  switch (functionName) {
    case "closeCarContainerHingeTrainGates":
      return closeCarContainerHingeTrainGates(model);
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in carModelAfterPhaseEndArrangementFunction.`
  );
};

const closeCarContainerHingeTrainGates = (
  model: Object3D<Object3DEventMap>
): ArraignmentFunctionResult => {
  rotateHingeTrainGate(model, "ModelMarker.005", "Z", -90);
  rotateHingeTrainGate(model, "ModelMarker.006", "Z", -90);
  rotateHingeTrainGate(model, "ModelMarker.007", "Z", -90);
  rotateHingeTrainGate(model, "ModelMarker.008", "Z", -90);
  rotateHingeTrainGate(model, "ModelMarker.012", "Z", 90);

  return {
    touchedModels: [],
    status: "success",
  };
};
