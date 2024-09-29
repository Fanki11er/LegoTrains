import { Model } from "../../Classes/Model";
import { TrainInstruction } from "../../Classes/TrainInstruction";
import { steamLocomotive7722LocomotiveModelPhase1 } from "../../PartsLists/SteamLocomotive7722Parts/Phase1";
import { steamLocomotive7722LocomotiveModelPhase10 } from "../../PartsLists/SteamLocomotive7722Parts/Phase10";
import { steamLocomotive7722LocomotiveModelPhase11 } from "../../PartsLists/SteamLocomotive7722Parts/Phase11";
import { steamLocomotive7722LocomotiveModelPhase12 } from "../../PartsLists/SteamLocomotive7722Parts/Phase12";
import { steamLocomotive7722LocomotiveModelPhase2 } from "../../PartsLists/SteamLocomotive7722Parts/Phase2";
import { steamLocomotive7722LocomotiveModelPhase3 } from "../../PartsLists/SteamLocomotive7722Parts/Phase3";
import { steamLocomotive7722LocomotiveModelPhase4 } from "../../PartsLists/SteamLocomotive7722Parts/Phase4";
import { steamLocomotive7722LocomotiveModelPhase5 } from "../../PartsLists/SteamLocomotive7722Parts/Phase5";
import { steamLocomotive7722LocomotiveModelPhase6 } from "../../PartsLists/SteamLocomotive7722Parts/Phase6";
import { steamLocomotive7722LocomotiveModelPhase7 } from "../../PartsLists/SteamLocomotive7722Parts/Phase7";
import { steamLocomotive7722LocomotiveModelPhase8 } from "../../PartsLists/SteamLocomotive7722Parts/Phase8";
import { steamLocomotive7722LocomotiveModelPhase9 } from "../../PartsLists/SteamLocomotive7722Parts/Phase9";
import { SetLegoBlocks } from "../../PartsLists/SteamLocomotive7722Parts/SetLegoBlockTypes";
// @ts-expect-error Not a type
import set7722SceneMarkersWithTracks from "../../assets/3D/Set_7722_V1/SceneMarkers/Set_7722_Scene_Markers_With_Tracks.glb";

// @ts-expect-error Not a type
import set7722LocomotiveModelMarkers from "../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";

export const set7722Instruction = new TrainInstruction(
  set7722SceneMarkersWithTracks
);

const steamLocomotive7722Model = new Model(
  "SteamLocomotive7722Model",
  set7722LocomotiveModelMarkers,
  set7722Instruction
);
const set7722LegoBlocks = new SetLegoBlocks(set7722Instruction);

set7722Instruction.addModel(steamLocomotive7722Model);

set7722Instruction.addSetLegoBlocks(set7722LegoBlocks);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  1,
  steamLocomotive7722LocomotiveModelPhase1
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  2,
  steamLocomotive7722LocomotiveModelPhase2
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  3,
  steamLocomotive7722LocomotiveModelPhase3
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  4,
  steamLocomotive7722LocomotiveModelPhase4
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  5,
  steamLocomotive7722LocomotiveModelPhase5
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  6,
  steamLocomotive7722LocomotiveModelPhase6
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  7,
  steamLocomotive7722LocomotiveModelPhase7
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  8,
  steamLocomotive7722LocomotiveModelPhase8
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  9,
  steamLocomotive7722LocomotiveModelPhase9
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  10,
  steamLocomotive7722LocomotiveModelPhase10
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  11,
  steamLocomotive7722LocomotiveModelPhase11
);

set7722LegoBlocks.addForModelPhaseBlocks(
  "SteamLocomotive7722Model",
  12,
  steamLocomotive7722LocomotiveModelPhase12
);
