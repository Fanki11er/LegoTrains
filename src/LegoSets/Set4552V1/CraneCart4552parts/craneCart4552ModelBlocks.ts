import { ModelBlock } from "../../../Types/ModelBlock";
import { craneCart4552Phase1 } from "./phase1";
import { craneCart4552Phase2 } from "./phase2";
import { craneCart4552Phase3 } from "./phase3";
import { craneCart4552Phase4 } from "./phase4";
import { craneCart4552Phase5 } from "./phase5";

export const craneCart4552ModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: craneCart4552Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: craneCart4552Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: craneCart4552Phase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: craneCart4552Phase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: craneCart4552Phase5,
  },
];
