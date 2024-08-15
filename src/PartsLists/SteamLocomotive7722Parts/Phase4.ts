/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";

import plate_3023 from "../../assets/3D/Plate_3023/Plate_3023.glb";
import slope_3040 from "../../assets/3D/Slope_3040/Slope_3040.glb";
import plate_With_Ladder_4175 from "../../assets/3D/4175_Plate_With_Ladder/4175_Plate_With_Ladder.glb";
import brick_3003 from "../../assets/3D/3003_Brick/3003_Brick.glb";

export const phase4: PartInfo[] =  [
    {
      partPath: slope_3040,
      partStartPosition: new Vector3(165, 0, 85),
      partId: "3040",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
    {
      partPath: slope_3040,
      partStartPosition: new Vector3(145, 0, 85),
      partId: "3040",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
    {
      partPath: plate_With_Ladder_4175,
      partStartPosition: new Vector3(40, 0, 130),
      partId: "4175",
      partPriority: 1,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: plate_With_Ladder_4175,
      partStartPosition: new Vector3(65, 0, 130),
      partId: "4175",
      partPriority: 1,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: brick_3003,
      partStartPosition: new Vector3(145, 0, 60),
      partId: "3003",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
    {
      partPath: plate_3023,
      partStartPosition: new Vector3(100, 0, 115),
      partId: "3023",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
    {
      partPath: plate_3023,
      partStartPosition: new Vector3(120, 0, 115),
      partId: "3023",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
  ]