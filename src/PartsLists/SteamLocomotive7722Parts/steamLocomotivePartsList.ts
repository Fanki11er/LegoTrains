import { PartInfo } from "../../Types/PartInfo";
import { phase1 } from "./Phase1";
import { phase2 } from "./Phase2";
import { phase3 } from "./Phase3";
import { phase4 } from "./Phase4";
import { phase5 } from "./Phase5";
import { phase6 } from "./Phase6";
import { phase7 } from "./Phase7";
import { phase8 } from "./Phase8";
import { phase9 } from "./Phase9";

export type PhaseParts = {
  [key: string]: PartInfo[];
};

export const steamLocomotive7722Parts: PhaseParts = {
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
  phase7,
  phase8,
  phase9,
  //!! Turn off automatic rotation
};
