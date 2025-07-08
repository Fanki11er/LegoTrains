import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  hinge_Brick_1x2_Base_with_Sticker_3937,
  hinge_Brick_1x2_Thin_Top_Plate_3938,
  tile_Specialty_1x2_with_Handle_2432,
} from "../set4552PartsImports";

export const car4552Phase9: LegoBlockType[] = [
  {
    partPath: tile_Specialty_1x2_with_Handle_2432,
    partStartPosition: new Vector3(-55, 0, 240),
    partType: "2432",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.027",
    depends: [],
  },
  {
    partPath: hinge_Brick_1x2_Base_with_Sticker_3937,
    partStartPosition: new Vector3(235, 0, 185),
    partType: "3937",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
  {
    partPath: hinge_Brick_1x2_Thin_Top_Plate_3938,
    partStartPosition: new Vector3(235, 0, 210),
    partType: "3938",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.029",
    depends: ["ModelMarker.028"],
  },
];
