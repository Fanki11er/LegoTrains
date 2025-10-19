import { TrainInstruction } from "../../Classes/TrainInstruction";
import set7722SceneMarkers from "../../assets/Set_7722_V1/SceneMarkers/Scene_Markers.glb";

import { steamLocomotive7722Configuration } from "./SteamLocomotive7722Parts/steamLocomotive7722Configuration";
import { batteryCar7722Configuration } from "./BatteryCar7722Parts/batteryCar7722Configuration";
import { platformCar7722Configuration } from "./PlatformCar7722Parts/platformCar7722Configuration";
import { postCar7722Configuration } from "./PostCar7722Parts/postCar7722Configuration";
import { loadingRamp7722Configuration } from "./LoadingRamp7722Parts/loadingRamp7722Configuration";
import { forklift7722Configuration } from "./Forklift7722parts/forklift7722Configuration";
import { forkliftTrailer7722Configuration } from "./ForkliftTrailer7722Parts/forkliftTrailer7722Configuration";

export const createSet7722V1Instruction = () => {
  const set7722Instruction = new TrainInstruction(
    "Set_7722_V1",
    set7722SceneMarkers
  );

  //?? Steam Locomotive
  set7722Instruction.createModel(steamLocomotive7722Configuration);

  //?? Battery Car
  set7722Instruction.createModel(batteryCar7722Configuration);

  //?? Platform Car
  set7722Instruction.createModel(platformCar7722Configuration);

  //?? Post Car
  set7722Instruction.createModel(postCar7722Configuration);

  //?? Loading Ramp
  set7722Instruction.createModel(loadingRamp7722Configuration);

  //?? Forklift
  set7722Instruction.createModel(forklift7722Configuration);

  //?? Forklift Trailer
  set7722Instruction.createModel(forkliftTrailer7722Configuration);

  return set7722Instruction;
};
