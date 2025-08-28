import { TrainInstruction } from "../../Classes/TrainInstruction";

import set4564SceneMarkers from "../../assets/Set_4564_V1/SceneMarkers/Scene_Markers.glb";
import { set4564carContainerRedConfiguration } from "./CarContainerRed4564parts/set4564carContainerRedConfiguration";
import { set4564carContainerYellowConfiguration } from "./CarContainerYellow4564parts/set4564carContainerYellowConfiguration";
import { set4564minifigsConfiguration } from "./Minifigs4564parts/set4564minifigsConfiguration";
import { set4564trolleyConfiguration } from "./Trolley4564parts/set4564trolleyConfiguration";
import { set4564truckConfiguration } from "./Truck4564parts/set4564truckConfiguration";

export const createSet4564V1Instruction = () => {
  const set4564Instruction = new TrainInstruction(
    "Set_4564_V1",
    set4564SceneMarkers
  );

  //?? Minifigs
  set4564Instruction.createModel(set4564minifigsConfiguration);

  //?? Trolley
  set4564Instruction.createModel(set4564trolleyConfiguration);

  //?? CarContainerYellow
  set4564Instruction.createModel(set4564carContainerYellowConfiguration);

  //?? CarContainerRed
  set4564Instruction.createModel(set4564carContainerRedConfiguration);

  //?? Truck
  set4564Instruction.createModel(set4564truckConfiguration);

  return set4564Instruction;
};
