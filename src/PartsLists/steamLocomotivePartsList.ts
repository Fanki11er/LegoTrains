/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import plate_3023 from "../assets/3D/Plate_3023/Plate_3023.glb";
import trainBase_4178 from "../assets/3D/TrainBase_4178/TrainBase_4178.glb";
import { PartInfo } from "../Types/PartInfo";

export const steamLocomotivePartsList: PartInfo[] = [
  { partPath: trainBase_4178, partStartPosition: new Vector3(0, 0, 100) },
  { partPath: plate_3023, partStartPosition: new Vector3(20, 0, 60) },
  { partPath: plate_3023, partStartPosition: new Vector3(-20, 0, 60) },
];
