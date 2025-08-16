import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_1x1_3024,
  plate_1x4_3710,
  plate_Specialty_1x2_with_Handle_on_Side_2540,
  slope_Brick_2x4_45_Degrees_Red_With_Envelope_3037,
} from "../set4564PartsImports";

export const carContainerRed4564Phase4: LegoBlockType[] = [
  {
    partPath: slope_Brick_2x4_45_Degrees_Red_With_Envelope_3037,
    partStartPosition: new Vector3(-10, 0, 200),
    partType: "3037",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_with_Handle_on_Side_2540,
    partStartPosition: new Vector3(15, 0, 175),
    partType: "2540",
    slotId: "ModelMarker.014",
    materialId: "redPlasticMaterial",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(40, 0, 165),
    partType: "3024",
    slotId: "ModelMarker.015",
    materialId: "redPlasticMaterial",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(60, 0, 165),
    partType: "3024",
    slotId: "ModelMarker.016",
    materialId: "redPlasticMaterial",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-50, 0, 165),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: ["ModelMarker.014", "ModelMarker.015", "ModelMarker.016"],
  },
];
