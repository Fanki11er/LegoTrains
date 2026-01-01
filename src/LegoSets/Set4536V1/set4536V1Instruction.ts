import { TrainInstruction } from "../../Classes/TrainInstruction";

import set4536SceneMarkers from "../../assets/Set_4536_V1/SceneMarkers/Scene_Markers.glb";
import { set4536blueHopperConfiguration } from "./BlueHopper4536parts/set4536BlueHopperConfiguration";
import { set4536platformConfiguration } from "./Platform4536parts/set4536PlatformConfiguration";

export const createSet4536V1Instruction = () => {
  const set4536Instruction = new TrainInstruction(
    "Set_4536_V1",
    set4536SceneMarkers
  );

  //?? Platform
  set4536Instruction.createModel(set4536platformConfiguration);

  //?? Blue Hopper
  set4536Instruction.createModel(set4536blueHopperConfiguration);

  return set4536Instruction;
};
