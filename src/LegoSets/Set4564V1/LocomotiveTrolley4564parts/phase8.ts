import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { train_Bogie_Plate_Tile_Specialty_with_Pin_6x4_4092 } from "../../../PartsImports/Train_Bogie_Plate_Tile_Specialty_with_Pin_6x4_4092";
import { train_Coupling_4023 } from "../../../PartsImports/4023_Train_Coupling";
import { magnet_Cylindrical_73092 } from "../../../PartsImports/73092_Magnet_Cylindrical";

export const locomotiveTrolley4564Phase8: LegoBlockType[] = [
  {
    partPath: train_Bogie_Plate_Tile_Specialty_with_Pin_6x4_4092,
    partStartPosition: new Vector3(-200, 0, 770),
    partType: "4092",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: [],
  },
  {
    partPath: train_Coupling_4023,
    partStartPosition: new Vector3(60, 0, 700),
    partType: "4023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.022",
    depends: [],
  },
  {
    partPath: magnet_Cylindrical_73092,
    partStartPosition: new Vector3(85, 0, 700),
    partType: "73092",
    slotId: "ModelMarker.023",
    depends: ["ModelMarker.022"],
  },
];
