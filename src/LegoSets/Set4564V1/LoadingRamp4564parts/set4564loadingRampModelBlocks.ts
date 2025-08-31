import { ModelBlock } from "../../../Types/ModelBlock";
import { loadingRamp4564Phase1 } from "./phase1";
import { loadingRamp4564Phase2 } from "./phase2";
import { loadingRamp4564Phase3 } from "./phase3";
import { loadingRamp4564Phase4 } from "./phase4";
import { loadingRamp4564Phase5 } from "./phase5";
import { loadingRamp4564Phase6 } from "./phase6";

export const set4564loadingRampModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: loadingRamp4564Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: loadingRamp4564Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: loadingRamp4564Phase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: loadingRamp4564Phase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: loadingRamp4564Phase5,
  },
  {
    phaseId: 6,
    legoBlockTypes: loadingRamp4564Phase6,
  },
];
