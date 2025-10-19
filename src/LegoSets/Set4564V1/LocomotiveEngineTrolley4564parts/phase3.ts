import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { train_Coupling_4023 } from "../../../PartsImports/4023_Train_Coupling";
import { magnet_Cylindrical_73092 } from "../../../PartsImports/73092_Magnet_Cylindrical";

export const locomotiveEngineTrolley4564Phase3: LegoBlockType[] = [
  {
    partPath: train_Coupling_4023,
    partStartPosition: new Vector3(60, 0, 725),
    materialId: "blackPlasticMaterial",
    partType: "4023",
    slotId: "ModelMarker.005",
    depends: [],
  },
  {
    partPath: magnet_Cylindrical_73092,
    partStartPosition: new Vector3(85, 0, 725),
    partType: "73092",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.005"],
  },
];
