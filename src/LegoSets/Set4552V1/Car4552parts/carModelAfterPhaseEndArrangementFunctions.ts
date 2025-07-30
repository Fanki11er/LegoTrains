import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";

const {
  findElementConnectedToMarker,
  attachModelToNewParent,
  rotateElementOnZAxis,
} = ArrangementFunctionsHelper;

export const carModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => {
  switch (functionName) {
    case "rotateTileWithTelemetryPanel30degOnZ":
      return rotateTileWithTelemetryPanel30degOnZ(model);
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in carModelAfterPhaseEndArrangementFunction.`
  );
};

const rotateTileWithTelemetryPanel30degOnZ = (
  model: Object3D<Object3DEventMap>
): ArraignmentFunctionResult => {
  const telemetryPanel = findElementConnectedToMarker(model, "ModelMarker.030");

  const tile = findElementConnectedToMarker(model, "ModelMarker.029");
  const parent = attachModelToNewParent(telemetryPanel, tile);

  rotateElementOnZAxis(tile, 30);

  attachModelToNewParent(telemetryPanel, parent);

  return {
    touchedModels: [],
    status: "success",
  };
};
