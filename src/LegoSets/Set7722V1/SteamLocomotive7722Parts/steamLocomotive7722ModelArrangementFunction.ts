import { Object3D, Object3DEventMap } from "three";
import { convertDegreesToRadians } from "../../../Utilities/utilities";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

const {
  findElementConnectedToMarker,
  moveMinifigToNewPosition,
  throwErrorIfElementIsMissing,
  rotateLeg,
  rotateMinifigArm,
  rotateCoupling,
} = ArrangementFunctionsHelper;

export const steamLocomotive7722ModelArrangementFunction = (
  model: Object3D<Object3DEventMap>
) => {
  openLeftDoor(model);
  rotateCoupling(model, 15, "ModelMarker.013", "ModelMarker.014");
  hideWire(model);
  arrangeMinifig(model);

  return [];
};

const openLeftDoor = (model: Object3D<Object3DEventMap>) => {
  const door = findElementConnectedToMarker(model, "ModelMarker.069");
  const doorWindow = findElementConnectedToMarker(model, "ModelMarker.080");

  const originalParent = doorWindow.parent;

  door.attach(doorWindow);

  door.rotateY(convertDegreesToRadians(30));

  throwErrorIfElementIsMissing(originalParent, "Parent element is missing");

  originalParent!.attach(doorWindow);
};

const hideWire = (model: Object3D<Object3DEventMap>) => {
  const wire = findElementConnectedToMarker(
    model,
    "ModelMarker.024",
    "Wire element not found"
  );

  wire.visible = false;
};

const arrangeMinifig = (model: Object3D<Object3DEventMap>) => {
  const minifig = moveMinifigToNewPosition(model, "Minifig.001", {
    minifigHeapsMarkerId: "ModelMarker.100",
    minifigTorsoMarkerId: "ModelMarker.101",
    minifigHeadMarkerId: "ModelMarker.102",
    minifigHutMarkerId: "ModelMarker.103",
  });

  minifig.disconnectMinifig();

  minifig.minifigHead.rotateY(convertDegreesToRadians(-30)); //? Cancel previous rotation
  minifig.minifigHut.rotateY(convertDegreesToRadians(-30)); //? Cancel previous rotation

  rotateLeg(minifig.minifigHeaps, -45, "Left");
  rotateLeg(minifig.minifigHeaps, 75, "Right"); //? Cancel previous rotation and add new

  rotateMinifigArm(minifig.minifigTorso, "Right", 30);
};
