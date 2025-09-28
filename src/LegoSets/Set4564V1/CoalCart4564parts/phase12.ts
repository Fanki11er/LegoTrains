import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_2x4_3020 } from "../../../PartsImports/Plate_2x4_3020";
import { hinge_Plate_1x4_Vehicle_Roof_Holder_4315 } from "../../../PartsImports/Hinge_Plate_1x4_Vehicle_Roof_Holder_4315";
import { hinge_Train_Gate_2x4_2873 } from "../../../PartsImports/Hinge_Train_Gate_2x4_2873";
import { hinge_Train_Gate_2x4_With_White_Train_Logo_2873 } from "../../../PartsImports/Hinge_Train_Gate_2x4_With_White_Train_Logo_2873";

export const coalCart4564Phase12: LegoBlockType[] = [
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 350),
    partType: "3020",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.078",
    depends: [],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 375),
    partType: "3020",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.079",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-200, 0, 275),
    partType: "4315",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.080",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-200, 0, 300),
    partType: "4315",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.081",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-245, 0, 300),
    partType: "4315",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.082",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-245, 0, 325),
    partType: "4315",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.083",
    depends: [],
  },
  {
    partPath: hinge_Train_Gate_2x4_2873,
    partStartPosition: new Vector3(-170, 0, 400),
    partType: "2873",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.084",
    depends: ["ModelMarker.080"],
  },
  {
    partPath: hinge_Train_Gate_2x4_With_White_Train_Logo_2873,
    partStartPosition: new Vector3(-125, 0, 360),
    partType: "2873",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.085",
    depends: ["ModelMarker.081"],
  },
  {
    partPath: hinge_Train_Gate_2x4_2873,
    partStartPosition: new Vector3(-170, 0, 440),
    partType: "2873",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.086",
    depends: ["ModelMarker.082"],
  },
  {
    partPath: hinge_Train_Gate_2x4_With_White_Train_Logo_2873,
    partStartPosition: new Vector3(-125, 0, 400),
    partType: "2873",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.087",
    depends: ["ModelMarker.082"],
  },
];
