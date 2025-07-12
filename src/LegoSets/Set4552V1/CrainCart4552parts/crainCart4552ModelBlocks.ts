import { ModelBlock } from "../../../Types/ModelBlock";
import { crainCart4552Phase1 } from "./phase1";
import { crainCart4552Phase2 } from "./phase2";
import { crainCart4552Phase3 } from "./phase3";
import { crainCart4552Phase4 } from "./phase4";
import { crainCart4552Phase5 } from "./phase5";

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
  {
    phaseId: 4,
    legoBlockTypes: crainCart4552Phase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: crainCart4552Phase5,
  },
];
