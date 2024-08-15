/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";
import roundOpenStud_3062b from "../../assets/3D/RoundOpenStud_3062b/RoundOpenStud_3062b.glb";
import trainBase_4178 from "../../assets/3D/TrainBase_4178/TrainBase_4178.glb"

export const phase1: PartInfo[] =  [
    {
      partPath: trainBase_4178,
      partStartPosition: new Vector3(0, 0, 60),
      partId: "4178",
      partPriority: 1,
    },
    {
      partPath: roundOpenStud_3062b,
      partStartPosition: new Vector3(-25, 0, 100),
      partId: "3062b",
      partPriority: 2,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: roundOpenStud_3062b,
      partStartPosition: new Vector3(-10, 0, 100),
      partId: "3062b",
      partPriority: 2,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: roundOpenStud_3062b,
      partStartPosition: new Vector3(10, 0, 100),
      partId: "3062b",
      partPriority: 2,
      materialId: "redPlasticMaterial",
    },
    {
      partPath: roundOpenStud_3062b,
      partStartPosition: new Vector3(25, 0, 100),
      partId: "3062b",
      partPriority: 2,
      materialId: "redPlasticMaterial",
    },
  ]