import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { brick_Specialty_1x2_with_Grill_2877 } from "../../../PartsImports/Brick_Specialty_1x2_with_Grill_2877";
import { brick_Specialty_2x2_Corner_2357 } from "../../../PartsImports/Brick_Specialty_2x2_Corner_2357";
import { tile_1x2_with_Telemetry_Panel_Pattern_3069px2 } from "../../../PartsImports/Tile_1x2_with_Telemetry_Panel_Pattern_3069px2";
import { antenna_small_base_with_lever_4592c02 } from "../../../PartsImports/Antenna_Small_Base_with_Lever_4592c02";

export const locomotiveCabin4564Phase9: LegoBlockType[] = [
  {
    partPath: brick_Specialty_1x2_with_Grill_2877,
    partStartPosition: new Vector3(460, 0, 220),
    partType: "2877",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.079",
    depends: [],
  },
  {
    partPath: brick_Specialty_1x2_with_Grill_2877,
    partStartPosition: new Vector3(460, 0, 235),
    partType: "2877",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.080",
    depends: [],
  },
  {
    partPath: brick_Specialty_1x2_with_Grill_2877,
    partStartPosition: new Vector3(460, 0, 250),
    partType: "2877",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.081",
    depends: [],
  },
  {
    partPath: brick_Specialty_1x2_with_Grill_2877,
    partStartPosition: new Vector3(460, 0, 265),
    partType: "2877",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.082",
    depends: [],
  },
  {
    partPath: brick_Specialty_2x2_Corner_2357,
    partStartPosition: new Vector3(590, 0, 300),
    partType: "2357",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.083",
    depends: [],
  },
  {
    partPath: brick_Specialty_2x2_Corner_2357,
    partStartPosition: new Vector3(590, 0, 325),
    partType: "2357",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.084",
    depends: [],
  },
  {
    partPath: tile_1x2_with_Telemetry_Panel_Pattern_3069px2,
    partStartPosition: new Vector3(15, 0, 350),
    partType: "3069px2",
    slotId: "ModelMarker.085",
    depends: [],
  },
  {
    partPath: antenna_small_base_with_lever_4592c02,
    partStartPosition: new Vector3(-355, 0, 365),
    partType: "4592c02",
    materialId: "whitePlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    childrenMaterialId: "blackPlasticMaterial",
    slotId: "ModelMarker.091",
    depends: [],
  },
];
