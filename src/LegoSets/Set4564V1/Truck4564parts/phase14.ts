import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  brick_1x1_3005,
  hose_Reel_2x2_Holder_String_2584,
  hose_Reel_2x2x2_Drum_String_2x2_With_String_2585w,
  plate_1x4_3710,
  plate_3023,
  string_Cord_Thin_Short_x77aw2,
} from "../set4564PartsImports";

export const truck4564Phase14: LegoBlockType[] = [
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(210, 0, 180),
    partType: "3023",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.046",
    depends: [],
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(535, 0, 145),
    partType: "3005",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.047",
    depends: [],
  },
  {
    partPath: brick_1x1_3005,
    partStartPosition: new Vector3(535, 0, 160),
    partType: "3005",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.048",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-95, 0, 195),
    partType: "3710",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.049",
    depends: [],
  },
  {
    partPath: hose_Reel_2x2_Holder_String_2584,
    partStartPosition: new Vector3(-395, 0, 390),
    partType: "2584",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.050",
    depends: [],
  },
  {
    partPath: hose_Reel_2x2x2_Drum_String_2x2_With_String_2585w,
    partStartPosition: new Vector3(-395, 0, 415),
    partType: "2585w",
    materialId: "blackPlasticMaterial",
    multiPhases: true,
    noAutomaticMoveToGroundLevel: true,
    phases: ["phase0"],
    slotId: "ModelMarker.051",
    depends: [],
  },
  {
    partPath: string_Cord_Thin_Short_x77aw2,
    partStartPosition: new Vector3(-395, 0, 450),
    partType: "x77aw2",
    slotId: "ModelMarker.052",
    depends: [],
  },
];
