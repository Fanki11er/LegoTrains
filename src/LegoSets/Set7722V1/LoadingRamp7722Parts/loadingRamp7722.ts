import { ModelBlock } from "../../../Types/ModelBlock";
import { steamLocomotive7722LoadingRampPhase1 } from "./Phase1";
import { steamLocomotive7722LoadingRampPhase2 } from "./Phase2";
import { steamLocomotive7722LoadingRampPhase3 } from "./Phase3";
import { steamLocomotive7722LoadingRampPhase4 } from "./Phase4";
import { steamLocomotive7722LoadingRampPhase5 } from "./Phase5";

export const steamLocomotive7722LoadingRampModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: steamLocomotive7722LoadingRampPhase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: steamLocomotive7722LoadingRampPhase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: steamLocomotive7722LoadingRampPhase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: steamLocomotive7722LoadingRampPhase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: steamLocomotive7722LoadingRampPhase5,
  },
];
