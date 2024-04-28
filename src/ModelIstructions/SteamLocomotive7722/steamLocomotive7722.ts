import { Model, Phase, TrainInstruction } from "../../Classes/TrainInstruction";
import { steamLocomotive7722Parts } from "../../PartsLists/steamLocomotivePartsList";
export const set7722Instruction = new TrainInstruction();

const steamLocomotive7722Model = new Model(set7722Instruction);

const steamLocomotive772phases = [
  new Phase(steamLocomotive7722Model, 1, steamLocomotive7722Parts["phase1"]),
  new Phase(steamLocomotive7722Model, 2, steamLocomotive7722Parts["phase2"]),
];

steamLocomotive7722Model.addPhases(steamLocomotive772phases);

set7722Instruction.addModel(steamLocomotive7722Model);
