import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_2_x_6_3795, plate_2x4_3020 } from "../Set7722V1PartsImports";

export const steamLocomotive7722LoadingRampPhase1: LegoBlockType[] = [
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(560, 0, 100),
    partType: "3795",
    slotId: "ModelMarker.001",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(560, 0, 125),
    partType: "3795",
    slotId: "ModelMarker.002",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(610, 0, 100),
    partType: "3020",
    slotId: "ModelMarker.003",
    materialId: "oldGrayPlasticMaterial",
    depends: [],
  },
];
