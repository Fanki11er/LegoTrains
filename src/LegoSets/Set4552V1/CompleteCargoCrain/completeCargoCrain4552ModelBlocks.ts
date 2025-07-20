import { ModelBlock } from "../../../Types/ModelBlock";
import { completeCargoCrain4552Phase1 } from "./phase1";
import { completeCargoCrain4552Phase2 } from "./phase2";

export const completeCargoCrain4552ModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: completeCargoCrain4552Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: completeCargoCrain4552Phase2,
  },
];
