import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { wheel_Trolley_Skateboard_Old_2496 } from "../../../PartsImports/Wheel_Trolley_Skateboard_Old_2496";
import { minifig_Accessory_Tool_Hand_Truck_Frame_2495 } from "../../../PartsImports/Minifig_Accessory_Tool_Hand_Truck_Frame_2495";

export const trolley4564Phase1: LegoBlockType[] = [
  {
    partPath: wheel_Trolley_Skateboard_Old_2496,
    partStartPosition: new Vector3(-290, 0, 185),
    partType: "2496",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.001",
    depends: [],
  },
  {
    partPath: minifig_Accessory_Tool_Hand_Truck_Frame_2495,
    partStartPosition: new Vector3(-290, 0, 150),
    partType: "2495",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.001"],
  },
];
