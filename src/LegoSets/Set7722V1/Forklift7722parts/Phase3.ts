import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2x3_3021,
  plate_3023,
  plate_4_x_4_3031,
  tile_2x2_With_Grove_3068b,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722ForkliftPhase3: LegoBlockType[] = [
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-240, 0, 220),
    partType: "3068b",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(650, 0, 100),
    partType: "3021",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 190),
    partType: "3023",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 190),
    partType: "3023",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: plate_4_x_4_3031,
    partStartPosition: new Vector3(-600, 0, 330),
    partType: "3031",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
];
