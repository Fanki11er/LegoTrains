import { TrainInstruction } from "../../Classes/TrainInstruction";
// @ts-expect-error Not a type
import set7722SceneMarkersWithTracks from "../../assets/3D/Set_7722_V1/SceneMarkers/Set_7722_Scene_Markers_With_Tracks.glb";
// @ts-expect-error Not a type
import set7722LocomotiveModelMarkers from "../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";
import { Model } from "../../Classes/Model";
import { SetLegoBlocks } from "./SteamLocomotive7722Parts/SetLegoBlockTypes";
import { addForModelPhaseBlocks } from "../../Utilities/utilities";
import { steamLocomotive7722LocomotiveModelBlocks } from "./steamLocomotive7722";

export const createInstruction = () => {
  const set7722Instruction = new TrainInstruction(
    set7722SceneMarkersWithTracks
  );

  const steamLocomotive7722Model = new Model(
    "SteamLocomotive7722Model",
    set7722LocomotiveModelMarkers,
    set7722Instruction
  );

  const set7722LegoBlocks = new SetLegoBlocks(set7722Instruction);

  set7722Instruction.addModel(steamLocomotive7722Model);

  addForModelPhaseBlocks(
    set7722LegoBlocks,
    "SteamLocomotive7722Model",
    steamLocomotive7722LocomotiveModelBlocks
  );

  set7722Instruction.addSetLegoBlocks(set7722LegoBlocks);

  return set7722Instruction;
};
