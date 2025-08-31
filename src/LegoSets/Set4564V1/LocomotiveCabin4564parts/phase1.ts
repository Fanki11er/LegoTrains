import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { train_Base_6x24_with_3_Round_Holes_Each_End_6584a } from "../../../PartsImports/Train_Base_6x24_with_3_Round_Holes_Each_End_6584a";
import { plate_Specialty_2x2_Corner_2420 } from "../../../PartsImports/Plate_Specialty_2_x_2_Corner_2420";

export const locomotiveCabin4564Phase1: LegoBlockType[] = [
  {
    partPath: train_Base_6x24_with_3_Round_Holes_Each_End_6584a,
    partStartPosition: new Vector3(-640, 0, 110),
    partType: "6584a",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 250),
    partType: "2420",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 275),
    partType: "2420",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 300),
    partType: "2420",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.004",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 325),
    partType: "2420",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.005",
    depends: ["ModelMarker.001"],
  },
];
