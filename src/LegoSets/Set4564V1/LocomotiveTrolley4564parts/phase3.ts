import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_2x3_3021 } from "../../../PartsImports/Plate_2x3_3021";
import { train_Buffer_Beam_4022 } from "../../../PartsImports/Train_Buffer_Beam_4022";

export const locomotiveTrolley4564Phase3: LegoBlockType[] = [
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 200),
    partType: "3021",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 225),
    partType: "3021",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(20, 0, 700),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
];
