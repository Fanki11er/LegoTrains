import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import {
  plate_2_x_10_3832,
  plate_3023,
  plate_6_x_16_3027,
} from "../Set7722V1PartsImports";

export const steamLocomotive7722PlatformCarPhase1: LegoBlockType[] = [
  {
    partPath: plate_6_x_16_3027,
    partStartPosition: new Vector3(-560, 0, 200),
    partType: "3027",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: plate_2_x_10_3832,
    partStartPosition: new Vector3(250, 0, 350),
    partType: "3082",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 145),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(100, 0, 160),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 145),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.001"],
  },
  {
    partPath: plate_3023,
    partStartPosition: new Vector3(120, 0, 160),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: ["ModelMarker.001"],
  },
];
