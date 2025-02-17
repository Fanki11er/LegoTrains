import { ModelBlock } from "../../Types/ModelBlock";
import { steamLocomotive7722ForkliftTrailerPhase1 } from "./ForkliftTrailer7722Parts/Phase1";
import { steamLocomotive7722ForkliftTrailerPhase2 } from "./ForkliftTrailer7722Parts/Phase2";
import { steamLocomotive7722ForkliftTrailerPhase3 } from "./ForkliftTrailer7722Parts/Phase3";
import { steamLocomotive7722ForkliftTrailerPhase4 } from "./ForkliftTrailer7722Parts/Phase4";
import { steamLocomotive7722ForkliftTrailerPhase5 } from "./ForkliftTrailer7722Parts/Phase5";
import { steamLocomotive7722ForkliftTrailerPhase6 } from "./ForkliftTrailer7722Parts/Phase6";

export const steamLocomotive7722ForkliftTrailerModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: steamLocomotive7722ForkliftTrailerPhase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: steamLocomotive7722ForkliftTrailerPhase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: steamLocomotive7722ForkliftTrailerPhase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: steamLocomotive7722ForkliftTrailerPhase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: steamLocomotive7722ForkliftTrailerPhase5,
  },
  {
    phaseId: 6,
    legoBlockTypes: steamLocomotive7722ForkliftTrailerPhase6,
  },
];
