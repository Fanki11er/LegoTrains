import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { turntable_2x2_Plate_3680c01 } from "../../../PartsImports/Turntable_2x2_Plate_3680c01";
import { tile_1x8_4162 } from "../../../PartsImports/Tile_1x8_4162";
import { tile_1x4_2431 } from "../../../PartsImports/Tile_1x4_2431";

export const platformCart4564Phase6: LegoBlockType[] = [
  {
    partPath: turntable_2x2_Plate_3680c01,
    partStartPosition: new Vector3(460, 0, 285),
    partType: "3680c01",
    materialId: "blackPlasticMaterial",
    multipart: true,
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: tile_1x8_4162,
    partStartPosition: new Vector3(260, 0, 260),
    partType: "4162",
    materialId: "oldGrayPlasticMaterial",

    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: tile_1x8_4162,
    partStartPosition: new Vector3(260, 0, 275),
    partType: "4162",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },

  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(725, 0, 100),
    partType: "2431",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(725, 0, 85),
    partType: "2431",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
];
