import { ModelBlock } from "../../../Types/ModelBlock";
import { crainCart4552Phase1 } from "./phase1";
import { crainCart4552Phase2 } from "./phase2";
import { crainCart4552Phase3 } from "./phase3";

export const crainCart4552WorkshopModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: crainCart4552Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: crainCart4552Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: crainCart4552Phase3,
  },
];
