import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  magnetCylindrical_73092,
  plate_1x6_3666,
  plate_2_x_6_3795,
  train_Buffer_Beam_4022,
  trainCoupling_4023,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722PlatformCarPhase2: LegoBlockType[] = [
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 280),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(0, 0, 295),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(-125, 0, 230),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: [],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(-125, 0, 290),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: [],
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, -20),
    partType: "4023",
    slotId: "ModelMarker.012",
    depends: ["ModelMarker.008"],
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, 0),
    partType: "4023",
    slotId: "ModelMarker.013",
    depends: ["ModelMarker.009"],
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(110, 0, 20),
    partType: "73092",
    slotId: "ModelMarker.014",
    depends: ["ModelMarker.012"],
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(125, 0, 20),
    partType: "73092",
    slotId: "ModelMarker.015",
    depends: ["ModelMarker.013"],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(500, 0, 100),
    partType: "3795",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.009"],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(500, 0, 125),
    partType: "3795",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: ["ModelMarker.008"],
  },
];
