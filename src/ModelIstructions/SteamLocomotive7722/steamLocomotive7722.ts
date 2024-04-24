import { Model, Phase, TrainInstruction } from "../../Classes/TrainInstruction";
import { steamLocomotivePartsList } from "../../PartsLists/steamLocomotivePartsList";
export const set7722Instruction = new TrainInstruction();

const steamLocomotive772phases = [new Phase(1, ["4178"])];

const steamLocomotive7722Model = new Model(
  steamLocomotivePartsList,
  steamLocomotive772phases,
  set7722Instruction
);

set7722Instruction.addModel(steamLocomotive7722Model);
