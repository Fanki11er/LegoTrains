import { Vector3 } from "three";
import { LegoBlockType } from "../../Types/LegoBlockType";
import {
  cone_1x1_4589,
  dish_4_x_4_Round_Inverted_3960,
  roundOpenStud_3062b,
  tile_2x2_With_Grove_3068b,
  train_Roof_6x6_4509,
  train_Wheel_Spoked_2ac02,
} from "./PartsImports";

export const steamLocomotive7722LocomotiveModelPhase12: LegoBlockType[] = [
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-215, 0, 160),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.091",
    depends: ["ModelMarker.094"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(-240, 0, 160),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.092",
    depends: [],
  },
  {
    partPath: cone_1x1_4589,
    partStartPosition: new Vector3(360, 0, 25),
    partType: "4589",
    materialId: "yellowPLasticMaterial",
    slotId: "ModelMarker.093",
    depends: [],
  },
  {
    partPath: train_Roof_6x6_4509,
    partStartPosition: new Vector3(360, 0, 300),
    partType: "4509",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.094",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(400, 0, 25),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.090",
    depends: [],
  },
  {
    partPath: dish_4_x_4_Round_Inverted_3960,
    partStartPosition: new Vector3(400, 0, -100),
    partType: "3960",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.095",
    depends: [],
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(400, 0, -170),
    partType: "2ac02",
    canNotBeRotated: true,
    slotId: "ModelMarker.098",
    depends: [],
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(440, 0, -170),
    partType: "2ac02",
    canNotBeRotated: true,
    slotId: "ModelMarker.099",
    depends: [],
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(400, 0, -140),
    partType: "2ac02",
    canNotBeRotated: true,
    slotId: "ModelMarker.097",
    depends: [],
  },
  {
    partPath: train_Wheel_Spoked_2ac02,
    partStartPosition: new Vector3(440, 0, -140),
    partType: "2ac02",
    canNotBeRotated: true,
    slotId: "ModelMarker.096",
    depends: [],
  },
];
