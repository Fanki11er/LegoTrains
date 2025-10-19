import { TrainInstruction } from "../../Classes/TrainInstruction";
import set4552SceneMarkers from "../../assets/Set_4552_V1/SceneMarkers/Scene_Markers.glb";
import { car4552Configuration } from "./Car4552parts/car4552Configuration";
import { completeCargoCrane4552Configuration } from "./CompleteCargoCrane/completeCargoCrane4552Configuration";
import { craneBoom4552Configuration } from "./CraneBoom4552parts/craneBoom4552Configuration";
import { craneCabin4552Configuration } from "./CraneCabin4552parts/craneCabin4552Configuration";
import { craneCart4552Configuration } from "./CraneCart4552parts/crameCart4552Configuration";
import { palette4552Configuration } from "./Palette4552parts/palette4552Configuration";
import { platformCart4552Configuration } from "./PlatformCart4552parts/platformCart4552Configuration";
import { torch4552Configuration } from "./Torch4552parts/torch4552Configuration";
import { workshop4552Configuration } from "./Workshop4552parts/workshop4552Configuration";

export const createSet4552V1Instruction = () => {
  const set4552Instruction = new TrainInstruction(
    "Set_4552_V1",
    set4552SceneMarkers
  );

  //?? Torch
  set4552Instruction.createModel(torch4552Configuration);

  //?? Car
  set4552Instruction.createModel(car4552Configuration);

  //?? Workshop
  set4552Instruction.createModel(workshop4552Configuration);

  //?? Palette
  set4552Instruction.createModel(palette4552Configuration);

  //?? Platform Cart
  set4552Instruction.createModel(platformCart4552Configuration);

  //?? Crane Cart
  set4552Instruction.createModel(craneCart4552Configuration);

  //?? Crane Cabin
  set4552Instruction.createModel(craneCabin4552Configuration);

  //?? Crane Boom
  set4552Instruction.createModel(craneBoom4552Configuration);

  //?? Complete Cargo Crane
  set4552Instruction.createModel(completeCargoCrane4552Configuration);

  return set4552Instruction;
};
