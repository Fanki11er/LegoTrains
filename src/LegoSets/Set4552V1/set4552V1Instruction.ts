import { TrainInstruction } from "../../Classes/TrainInstruction";
// @ts-expect-error Not a type
import set4552SceneMarkers from "../../assets/Set_4552_V1/SceneMarkers/Scene_Markers.glb";
import { torch4552Configuration } from "./Torch4552parts/torch4552Configuration";

export const createSet4552V1Instruction = () => {
  const set4552Instruction = new TrainInstruction(
    "Set_4552_V1",
    set4552SceneMarkers
  );

  //?? Torch
  set4552Instruction.createModel(torch4552Configuration);

  return set4552Instruction;
};
