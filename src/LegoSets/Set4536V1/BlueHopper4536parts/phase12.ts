import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x6_3666 } from "../../../PartsImports/Plate_1x6_3666";
import { plate_with_Ladder_4175 } from "../../../PartsImports/Plate_With_Ladder_4175";

export const blueHopper4536Phase12: LegoBlockType[] = [
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(220, 0, 155),
    partType: "3666",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.092",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(220, 0, 170),
    partType: "3666",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.093",
    depends: [],
  },
  {
    partPath: plate_with_Ladder_4175,
    partStartPosition: new Vector3(305, 0, 380),
    partType: "4175",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.094",
    depends: ["ModelMarker.092"],
  },
  {
    partPath: plate_with_Ladder_4175,
    partStartPosition: new Vector3(305, 0, 410),
    partType: "4175",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.095",
    depends: ["ModelMarker.093"],
  },
];
