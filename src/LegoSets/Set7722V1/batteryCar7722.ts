import { ModelBlock } from "../../Types/ModelBlock";
import { steamLocomotive7722batteryCarPhase1 } from "./BatteryCar7722Parts/phase1";
import { steamLocomotive7722batteryCarPhase2 } from "./BatteryCar7722Parts/phase2";
import { steamLocomotive7722batteryCarPhase3 } from "./BatteryCar7722Parts/phase3";

export const steamLocomotive7722BatteryCarModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: steamLocomotive7722batteryCarPhase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: steamLocomotive7722batteryCarPhase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: steamLocomotive7722batteryCarPhase3,
  },
];
