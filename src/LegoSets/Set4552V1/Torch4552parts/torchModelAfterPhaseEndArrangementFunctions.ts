import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";

const {
  changeHoseNozzlePhase,
  moveElementToNewNestPosition,
  findModelPartByName,
} = ArrangementFunctionsHelper;

export const torchModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => {
  switch (functionName) {
    case "arrangeHoseNozzlePhase":
      return moveHoseNozzleToNewPosition(model, phaseId);
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in torchModelAfterPhaseEndArrangementFunction.`
  );
};

const moveHoseNozzleToNewPosition = (
  model: Object3D<Object3DEventMap>,
  phaseId: number
): ArraignmentFunctionResult => {
  switch (phaseId) {
    case 6: {
      const helperMarker = findModelPartByName(model, "ModelHelperMarker001");
      const nozzle = findModelPartByName(model, "194cx1");

      changeHoseNozzlePhase(model);
      moveElementToNewNestPosition(nozzle, helperMarker);

      return {
        status: "success",
        touchedModels: [],
      };
    }

    case 8: {
      const helperMarker = findModelPartByName(model, "ModelHelperMarker002");
      const nozzle = findModelPartByName(model, "194cx1");

      changeHoseNozzlePhase(model);
      moveElementToNewNestPosition(nozzle, helperMarker);

      return {
        status: "success",
        touchedModels: [],
      };
    }
    default:
      return {
        status: "success",
        touchedModels: [],
      };
  }
};
