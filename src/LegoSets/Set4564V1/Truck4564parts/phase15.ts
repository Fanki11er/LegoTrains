import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { tile_Specialty_1x2_with_Vehicle_Steering_Stand_Black_3829c01 } from "../../../PartsImports/Tile_Specialty_1x2_with_Vehicle_Steering_Stand_Black_3829c01";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";
import { tile_1x8_4162 } from "../../../PartsImports/Tile_1x8_4162";
import { door_1x3x1_left_3822 } from "../../../PartsImports/Door_1x3x1_Left_3822";
import { door_1x3x1_right_3821 } from "../../../PartsImports/Door_1x3x1_Right_3821";
import { technic_axle_4_3705 } from "../../../PartsImports/Technic_Axle_4_3705";

export const truck4564Phase15: LegoBlockType[] = [
  {
    partPath: tile_Specialty_1x2_with_Vehicle_Steering_Stand_Black_3829c01,
    partStartPosition: new Vector3(-395, 0, 465),
    partType: "3829c01",
    slotId: "ModelMarker.053",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(210, 0, 195),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.054",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 195),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.055",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 210),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.056",
    depends: [],
  },
  {
    partPath: tile_1x8_4162,
    partStartPosition: new Vector3(260, 0, 170),
    partType: "4162",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.057",
    depends: [],
  },
  {
    partPath: tile_1x8_4162,
    partStartPosition: new Vector3(260, 0, 185),
    partType: "4162",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.058",
    depends: [],
  },
  {
    partPath: door_1x3x1_left_3822,
    partStartPosition: new Vector3(-295, 0, 295),
    partType: "3822",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.059",
    depends: [],
  },
  {
    partPath: door_1x3x1_right_3821,
    partStartPosition: new Vector3(-295, 0, 315),
    partType: "3821",
    materialId: "whitePlasticMaterial",
    slotId: "ModelMarker.060",
    depends: [],
  },
  {
    partPath: technic_axle_4_3705,
    partStartPosition: new Vector3(-290, 0, 330),
    partType: "3705",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.061",
    depends: [],
  },
];
