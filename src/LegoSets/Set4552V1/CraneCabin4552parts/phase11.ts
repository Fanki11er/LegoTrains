import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  slope_Brick_2x4_45_Degrees_3037,
  string_Cord_Thin_x77a,
  winch_For_4552_2x4x2_73037,
} from "../set4552PartsImports";

export const craneCabin4552Phase11: LegoBlockType[] = [
  {
    partPath: slope_Brick_2x4_45_Degrees_3037,
    partStartPosition: new Vector3(530, 0, 320),
    partType: "3037",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.046",
    depends: [],
  },
  {
    partPath: winch_For_4552_2x4x2_73037,
    partStartPosition: new Vector3(410, 0, 0),
    partType: "73037",
    materialId: "yellowPLasticMaterial",
    noAutomaticMoveToGroundLevel: true,
    multipart: true,
    multiPhases: true,
    propagateMainMaterialToChildren: false,
    phases: ["layOnGround", "position_1"],
    slotId: "ModelMarker.047",
    depends: [],
  },
  {
    partPath: string_Cord_Thin_x77a,
    partStartPosition: new Vector3(460, 0, 10),
    partType: "x77a",
    slotId: "ModelMarker.048",
    doNotArrangeAfterConnectionInNest: true,
    depends: ["ModelMarker.047"],
  },
];
