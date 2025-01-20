import { ModelBlock } from "../../Types/ModelBlock";
import { steamLocomotive7722LoadingRampPhase1 } from "./LoadingRamp7722Parts/Phase1";
import { steamLocomotive7722LoadingRampPhase2 } from "./LoadingRamp7722Parts/Phase2";
import { steamLocomotive7722LoadingRampPhase3 } from "./LoadingRamp7722Parts/Phase3";
import { steamLocomotive7722LoadingRampPhase4 } from "./LoadingRamp7722Parts/Phase4";
import { steamLocomotive7722LoadingRampPhase5 } from "./LoadingRamp7722Parts/Phase5";

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
