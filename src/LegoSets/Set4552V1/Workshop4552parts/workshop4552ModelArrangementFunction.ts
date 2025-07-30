import { Object3D, Object3DEventMap } from "three";
import { convertDegreesToRadians } from "../../../Utilities/utilities";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";

const { findElementConnectedToMarker, throwErrorIfElementIsMissing } =
  ArrangementFunctionsHelper;

export const workshop4552ModelArrangementFunction: ModelArraignmentFunction = (
  model: Object3D<Object3DEventMap>
) => {
  openLeftDoor(model);
  openRightDoor(model);
  rotateSmallAntenna(model);

  return {
    touchedModels: [],
    status: "success",
  };
};

const openLeftDoor = (model: Object3D<Object3DEventMap>) => {
  const door = findElementConnectedToMarker(model, "ModelMarker.030");
  const doorWindow = findElementConnectedToMarker(model, "ModelMarker.031");

  const originalParent = doorWindow.parent;

  door.attach(doorWindow);

  door.rotateY(convertDegreesToRadians(-45));

  throwErrorIfElementIsMissing(originalParent, "Parent element is missing");

  originalParent!.attach(doorWindow);
};

const openRightDoor = (model: Object3D<Object3DEventMap>) => {
  const door = findElementConnectedToMarker(model, "ModelMarker.028");
  const doorWindow = findElementConnectedToMarker(model, "ModelMarker.029");

  const originalParent = doorWindow.parent;

  door.attach(doorWindow);

  door.rotateY(convertDegreesToRadians(75));

  throwErrorIfElementIsMissing(originalParent, "Parent element is missing");

  originalParent!.attach(doorWindow);
};

const rotateSmallAntenna = (model: Object3D<Object3DEventMap>) => {
  const antenna = findElementConnectedToMarker(
    model,
    "ModelMarker.021",
    "Antenna element is missing"
  );

  ArrangementFunctionsHelper.rotateSmallAntenna(antenna, 150);
};
