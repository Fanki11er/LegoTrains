import { ModelBlock } from "../../../Types/ModelBlock";
import { completeCargoCrane4552Phase1 } from "./phase1";
import { completeCargoCrane4552Phase2 } from "./phase2";

export const completeCargoCrane4552ModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: completeCargoCrane4552Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: completeCargoCrane4552Phase2,
  },
];
