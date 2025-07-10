import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  magnet_Cylindrical_73092,
  plate_2x4_3020,
  train_Buffer_Beam_4022,
  train_Coupling_4023,
} from "../set4552PartsImports";

export const platformCart4552Phase3: LegoBlockType[] = [
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(430, 0, 270),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: train_Coupling_4023,
    partStartPosition: new Vector3(480, 0, 255),
    partType: "4023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: ["ModelMarker.003"],
  },
  {
    partPath: magnet_Cylindrical_73092,
    partStartPosition: new Vector3(500, 0, 255),
    partType: "73092",
    slotId: "ModelMarker.005",
    depends: ["ModelMarker.004"],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(-120, 0, 390),
    partType: "3020",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.003"],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(430, 0, 330),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: [],
  },
  {
    partPath: train_Coupling_4023,
    partStartPosition: new Vector3(480, 0, 285),
    partType: "4023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: ["ModelMarker.007"],
  },
  {
    partPath: magnet_Cylindrical_73092,
    partStartPosition: new Vector3(500, 0, 280),
    partType: "73092",
    slotId: "ModelMarker.009",
    depends: ["ModelMarker.008"],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(-120, 0, 415),
    partType: "3020",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.007"],
  },
];
