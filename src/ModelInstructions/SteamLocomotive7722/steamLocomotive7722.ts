import { Model } from "../../Classes/Model";
import { Phase } from "../../Classes/Phase";
import { TrainInstruction } from "../../Classes/TrainInstruction";
import { steamLocomotive7722LocomotiveModelPhase1 } from "../../PartsLists/SteamLocomotive7722Parts/Phase1";
import { steamLocomotive7722LocomotiveModelPhase2 } from "../../PartsLists/SteamLocomotive7722Parts/Phase2";
import { steamLocomotive7722LocomotiveModelPhase3 } from "../../PartsLists/SteamLocomotive7722Parts/Phase3";
import { steamLocomotive7722LocomotiveModelPhase4 } from "../../PartsLists/SteamLocomotive7722Parts/Phase4";
import { steamLocomotive7722LocomotiveModelPhase5 } from "../../PartsLists/SteamLocomotive7722Parts/Phase5";
import { steamLocomotive7722LocomotiveModelPhase6 } from "../../PartsLists/SteamLocomotive7722Parts/Phase6";
import { steamLocomotive7722LocomotiveModelPhase7 } from "../../PartsLists/SteamLocomotive7722Parts/Phase7";
import set7722LegoBlocks from "../../PartsLists/SteamLocomotive7722Parts/SetLegoBlockTypes";
// @ts-expect-error Not a type
import modelMarkers from "../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";
export const set7722Instruction = new TrainInstruction();

const steamLocomotive7722Model = new Model(set7722Instruction);

const steamLocomotive772phases = [
  new Phase(1, steamLocomotive7722LocomotiveModelPhase1),
  new Phase(2, steamLocomotive7722LocomotiveModelPhase2),
  new Phase(3, steamLocomotive7722LocomotiveModelPhase3),
  new Phase(4, steamLocomotive7722LocomotiveModelPhase4),
  new Phase(5, steamLocomotive7722LocomotiveModelPhase5),
  new Phase(6, steamLocomotive7722LocomotiveModelPhase6),
  new Phase(7, steamLocomotive7722LocomotiveModelPhase7),
  // new Phase(8, steamLocomotive7722Parts["phase8"]),
  // new Phase(9, steamLocomotive7722Parts["phase9"]),
  // new Phase(10, steamLocomotive7722Parts["phase10"]),
  // new Phase(11, steamLocomotive7722Parts["phase11"]),
  // new Phase(12, steamLocomotive7722Parts["phase12"]),
];

steamLocomotive7722Model.addPhases(steamLocomotive772phases);
steamLocomotive7722Model.addModelMarkersPath(modelMarkers);

set7722Instruction.addModel(steamLocomotive7722Model);
set7722Instruction.addSetLegoBlocks(set7722LegoBlocks);
