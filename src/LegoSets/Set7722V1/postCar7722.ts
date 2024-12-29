import { ModelBlock } from "../../Types/ModelBlock";
import { steamLocomotive7722PostCarPhase1 } from "./PostCar7722Parts/Phase1";
import { steamLocomotive7722PostCarPhase2 } from "./PostCar7722Parts/Phase2";
import { steamLocomotive7722PostCarPhase3 } from "./PostCar7722Parts/Phase3";
import { steamLocomotive7722PostCarPhase4 } from "./PostCar7722Parts/Phase4";
import { steamLocomotive7722PostCarPhase5 } from "./PostCar7722Parts/Phase5";

export const steamLocomotive7722PostCarModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: steamLocomotive7722PostCarPhase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: steamLocomotive7722PostCarPhase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: steamLocomotive7722PostCarPhase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: steamLocomotive7722PostCarPhase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: steamLocomotive7722PostCarPhase5,
  },
];
