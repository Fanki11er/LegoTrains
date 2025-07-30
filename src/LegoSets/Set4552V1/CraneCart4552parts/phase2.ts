import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  hinge_Bar_2_with_3_Fingers_and_Top_Stud_End_Control_Lever_2433,
  hinge_Plate_1x2_with_2_Fingers_4276,
  tile_1x4_2431,
  turntable_4x4_Square_Base_Complete_3403c01,
} from "../set4552PartsImports";

export const craneCart4552Phase2: LegoBlockType[] = [
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 335),
    partType: "2431",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(-300, 0, 350),
    partType: "2431",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: turntable_4x4_Square_Base_Complete_3403c01,
    partStartPosition: new Vector3(430, 0, 110),
    partType: "3403c01",
    materialId: "redPlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.008",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x2_with_2_Fingers_4276,
    partStartPosition: new Vector3(265, 0, 375),
    partType: "4276",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: hinge_Bar_2_with_3_Fingers_and_Top_Stud_End_Control_Lever_2433,
    partStartPosition: new Vector3(235, 0, 245),
    partType: "2433",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.009"],
  },
  {
    partPath: hinge_Plate_1x2_with_2_Fingers_4276,
    partStartPosition: new Vector3(265, 0, 390),
    partType: "4276",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: hinge_Bar_2_with_3_Fingers_and_Top_Stud_End_Control_Lever_2433,
    partStartPosition: new Vector3(235, 0, 275),
    partType: "2433",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: ["ModelMarker.011"],
  },
];
