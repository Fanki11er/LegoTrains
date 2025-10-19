import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { electric_Train_Motor_9V_Decorative_Side_2871 } from "../../../PartsImports/Electric_Train_Motor_9V_Decorative_Side_2871";
import { train_Buffer_Beam_4022 } from "../../../PartsImports/Train_Buffer_Beam_4022";

export const locomotiveEngineTrolley4564Phase2: LegoBlockType[] = [
  {
    partPath: electric_Train_Motor_9V_Decorative_Side_2871,
    partStartPosition: new Vector3(150, 0, 650),
    partType: "2871",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
  {
    partPath: electric_Train_Motor_9V_Decorative_Side_2871,
    partStartPosition: new Vector3(150, 0, 610),
    partType: "2871",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(20, 0, 760),
    materialId: "blackPlasticMaterial",
    partType: "4022",
    slotId: "ModelMarker.004",
    depends: [],
  },
];
