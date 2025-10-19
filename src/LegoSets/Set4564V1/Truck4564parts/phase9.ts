import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_Specialty_2_x_2_Corner_2420 } from "../../Set4552V1/set4552PartsImports";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";
import { hinge_Tile_1x2_with_2_Fingers_4531 } from "../../../PartsImports/Hinge_Tile_1x2_with_2_Fingers_4531";
import { hinge_Hook_Base_Slider_Arm_with_Three_Finger_And_Rubber_2650w } from "../../../PartsImports/Hinge_Hook_Base_Slider_Arm_with_Three_Finger_And_Rubber_2650w";
import { rubber_Band_0001tr } from "../../../PartsImports/Rubber_Band_0001tr";
import { hinge_Hook_Arm_Slider_2651 } from "../../../PartsImports/Hinge_Hook_Arm_Slider_2651";

export const truck4564Phase9: LegoBlockType[] = [
  {
    partPath: plate_Specialty_2_x_2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 150),
    partType: "2420",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.026",
    depends: [],
  },
  {
    partPath: plate_Specialty_2_x_2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 175),
    partType: "2420",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.027",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 165),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.028",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(210, 0, 165),
    partType: "3023",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.029",
    depends: [],
  },
  {
    partPath: hinge_Tile_1x2_with_2_Fingers_4531,
    partStartPosition: new Vector3(-395, 0, 715),
    partType: "4531",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.030",
    depends: [],
  },
  {
    partPath: hinge_Hook_Base_Slider_Arm_with_Three_Finger_And_Rubber_2650w,
    partStartPosition: new Vector3(-405, 0, 300),
    partType: "2650w",
    materialId: "redPlasticMaterial",
    multiPhases: true,
    phases: ["connected", "pulled", "stretched"],
    noAutomaticMoveToGroundLevel: true,
    slotId: "ModelMarker.031",
    doNotArrangeAfterConnectionInNest: true,
    depends: ["ModelMarker.030"],
  },
  {
    partPath: rubber_Band_0001tr,
    partStartPosition: new Vector3(-395, 0, 320),
    partType: "0001tr",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.032",
    doNotArrangeAfterConnectionInNest: true,
    depends: ["ModelMarker.031"],
  },
  {
    partPath: hinge_Hook_Arm_Slider_2651,
    partStartPosition: new Vector3(-395, 0, 340),
    partType: "2651",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.033",
    doNotArrangeAfterConnectionInNest: true,
    depends: ["ModelMarker.032"],
  },
];
