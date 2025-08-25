import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { hinge_tile_1x4_4625 } from "../../../PartsImports/Hinge_Tile_1x4_4625";
import { hinge_vehicle_roof_plate_specialty_4x4_4213 } from "../../../PartsImports/Hinge_Vehicle_Roof_Plate_Specialty_4x4_4213";

export const truck4564Phase18: LegoBlockType[] = [
  {
    partPath: hinge_tile_1x4_4625,
    partStartPosition: new Vector3(-355, 0, 320),
    partType: "4625",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.071",
    depends: [],
  },
  {
    partPath: hinge_vehicle_roof_plate_specialty_4x4_4213,
    partStartPosition: new Vector3(-390, 0, 525),
    partType: "4213",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.072",
    depends: ["ModelMarker.071"],
  },
];
