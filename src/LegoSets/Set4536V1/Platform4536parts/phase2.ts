import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";

import { plate_Specialty_2x2_Corner_2420 } from "../../../PartsImports/Plate_Specialty_2_x_2_Corner_2420";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";

export const platform4536Phase2: LegoBlockType[] = [
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(-70, 0, 145),
    partType: "2420",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(-70, 0, 170),
    partType: "2420",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(-100, 0, 140),
    partType: "3023",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(-100, 0, 155),
    partType: "3023",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(-100, 0, 170),
    partType: "3023",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
];
