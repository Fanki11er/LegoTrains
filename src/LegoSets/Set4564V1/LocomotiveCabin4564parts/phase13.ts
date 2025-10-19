import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { tile_1x4_2431 } from "../../../PartsImports/Tile_1x4_2431";
import { slope_Brick_1x2_45_Degrees_3040 } from "../../../PartsImports/Slope_Brick_1x2_45_Degrees_3040";
import { door_1x5x4_Right_With_Train_Logo_Sticker_3194pb02 } from "../../../PartsImports/Door_1x5x4_Right_With_Train_Logo_Sticker_3194pb02";
import { door_1x5x4_left_with_train_logo_sticker_3195pb02 } from "../../../PartsImports/Door_1x5x4_Left_With_Train_Logo_Sticker_3195pb02";
export const locomotiveCabin4564Phase13: LegoBlockType[] = [
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(725, 0, 115),
    partType: "2431",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.116",
    depends: [],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(725, 0, 130),
    partType: "2431",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.117",
    depends: [],
  },
  {
    partPath: slope_Brick_1x2_45_Degrees_3040,
    partStartPosition: new Vector3(470, 0, 95),
    partType: "3040",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.118",
    depends: [],
  },
  {
    partPath: door_1x5x4_Right_With_Train_Logo_Sticker_3194pb02,
    partStartPosition: new Vector3(-245, 0, 710),
    partType: "3194pb02",
    slotId: "ModelMarker.119",
    noAutomaticMoveToGroundLevel: true,
    depends: [],
  },
  {
    partPath: door_1x5x4_left_with_train_logo_sticker_3195pb02,
    partStartPosition: new Vector3(-245, 0, 760),
    partType: "3195pb02",
    slotId: "ModelMarker.120",
    noAutomaticMoveToGroundLevel: true,
    depends: [],
  },
];
