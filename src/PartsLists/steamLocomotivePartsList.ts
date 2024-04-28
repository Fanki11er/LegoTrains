/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Vector3 } from "three";
import trainBase_4178 from "../assets/3D/TrainBase_4178/TrainBase4178.glb";
import plate_3023 from "../assets/3D/Plate_3023/Plate3023.glb";
import roundOpenStud_3062b from "../assets/3D/RoundOpenStud3062b/RoundOpenStud3062b.glb";
import { PartInfo } from "../Types/PartInfo";

export const steamLocomotivePartsList: PartInfo[] = [
  {
    partPath: trainBase_4178,
    partStartPosition: new Vector3(0, 0, 120),
    partId: "4178",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(20, 0, 60),
    partId: "3023",
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(-20, 0, 60),
    partId: "3023",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-40, 0, 80),
    partId: "3062b",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(-20, 0, 80),
    partId: "3062b",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(20, 0, 80),
    partId: "3062b",
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(40, 0, 80),
    partId: "3062b",
  },
];
