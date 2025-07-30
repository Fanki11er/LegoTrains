import { ModelBlock } from "../../../Types/ModelBlock";
import { palette4552Phase1 } from "./phase1";
import { palette4552Phase2 } from "./phase2";
import { palette4552Phase3 } from "./phase3";
import { palette4552Phase4 } from "./phase4";

export const cargoCrane4552PaletteModelBlocks: ModelBlock[] = [
  {
    phaseId: 1,
    legoBlockTypes: palette4552Phase1,
  },
  {
    phaseId: 2,
    legoBlockTypes: palette4552Phase2,
  },
  {
    phaseId: 3,
    legoBlockTypes: palette4552Phase3,
  },
  {
    phaseId: 4,
    legoBlockTypes: palette4552Phase4,
  },
];
