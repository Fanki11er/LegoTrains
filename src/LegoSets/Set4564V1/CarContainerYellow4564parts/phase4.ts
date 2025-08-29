import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";
import { slope_Brick_2x4_45_Degrees_Yellow_With_Logo_3037 } from "../../../PartsImports/Slope_Brick_2x4_45_Degrees_Yellow_With_Logo_3037";
import { plate_Specialty_1x2_with_Handle_on_Side_2540 } from "../../../PartsImports/Plate_Specialty_1x2_with_Handle_on_Side_2540";
import { plate_1x1_3024 } from "../../../PartsImports/Plate_1x1_3024";

export const carContainerYellow4564Phase4: LegoBlockType[] = [
  {
    partPath: slope_Brick_2x4_45_Degrees_Yellow_With_Logo_3037,
    partStartPosition: new Vector3(-10, 0, 160),
    partType: "3037",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x2_with_Handle_on_Side_2540,
    partStartPosition: new Vector3(15, 0, 150),
    partType: "2540",
    slotId: "ModelMarker.014",
    materialId: "yellowPLasticMaterial",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(40, 0, 150),
    partType: "3024",
    slotId: "ModelMarker.015",
    materialId: "yellowPLasticMaterial",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x1_3024,
    partStartPosition: new Vector3(60, 0, 150),
    partType: "3024",
    slotId: "ModelMarker.016",
    materialId: "yellowPLasticMaterial",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-50, 0, 150),
    partType: "3710",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.017",
    depends: ["ModelMarker.014", "ModelMarker.015", "ModelMarker.016"],
  },
];
