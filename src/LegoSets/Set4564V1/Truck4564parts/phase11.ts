import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_Specialty_1x2_with_Handle_on_Side_2540 } from "../../../PartsImports/Plate_Specialty_1x2_with_Handle_on_Side_2540";
import { plate_Specialty_1x1_with_Clip_Light_4081b } from "../../../PartsImports/Plate_Specialty_1x1_with_Clip_Light_4081b";

export const truck4564Phase11: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1x2_with_Handle_on_Side_2540,
    partStartPosition: new Vector3(15, 0, 200),
    partType: "2540",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.035",
    doNotArrangeAfterConnectionInNest: true,
    depends: [],
  },
  {
    partPath: plate_Specialty_1x1_with_Clip_Light_4081b,
    partStartPosition: new Vector3(140, 0, 200),
    partType: "4081b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.036",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x1_with_Clip_Light_4081b,
    partStartPosition: new Vector3(140, 0, 225),
    partType: "4081b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.037",
    depends: [],
  },
];
