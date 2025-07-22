import { Object3D, Object3DEventMap } from "three";
import { ArrangementFunctionsHelper } from "../../../Classes/ArrangementFunctionsHelper";
import { ModelArraignmentFunction } from "../../../Types/ArrangementFunction";

const {
  completePalette,
  completeBarrel,
  attachModelToNewParent,
  moveElementToNewNestPosition,
  findMarkerById,
  throwErrorIfElementIsMissing,
} = ArrangementFunctionsHelper;

export const completeCargoCrain4552ModelArrangementFunction: ModelArraignmentFunction =
  (model: Object3D<Object3DEventMap>) => {
    return {
      touchedModels: [],
      status: "success",
    };
  };

// todo: open cart supports
// todo: move supports from palette
// todo: rotate cart blockades
// todo: move minifig to crane cabin
// todo: rotate minifig arms
// todo: move radio to new position
// todo: move crane inner arm to position
// todo: lever up crane boom
// todo rotate crane boom supports
// todo change winch phase
// todo rotate crane cabin
// todo move hook to new position
// todo move car to new position
// todo move minifig construction helmet to new position
// todo move minifig helmet to new position
// todo rotate helmet glass
// todo arrange minifig
// todo change torch phase
// todo move hammer to new position
// todo move wrench to new position
