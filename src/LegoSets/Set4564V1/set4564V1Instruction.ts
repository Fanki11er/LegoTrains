import { TrainInstruction } from "../../Classes/TrainInstruction";
// @ts-expect-error Not a type
import set4564SceneMarkers from "../../assets/Set_4564_V1/SceneMarkers/Scene_Markers.glb";
import { set4564minifigsConfiguration } from "./Minifigs4564parts/set4564minifigsConfiguration";

export const createSet4564V1Instruction = () => {
  const set4564Instruction = new TrainInstruction(
    "Set_4564_V1",
    set4564SceneMarkers
  );

  //?? Minifigs
  set4564Instruction.createModel(set4564minifigsConfiguration);

  return set4564Instruction;
};
