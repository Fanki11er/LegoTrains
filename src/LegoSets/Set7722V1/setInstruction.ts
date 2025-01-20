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
import { Model } from "../../Classes/Model";
import { SetLegoBlocks } from "./SteamLocomotive7722Parts/SetLegoBlockTypes";
import { addForModelPhaseBlocks } from "../../Utilities/utilities";
import { steamLocomotive7722LocomotiveModelBlocks } from "./steamLocomotive7722";
import { steamLocomotive7722BatteryCarModelBlocks } from "./batteryCar7722";
import { steamLocomotive7722PlatformCarModelBlocks } from "./platformCar7722";
import { steamLocomotive7722PostCarModelBlocks } from "./postCar7722";
import { steamLocomotive7722LoadingRampModelBlocks } from "./loadingRamp7722";

export const createInstruction = () => {
  const set7722Instruction = new TrainInstruction(set7722SceneMarkers);

  const steamLocomotive7722Model = new Model(
    "SteamLocomotive7722Model",
    set7722LocomotiveModelMarkers,
    set7722Instruction
  );

  const batteryCar7722Model = new Model(
    "BatteryCar7722Model",
    set7722BatteryCarModelMarkers,
    set7722Instruction
  );

  const platformCar7722Model = new Model(
    "PlatformCar7722Model",
    set7722PlatformCarModelMarkers,
    set7722Instruction
  );

  const postCar7722Model = new Model(
    "PostCar7722Model",
    set7722PostCarModelMarkers,
    set7722Instruction
  );

  const loadingRamp7722Model = new Model(
    "loadingRamp7722Model",
    //!!
    set7722LoadingRampModelMarkers,
    set7722Instruction
  );

  const set7722LegoBlocks = new SetLegoBlocks(set7722Instruction);

  // set7722Instruction.addModel(steamLocomotive7722Model);
  // set7722Instruction.addModel(batteryCar7722Model);
  // set7722Instruction.addModel(platformCar7722Model);
  // set7722Instruction.addModel(postCar7722Model);
  set7722Instruction.addModel(loadingRamp7722Model);

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

  set7722Instruction.addSetLegoBlocks(set7722LegoBlocks);

  return set7722Instruction;
};
