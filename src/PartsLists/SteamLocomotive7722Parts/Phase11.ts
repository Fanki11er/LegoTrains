/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import plate_1x6_3666 from "../../assets/3D/Plate_1x6_3666/plate_1x6_3666.glb";
import brick_3003 from "../../assets/3D/3003_Brick/3003_Brick.glb";
import round_Plate_4073 from "../../assets/3D/Round_Plate_4073/Round_Plate_4073.glb";
import plate_1x4_3710 from "../../assets/3D/Plate_1x4_3710/Plate_1x4_3710.glb";
import minifig_Head_Plain_Undecorated_3626b from "../../assets/3D/Minifig_Head_Plain_Undecorated_3626b/Minifig_Head_Plain_Undecorated_3626b.glb";

export const phase11: PartInfo[] = [
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 160),
    partId: "3666",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 175),
    partId: "3666",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: brick_3003,
    partStartPosition: new Vector3(145, 0, 0),
    partId: "3003",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 40),
    partId: "4073",
    partPriority: 1,
    materialId: "redPlasticMaterial",
  },
  {
    partPath: round_Plate_4073,
    partStartPosition: new Vector3(180, 0, 25),
    partId: "4073",
    partPriority: 1,
    materialId: "redPlasticMaterial",
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-180, 0, 135),
    partId: "3710",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: minifig_Head_Plain_Undecorated_3626b,
    partStartPosition: new Vector3(145, 0, 55),
    partId: "3626b",
    partPriority: 1,
    materialId: "blackPlasticMaterial",
  },
];
