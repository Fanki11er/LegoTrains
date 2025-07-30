import { ModelBlock } from "../../../Types/ModelBlock";
import { torch4552Phase1 } from "./phase1";
import { torch4552Phase2 } from "./phase2";
import { torch4552Phase3 } from "./phase3";
import { torch4552Phase4 } from "./phase4";
import { torch4552Phase5 } from "./phase5";
import { torch4552Phase6 } from "./phase6";
import { torch4552Phase7 } from "./phase7";
import { torch4552Phase8 } from "./phase8";

export const cargoCrain4552TorchModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: torch4552Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: torch4552Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: torch4552Phase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: torch4552Phase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: torch4552Phase5,
  },
  {
    phaseId: 6,
    legoBlockTypes: torch4552Phase6,
  },

  {
    phaseId: 7,
    legoBlockTypes: torch4552Phase7,
  },
  {
    phaseId: 8,
    legoBlockTypes: torch4552Phase8,
  },
];
