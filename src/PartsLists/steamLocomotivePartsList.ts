/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import trainBase_4178 from "../assets/3D/TrainBase_4178/TrainBase_4178.glb";
import plate_x461b from "../assets/3D/Plate_x461b/Plate_x461b.glb";
import roundOpenStud_3062b from "../assets/3D/RoundOpenStud_3062b/RoundOpenStud_3062b.glb";
import plate_3023 from "../assets/3D/Plate_3023/Plate_3023.glb";
import electricEngine_x469b from "../assets/3D/ElectricEngine_x469b/ElectricEngine_x469b.glb";
import magnetCylindrical_73092 from "../assets/3D/MagnetCylindrical_73092/MagnetCylindrical_73092.glb";
import trainCoupling_4023 from "../assets/3D/TrainCoupling_4023/TrainCoupling_4023.glb";

import { PartInfo } from "../Types/PartInfo";

export type PhaseParts = {
  [key: string]: PartInfo[];
};

export const steamLocomotive7722Parts: PhaseParts = {
  phase1: [
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
  ],

  phase2: [
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
  ],
  phase3: [
    {
      partPath: electricEngine_x469b,
      partStartPosition: new Vector3(0, 0, -80),
      partId: "x469b",
      partPriority: 1,
    },
    {
      partPath: plate_3023,
      partStartPosition: new Vector3(100, 0, 100),
      partId: "3023",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
    {
      partPath: plate_3023,
      partStartPosition: new Vector3(120, 0, 100),
      partId: "3023",
      partPriority: 1,
      materialId: "blackPlasticMaterial",
    },
    {
      partPath: trainCoupling_4023,
      partStartPosition: new Vector3(120, 0, 45),
      partId: "4023",
      partPriority: 2,
    },
    {
      partPath: trainCoupling_4023,
      partStartPosition: new Vector3(120, 0, 65),
      partId: "4023",
      partPriority: 2,
    },
    {
      partPath: magnetCylindrical_73092,
      partStartPosition: new Vector3(110, 0, 85),
      partId: "73092",
      partPriority: 3,
    },
    {
      partPath: magnetCylindrical_73092,
      partStartPosition: new Vector3(125, 0, 85),
      partId: "73092",
      partPriority: 3,
    },
  ],
};
