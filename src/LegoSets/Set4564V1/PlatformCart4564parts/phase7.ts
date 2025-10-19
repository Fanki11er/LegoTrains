import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_Specialty_1x6_with_Train_Wagon_End_6583 } from "../../../PartsImports/Plate_Specialty_1x6_with_Train_Wagon_End_6583";
import { panel_1x2x1_With_Train_Logo_4865 } from "../../../PartsImports/Panel_1x2x1_With_Train_Logo_4865";

export const platformCart4564Phase7: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(-615, 0, 50),
    partType: "6583",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.024",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(-645, 0, 50),
    partType: "6583",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.025",
    depends: [],
  },
  {
    partPath: panel_1x2x1_With_Train_Logo_4865,
    partStartPosition: new Vector3(15, 0, 375),
    partType: "4865",
    slotId: "ModelMarker.026",
    depends: [],
  },
  {
    partPath: panel_1x2x1_With_Train_Logo_4865,
    partStartPosition: new Vector3(15, 0, 400),
    partType: "4865",
    slotId: "ModelMarker.027",
    depends: [],
  },
];
