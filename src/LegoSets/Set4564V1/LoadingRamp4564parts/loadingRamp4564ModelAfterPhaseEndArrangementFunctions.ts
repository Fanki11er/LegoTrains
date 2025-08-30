import { Object3D, Object3DEventMap } from "three/src/core/Object3D.js";
import { ArraignmentFunctionResult } from "../../../Types/ArrangementFunction";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

const {
  findElementConnectedToMarker,
  attachModelToNewParent,
  rotateElementOnXAxis,
} = ArrangementFunctionsHelper;

type LowerTheRampElementsIds = {
  hingeTopBrickLeftMarkerId: string;
  hingeTopBrickRightMarkerId: string;
  rampMarkerId: string;
};

export const loadingRamp4564ModelAfterPhaseEndArrangementFunction = (
  model: Object3D<Object3DEventMap>,
  phaseId: number,
  functionName: string
) => {
  switch (functionName) {
    case "lowerTheRamp":
      return lowerTheRamp(model, {
        hingeTopBrickLeftMarkerId: "ModelMarker.015",
        hingeTopBrickRightMarkerId: "ModelMarker.016",
        rampMarkerId: "ModelMarker.023",
      });
  }

  throw new Error(
    `Function ${functionName} is not registered for phase ${phaseId} in loadingRamp4564ModelAfterPhaseEndArrangementFunction.`
  );
};

const lowerTheRamp = (
  model: Object3D<Object3DEventMap>,
  {
    hingeTopBrickLeftMarkerId,
    hingeTopBrickRightMarkerId,
    rampMarkerId,
  }: LowerTheRampElementsIds
): ArraignmentFunctionResult => {
  const hingeTopBrickLeft = findElementConnectedToMarker(
    model,
    hingeTopBrickLeftMarkerId
  );
  const hingeTopBrickRight = findElementConnectedToMarker(
    model,
    hingeTopBrickRightMarkerId
  );
  const ramp = findElementConnectedToMarker(model, rampMarkerId);

  attachModelToNewParent(ramp, hingeTopBrickLeft);
  rotateElementOnXAxis(hingeTopBrickLeft, -14);
  rotateElementOnXAxis(hingeTopBrickRight, -14);

  attachModelToNewParent(ramp, model);

  return {
    touchedModels: [],
    status: "success",
  };
};
