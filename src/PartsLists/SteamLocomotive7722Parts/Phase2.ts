/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";
import plate_x461b from "../../assets/3D/Plate_x461b/Plate_x461b.glb";
import plate_3023 from "../../assets/3D/Plate_3023/Plate_3023.glb";

export const phase2: PartInfo[] = [
    {
      partPath: plate_x461b,
      partStartPosition: new Vector3(15, 0, 120),
      partId: "x461b",
      partPriority: 1,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: plate_x461b,
      partStartPosition: new Vector3(-15, 0, 120),
      partId: "x461b",
      partPriority: 1,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: plate_3023,
      partStartPosition: new Vector3(60, 0, 100),
      partId: "3023",
      partPriority: 1,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: plate_3023,
      partStartPosition: new Vector3(80, 0, 100),
      partId: "3023",
      partPriority: 1,
      materialId: "redPlasticMaterial",
    },
  ]