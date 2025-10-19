import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { hinge_Tile_1x2_with_2_Fingers_4531 } from "../../../PartsImports/Hinge_Tile_1x2_with_2_Fingers_4531";
import { hinge_Plate_1x2_with_3_Fingers_4275 } from "../../../PartsImports/Hinge_Plate_1x2_with_3_Fingers_4275";
import { plate_Specialty_1x2_with_Handle_on_Side_2540 } from "../../../PartsImports/Plate_Specialty_1x2_with_Handle_on_Side_2540";

export const platformCart4564Phase9: LegoBlockType[] = [
  {
    partPath: hinge_Tile_1x2_with_2_Fingers_4531,
    partStartPosition: new Vector3(-395, 0, 700),
    partType: "4531",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x2_with_3_Fingers_4275,
    partStartPosition: new Vector3(-385, 0, 730),
    partType: "4275",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.035",
    depends: ["ModelMarker.034"],
  },
  {
    partPath: plate_Specialty_1x2_with_Handle_on_Side_2540,
    partStartPosition: new Vector3(15, 0, 225),
    partType: "2540",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.036",
    depends: ["ModelMarker.035"],
  },
];
