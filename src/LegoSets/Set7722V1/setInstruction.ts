import { TrainInstruction } from "../../Classes/TrainInstruction";
// @ts-expect-error Not a type
import set7722SceneMarkers from "../../assets/3D/Set_7722_V1/SceneMarkers/Scene_Markers.glb";
// @ts-expect-error Not a type
import set7722LocomotiveModelMarkers from "../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";
// @ts-expect-error Not a type
import set7722BatteryCarModelMarkers from "../../assets/3D/ModelsMarkers/BatteryCar7722/Markers.glb";
// @ts-expect-error Not a type
import set7722PlatformCarModelMarkers from "../../assets/3D/ModelsMarkers/PlatformCar7722/Markers.glb";
// @ts-expect-error Not a type
import set7722PostCarModelMarkers from "../../assets/3D/ModelsMarkers/PostCar7722/Markers.glb";
// @ts-expect-error Not a type
import set7722LoadingRampModelMarkers from "../../assets/3D/ModelsMarkers/LoadingRamp7722/Markers.glb";
// @ts-expect-error Not a type
import set7722ForkliftModelMarkers from "../../assets/3D/ModelsMarkers/Forklift7722/Markers.glb";
// @ts-expect-error Not a type
import set7722ForkliftTrailerModelMarkers from "../../assets/3D/ModelsMarkers/ForkliftTrailer7722/Markers.glb";

import { Model } from "../../Classes/Model";
import { SetLegoBlocks } from "./SteamLocomotive7722Parts/SetLegoBlockTypes";
import { addForModelPhaseBlocks } from "../../Utilities/utilities";
import { steamLocomotive7722LocomotiveModelBlocks } from "./steamLocomotive7722";
import { steamLocomotive7722BatteryCarModelBlocks } from "./batteryCar7722";
import { steamLocomotive7722PlatformCarModelBlocks } from "./platformCar7722";
import { steamLocomotive7722PostCarModelBlocks } from "./postCar7722";
import { steamLocomotive7722LoadingRampModelBlocks } from "./loadingRamp7722";
import { steamLocomotive7722ForkliftModelBlocks } from "./forklift7722";
import { steamLocomotive7722ForkliftTrailerModelBlocks } from "./forkliftTrailer7722";
import { steamLocomotive7722ModelArrangementFunction } from "./SteamLocomotive7722Parts/steamLocomotive7722ModelArrangementFunction";
import { batteryCar7722ModelArrangementFunction } from "./BatteryCar7722Parts/batteryCarModelArrangementFunction";
import { platformCar7722ModelArrangementFunction } from "./PlatformCar7722Parts/platformCar7722ModelArrangementFunction";
import { postCar7722ModelArrangementFunction } from "./PostCar7722Parts/postCar7722ModelArrangementFunction";

export const createInstruction = () => {
  const set7722Instruction = new TrainInstruction(set7722SceneMarkers);

  const steamLocomotive7722Model = new Model(
    "SteamLocomotive7722Model",
    set7722LocomotiveModelMarkers,
    set7722Instruction
  );

  steamLocomotive7722Model.registerBlocksAfterConnectArraignmentsFunctionsNames(
    [
      {
        markerId: "ModelMarker.100",
        arraignmentFunctionName: "rightLeg30Forward",
      },
      {
        markerId: "ModelMarker.102",
        arraignmentFunctionName: "rotateHead30Left",
      },
      {
        markerId: "ModelMarker.103",
        arraignmentFunctionName: "rotateHat30Left",
      },
    ]
  );

  steamLocomotive7722Model.registerModelArrangementFunction(
    steamLocomotive7722ModelArrangementFunction
  );

  const batteryCar7722Model = new Model(
    "BatteryCar7722Model",
    set7722BatteryCarModelMarkers,
    set7722Instruction
  );

  batteryCar7722Model.registerModelArrangementFunction(
    batteryCar7722ModelArrangementFunction
  );

  const platformCar7722Model = new Model(
    "PlatformCar7722Model",
    set7722PlatformCarModelMarkers,
    set7722Instruction
  );

  platformCar7722Model.registerModelArrangementFunction(
    platformCar7722ModelArrangementFunction
  );

  const postCar7722Model = new Model(
    "PostCar7722Model",
    set7722PostCarModelMarkers,
    set7722Instruction
  );

  postCar7722Model.registerModelArrangementFunction(
    postCar7722ModelArrangementFunction
  );

  const loadingRamp7722Model = new Model(
    "loadingRamp7722Model",
    set7722LoadingRampModelMarkers,
    set7722Instruction
  );

  const forklift7722Model = new Model(
    "forklift7722Model",
    set7722ForkliftModelMarkers,
    set7722Instruction
  );

  const forkliftTrailer7722Model = new Model(
    "forkliftTrailer7722Model",
    set7722ForkliftTrailerModelMarkers,
    set7722Instruction
  );

  const set7722LegoBlocks = new SetLegoBlocks(set7722Instruction);

  set7722Instruction.addModel(steamLocomotive7722Model);
  set7722Instruction.addModel(batteryCar7722Model);
  set7722Instruction.addModel(platformCar7722Model);
  set7722Instruction.addModel(postCar7722Model);
  set7722Instruction.addModel(loadingRamp7722Model);
  set7722Instruction.addModel(forklift7722Model);
  set7722Instruction.addModel(forkliftTrailer7722Model);

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "SteamLocomotive7722Model",
    steamLocomotive7722LocomotiveModelBlocks
  );

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "BatteryCar7722Model",
    steamLocomotive7722BatteryCarModelBlocks
  );

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "PlatformCar7722Model",
    steamLocomotive7722PlatformCarModelBlocks
  );

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "PostCar7722Model",
    steamLocomotive7722PostCarModelBlocks
  );

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "loadingRamp7722Model",
    steamLocomotive7722LoadingRampModelBlocks
  );

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "forklift7722Model",
    steamLocomotive7722ForkliftModelBlocks
  );

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "forkliftTrailer7722Model",
    steamLocomotive7722ForkliftTrailerModelBlocks
  );

  set7722Instruction.addSetLegoBlocks(set7722LegoBlocks);

  return set7722Instruction;
};
