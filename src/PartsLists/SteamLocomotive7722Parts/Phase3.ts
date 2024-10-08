/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import { PartInfo } from "../../Types/PartInfo";
import plate_3023 from "../../assets/3D/Plate_3023/Plate_3023.glb";
import electricEngine_x469b from "../../assets/3D/ElectricEngine_x469b/ElectricEngine_x469b.glb";
import magnetCylindrical_73092 from "../../assets/3D/MagnetCylindrical_73092/MagnetCylindrical_73092.glb";
import trainCoupling_4023 from "../../assets/3D/TrainCoupling_4023/TrainCoupling_4023.glb";

export const phase3: PartInfo[] = [
  {
    partPath: electricEngine_x469b,
    partStartPosition: new Vector3(0, 0, -80),
    partId: "x469b",
    partPriority: 2,
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 100),
    partId: "3023",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 100),
    partId: "3023",
    partPriority: 2,
    materialId: "blackPlasticMaterial",
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 45),
    partId: "4023",
    partPriority: 1,
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 65),
    partId: "4023",
    partPriority: 1,
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(110, 0, 85),
    partId: "73092",
    partPriority: 2,
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(125, 0, 85),
    partId: "73092",
    partPriority: 2,
  },
];
