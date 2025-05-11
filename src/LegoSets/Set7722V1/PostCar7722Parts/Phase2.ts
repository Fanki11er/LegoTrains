import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  magnetCylindrical_73092,
  plate_2_x_6_3795,
  train_Buffer_Beam_4022,
  trainCoupling_4023,
} from "../PartsImports";

export const steamLocomotive7722PostCarPhase2: LegoBlockType[] = [
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(-125, 0, 350),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(-125, 0, 410),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, -70),
    partType: "4023",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.003"],
  },
  {
    partPath: trainCoupling_4023,
    partStartPosition: new Vector3(120, 0, -90),
    partType: "4023",
    slotId: "ModelMarker.007",
    depends: ["ModelMarker.005"],
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(110, 0, -45),
    partType: "73092",
    slotId: "ModelMarker.009",
    depends: ["ModelMarker.007"],
  },
  {
    partPath: magnetCylindrical_73092,
    partStartPosition: new Vector3(125, 0, -45),
    partType: "73092",
    slotId: "ModelMarker.008",
    depends: ["ModelMarker.006"],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(500, 0, 150),
    partType: "3795",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.003"],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(500, 0, 175),
    partType: "3795",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: ["ModelMarker.005"],
  },
];
