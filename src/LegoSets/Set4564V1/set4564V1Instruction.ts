import { TrainInstruction } from "../../Classes/TrainInstruction";

import set4564SceneMarkers from "../../assets/Set_4564_V1/SceneMarkers/Scene_Markers.glb";
import { set4564carContainerRedConfiguration } from "./CarContainerRed4564parts/set4564carContainerRedConfiguration";
import { set4564carContainerYellowConfiguration } from "./CarContainerYellow4564parts/set4564carContainerYellowConfiguration";
import { set4564coalCartConfiguration } from "./CoalCart4564parts/set4564platformCartConfiguration";
import { set4564loadingRampConfiguration } from "./LoadingRamp4564parts/set4564loadingRampConfiguration";
import { locomotive4564Configuration } from "./Locomotive4564parts/locomotive4564Configuration";
import { set4564locomotiveCabinConfiguration } from "./LocomotiveCabin4564parts/set4564locomotiveCabinConfiguration";
import { set4564locomotiveEngineTrolleyConfiguration } from "./LocomotiveEngineTrolley4564parts/set4564locomotiveEngineTrolleyConfiguration";
import { set4564locomotiveTrolleyConfiguration } from "./LocomotiveTrolley4564parts/set4564locomotiveTrolleyConfiguration";
import { set4564minifigsConfiguration } from "./Minifigs4564parts/set4564minifigsConfiguration";
import { set4564platformCartConfiguration } from "./PlatformCart4564parts/set4564platformCartConfiguration";
import { set4564postCartConfiguration } from "./PostCart4564parts/set4564postCartConfiguration";
import { set4564trolleyConfiguration } from "./Trolley4564parts/set4564trolleyConfiguration";
import { set4564truckConfiguration } from "./Truck4564parts/set4564truckConfiguration";

export const createSet4564V1Instruction = () => {
  const set4564Instruction = new TrainInstruction(
    "Set_4564_V1",
    set4564SceneMarkers
  );

  //?? Minifigs
  set4564Instruction.createModel(set4564minifigsConfiguration);

  // //?? Trolley
  set4564Instruction.createModel(set4564trolleyConfiguration);

  //?? CarContainerYellow
  set4564Instruction.createModel(set4564carContainerYellowConfiguration);

  //?? CarContainerRed
  set4564Instruction.createModel(set4564carContainerRedConfiguration);

  //?? Truck
  set4564Instruction.createModel(set4564truckConfiguration);

  //?? LoadingRamp
  set4564Instruction.createModel(set4564loadingRampConfiguration);

  //?? LocomotiveCabin
  set4564Instruction.createModel(set4564locomotiveCabinConfiguration);

  //?? LocomotiveTrolley
  set4564Instruction.createModel(set4564locomotiveTrolleyConfiguration);

  //?? LocomotiveEngineTrolley
  set4564Instruction.createModel(set4564locomotiveEngineTrolleyConfiguration);

  //?? Locomotive
  set4564Instruction.createModel(locomotive4564Configuration);

  //?? PlatformCart
  set4564Instruction.createModel(set4564platformCartConfiguration);

  //?? CoalCart
  set4564Instruction.createModel(set4564coalCartConfiguration);

  //?? PostCart
  set4564Instruction.createModel(set4564postCartConfiguration);

  return set4564Instruction;
};
