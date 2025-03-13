import { Object3D, Object3DEventMap } from "three";
import { convertDegreesToRadians } from "../../../Utilities/utilities";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";

export const steamLocomotive7722ModelArrangementFunction = (
  model: Object3D<Object3DEventMap>
) => {
  openLeftDoor(model);
  ArrangementFunctionsHelper.rotateCoupling(
    model,
    15,
    "ModelMarker.013",
    "ModelMarker.014"
  );
  hideWire(model);
  arrangeMinifig(model);
};

const openLeftDoor = (model: Object3D<Object3DEventMap>) => {
  const door = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.069"
  );
  const doorWindow = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.080"
  );

  if (!door) {
    console.log("Door element not found");
    return;
  }

  if (!doorWindow) {
    console.log("Window element not found");
    return;
  }

  const originalOParent = doorWindow.parent;

  door.attach(doorWindow);

  door.rotateY(convertDegreesToRadians(30));

  if (!originalOParent) {
    console.log("Parent element is missing");
    return;
  }

  originalOParent.attach(doorWindow);
};

const hideWire = (model: Object3D<Object3DEventMap>) => {
  const wire = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.024"
  );

  if (!wire) {
    console.log("Wire element not found");
    return;
  }

  wire.visible = false;
};

const arrangeMinifig = (model: Object3D<Object3DEventMap>) => {
  const minifigHeaps = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.100"
  );
  const minifigTorso = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.101"
  );
  const minifigHead = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.102"
  );
  const minifigHut = ArrangementFunctionsHelper.findElementConnectedToMarker(
    model,
    "ModelMarker.103"
  );
  const scene = model.parent;

  if (!scene) {
    console.log("Scene element not found");
    return;
  }
  const markerForMinifig = scene?.children.find((child) => {
    return child.userData.forModelId === "Minifig.001";
  });

  if (!minifigHeaps) {
    console.log("Minifig heaps element not found");
    return;
  }

  if (!minifigTorso) {
    console.log("Minifig torso element not found");
    return;
  }

  if (!minifigHead) {
    console.log("Minifig head element not found");
    return;
  }

  if (!minifigHut) {
    console.log("Minifig head element not found");
    return;
  }

  if (!markerForMinifig) {
    console.log("Minifig marker element not found");
    return;
  }

  minifigHeaps.attach(minifigTorso);
  minifigHeaps.attach(minifigHead);
  minifigHeaps.attach(minifigHut);

  minifigHeaps.position.copy(markerForMinifig.position);
  minifigHeaps.quaternion.copy(markerForMinifig.quaternion);
  scene.add(minifigHeaps);

  model.attach(minifigHeaps);
  model.attach(minifigTorso);
  model.attach(minifigHead);
  model.attach(minifigHut);

  minifigHead.rotateY(convertDegreesToRadians(-30)); //? Cancel previous rotation
  minifigHut.rotateY(convertDegreesToRadians(-30)); //? Cancel previous rotation

  ArrangementFunctionsHelper.rotateLeg(minifigHeaps, -45, "Left");
  ArrangementFunctionsHelper.rotateLeg(minifigHeaps, 75, "Right"); //? Cancel previous rotation and add new

  ArrangementFunctionsHelper.rotateMinifigArm(minifigTorso, 30, "Right");
};
