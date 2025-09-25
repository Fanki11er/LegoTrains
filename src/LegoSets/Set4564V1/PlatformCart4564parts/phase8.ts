import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_4x8_3035 } from "../../../PartsImports/Plate_4x8_3035";
import { hinge_Plate_1x4_Vehicle_Roof_Holder_4315 } from "../../../PartsImports/Hinge_Plate_1x4_Vehicle_Roof_Holder_4315";
import { hinge_Train_Gate_2x4_2873 } from "../../../PartsImports/Hinge_Train_Gate_2x4_2873";
import { plate_4x8_with_Studs_in_Center_Modified_6576 } from "../../../PartsImports/Plate_4x8_with_Studs_in_Center_Modified_6576";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";
import { tile_1x4_2431 } from "../../../PartsImports/Tile_1x4_2431";

export const platformCart4564Phase8: LegoBlockType[] = [
  {
    partPath: plate_4x8_3035,
    partStartPosition: new Vector3(-630, 0, 160),
    partType: "3035",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-245, 0, 275),
    partType: "4315",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.029",
    depends: [],
  },
  {
    partPath: hinge_Train_Gate_2x4_2873,
    partStartPosition: new Vector3(-170, 0, 360),
    partType: "2873",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.030",
    depends: ["ModelMarker.029"],
  },
  {
    partPath: plate_4x8_with_Studs_in_Center_Modified_6576,
    partStartPosition: new Vector3(-640, 0, 250),
    partType: "6576",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.031",
    depends: ["ModelMarker.028", "ModelMarker.029"],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-95, 0, 285),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.032",
    depends: ["ModelMarker.028"],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(725, 0, 70),
    partType: "2431",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.033",
    depends: ["ModelMarker.032"],
  },
];
