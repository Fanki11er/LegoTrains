import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";

const {
  rotateElementOnZAxis,
  findElementConnectedToMarker,
  findModelPartByName,
} = ArrangementFunctionsHelper;

export const blueHopper4536ModelArrangementFunction: ModelArraignmentFunction =
  (model: Object3D<Object3DEventMap>) => {
    rotateAntennaArm(model);

    return {
      touchedModels: [],
      status: "success",
    };
  };

const rotateAntennaArm = (model: Object3D<Object3DEventMap>) => {
  const antenna = findElementConnectedToMarker(model, "ModelMarker.040");

  const antennaArm = findModelPartByName(antenna, "Antenna_Small_Lever_Handle");

  rotateElementOnZAxis(antennaArm, -30);
};
