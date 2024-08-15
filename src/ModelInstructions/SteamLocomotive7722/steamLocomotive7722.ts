import { Model } from "../../Classes/Model";
import { Phase } from "../../Classes/Phase";
import { TrainInstruction } from "../../Classes/TrainInstruction";
import { steamLocomotive7722Parts } from "../../PartsLists/SteamLocomotive7722Parts/steamLocomotivePartsList";
// @ts-expect-error Not a type
import modelMarkers from "../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";
export const set7722Instruction = new TrainInstruction();

const steamLocomotive7722Model = new Model(set7722Instruction);

const steamLocomotive772phases = [
  new Phase(1, steamLocomotive7722Parts["phase1"]),
  new Phase(2, steamLocomotive7722Parts["phase2"]),
  new Phase(3, steamLocomotive7722Parts["phase3"]),
  new Phase(4, steamLocomotive7722Parts["phase4"]),
  new Phase(5, steamLocomotive7722Parts["phase5"]),
  new Phase(6, steamLocomotive7722Parts["phase6"]),
];

steamLocomotive7722Model.addPhases(steamLocomotive772phases);
steamLocomotive7722Model.addModelMarkersPath(modelMarkers);

set7722Instruction.addModel(steamLocomotive7722Model);
