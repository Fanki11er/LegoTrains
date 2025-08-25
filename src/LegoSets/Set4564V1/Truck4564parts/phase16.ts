import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { technic_Bush_1_2_Type_II_Toothed_4265b } from "../../../PartsImports/Technic_Bush_1_2_Type_II_Toothed_4265b";
import { tire_Small_14mm_Offset_Tread_3641 } from "../../../PartsImports/Tire_Small_14mm_Offset_Tread_3641";
import { plate_Specialty_2x2_Corner_2420 } from "../../../PartsImports/Plate_Specialty_2_x_2_Corner_2420";
import { tile_1x2_with_Groove_3069b } from "../../../PartsImports/Tile_1x2_with_Groove_3069b";

export const truck4564Phase16: LegoBlockType[] = [
  {
    partPath: technic_Bush_1_2_Type_II_Toothed_4265b,
    partStartPosition: new Vector3(-290, 0, 350),
    partType: "4265b",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.062",
    depends: [],
  },
  {
    partPath: tire_Small_14mm_Offset_Tread_3641,
    partStartPosition: new Vector3(-290, 0, 370),
    partType: "3641",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.063",
    depends: ["ModelMarker.062"],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 200),
    partType: "2420",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.064",
    depends: [],
  },
  {
    partPath: plate_Specialty_2x2_Corner_2420,
    partStartPosition: new Vector3(435, 0, 225),
    partType: "2420",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.065",
    depends: [],
  },
  {
    partPath: tile_1x2_with_Groove_3069b,
    partStartPosition: new Vector3(560, 0, 145),
    partType: "3069b",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.066",
    depends: [],
  },
];
