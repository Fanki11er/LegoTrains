import { ModelBlock } from "../../../Types/ModelBlock";
import { platform4536Phase1 } from "./phase1";
import { platform4536Phase2 } from "./phase2";
import { platform4536Phase3 } from "./phase3";
import { platform4536Phase4 } from "./phase4";

export const set4536platformModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: platform4536Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: platform4536Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: platform4536Phase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: platform4536Phase4,
  },
];
