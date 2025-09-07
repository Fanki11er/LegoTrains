import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_Specialty_1x8_with_Door_Rail_4510 } from "../../../PartsImports/Plate_Specialty_1_x_8_with_Door_Rail_4510";
import { plate_4x8_with_Studs_in_Center_Modified_6576 } from "../../../PartsImports/Plate_4x8_with_Studs_in_Center_Modified_6576";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";

export const locomotiveCabin4564Phase16: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x8_with_Door_Rail_4510,
    partStartPosition: new Vector3(-130, 0, 695),
    partType: "4510",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.130",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x8_with_Door_Rail_4510,
    partStartPosition: new Vector3(-130, 0, 720),
    partType: "4510",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.131",
    depends: [],
  },
  {
    partPath: plate_4x8_with_Studs_in_Center_Modified_6576,
    partStartPosition: new Vector3(-565, 0, 250),
    partType: "6576",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.132",
    depends: ["ModelMarker.130", "ModelMarker.131"],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 330),
    partType: "3023",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.133",
    depends: ["ModelMarker.132"],
  },
];
