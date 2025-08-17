import { ModelBlock } from "../../../Types/ModelBlock";
import { truck4564Phase1 } from "./phase1";
import { truck4564Phase2 } from "./phase2";
import { truck4564Phase3 } from "./phase3";
import { truck4564Phase4 } from "./phase4";
import { truck4564Phase5 } from "./phase5";

export const set4564truckModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: truck4564Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: truck4564Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: truck4564Phase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: truck4564Phase4,
  },
  {
    phaseId: 5,
    legoBlockTypes: truck4564Phase5,
  },
];
