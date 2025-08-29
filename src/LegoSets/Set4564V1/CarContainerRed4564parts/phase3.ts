import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { hinge_Plate_1x4_Vehicle_Roof_Holder_4315 } from "../../../PartsImports/Hinge_Plate_1x4_Vehicle_Roof_Holder_4315";
import { hinge_Train_Gate_2x4_Red_With_Envelope_2873 } from "../../../PartsImports/Hinge_Train_Gate_2x4_Red_With_Envelope_2873";

export const carContainerRed4564Phase3: LegoBlockType[] = [
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-200, 0, 250),
    partType: "4315",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: hinge_Train_Gate_2x4_Red_With_Envelope_2873,
    partStartPosition: new Vector3(-125, 0, 320),
    partType: "2873",
    slotId: "ModelMarker.012",
    depends: ["ModelMarker.011"],
  },
];
