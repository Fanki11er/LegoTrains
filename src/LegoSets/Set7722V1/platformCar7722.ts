import { ModelBlock } from "../../Types/ModelBlock";
import { steamLocomotive7722PlatformCarPhase1 } from "./PlatformCar7722Parts/Phase1";
import { steamLocomotive7722PlatformCarPhase2 } from "./PlatformCar7722Parts/Phase2";
import { steamLocomotive7722PlatformCarPhase3 } from "./PlatformCar7722Parts/Phase3";
import { steamLocomotive7722PlatformCarPhase4 } from "./PlatformCar7722Parts/Phase4";

export const steamLocomotive7722PlatformCarModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: steamLocomotive7722PlatformCarPhase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: steamLocomotive7722PlatformCarPhase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: steamLocomotive7722PlatformCarPhase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: steamLocomotive7722PlatformCarPhase4,
  },
];
