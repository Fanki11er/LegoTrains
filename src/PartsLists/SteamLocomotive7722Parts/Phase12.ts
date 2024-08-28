/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import tile_2x2_With_Grove_3068b from "../../assets/3D/Tile_2x2_With_Grove_3068b/Tile_2x2_With_Grove_3068b.glb";
import cone_1x1_4589 from "../../assets/3D/Cone_1x1_4589/Cone_1x1_4589.glb";
import train_Roof_6x6_4509 from "../../assets/3D/Train_Roof_6x6_4509/Train_Roof_6x6_4509.glb";
import roundOpenStud_3062b from "../../assets/3D/RoundOpenStud_3062b/RoundOpenStud_3062b.glb";
import dish_4_x_4_Round_Inverted_3960 from "../../assets/3D/Dish_4x4_Round_Inverted_3960/Dish_4x4_Round_Inverted_3960.glb";
import train_Wheel_Spoked_2ac02 from "../../assets/3D/Train_Wheel_Spoked_2ac02/Train_Wheel_Spoked_2ac02.glb";

export const phase12: PartInfo[] = [
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-215, 0, 160),
    partId: "3068b",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-240, 0, 160),
    partId: "3068b",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: cone_1x1_4589,
    partStartPosition: new Vector3(360, 0, 25),
    partId: "4589",
    partPriority: 1,
    materialId: "yellowPLasticMaterial",
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(360, 0, 300),
    partId: "4509",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(400, 0, 25),
    partId: "3062b",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: dish_4_x_4_Round_Inverted_3960,
    partStartPosition: new Vector3(400, 0, -100),
    partId: "3960",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(400, 0, -170),
    partId: "2ac02",
    partPriority: 1,
    canNotBeRotated: true,
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(440, 0, -170),
    partId: "2ac02",
    partPriority: 1,
    canNotBeRotated: true,
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(400, 0, -140),
    partId: "2ac02",
    partPriority: 1,
    canNotBeRotated: true,
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(440, 0, -140),
    partId: "2ac02",
    partPriority: 1,
    canNotBeRotated: true,
  },
];
