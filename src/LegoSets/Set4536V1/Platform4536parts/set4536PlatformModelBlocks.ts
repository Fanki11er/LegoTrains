import { ModelBlock } from "../../../Types/ModelBlock";
import { platform4536Phase1 } from "./phase1";
import { platform4536Phase2 } from "./phase2";

export const set4536platformModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: platform4536Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: platform4536Phase2,
  },
];
