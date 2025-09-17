import { ModelBlock } from "../../../Types/ModelBlock";
import { locomotiveEngineTrolley4564Phase1 } from "./phase1";
import { locomotiveEngineTrolley4564Phase2 } from "./phase2";
import { locomotiveEngineTrolley4564Phase3 } from "./phase3";

export const set4564locomotiveEngineTrolleyModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: locomotiveEngineTrolley4564Phase1,
  },

  {
    phaseId: 2,
    legoBlockTypes: locomotiveEngineTrolley4564Phase2,
  },

  {
    phaseId: 3,
    legoBlockTypes: locomotiveEngineTrolley4564Phase3,
  },
];
