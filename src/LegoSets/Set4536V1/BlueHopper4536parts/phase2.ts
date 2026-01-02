import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { hinge_Plate_1x4_Vehicle_Roof_Holder_4315 } from "../../../PartsImports/Hinge_Plate_1x4_Vehicle_Roof_Holder_4315";
import { hinge_vehicle_roof_plate_specialty_4x4_4213 } from "../../../PartsImports/Hinge_Vehicle_Roof_Plate_Specialty_4x4_4213";
import { plate_1x6_3666 } from "../../../PartsImports/Plate_1x6_3666";
import { tile_1x2_with_Groove_3069b } from "../../../PartsImports/Tile_1x2_with_Groove_3069b";
import { tile_1x4_2431 } from "../../../PartsImports/Tile_1x4_2431";
import { tile_2x2_With_Grove_3068b } from "../../../PartsImports/Tile_2x2_With_Grove_3068b";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";
import { tile_1x1_with_Groove_3070b } from "../../../PartsImports/Tile_1x1_with_Groove_3070b";
import { plate_2_x_6_3795 } from "../../../PartsImports/Plate_2_x_6_3795";
import { train_Coupling_New_2920 } from "../../../PartsImports/Train_Coupling_New_2920";
import { magnet_Cylindrical_New_73092 } from "../../../PartsImports/Magnet_Cylindrical_New_73092";

export const blueHopper4536Phase2: LegoBlockType[] = [
  {
    partPath: hinge_Plate_1x4_Vehicle_Roof_Holder_4315,
    partStartPosition: new Vector3(-35, 0, 245),
    partType: "4315",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.002",
    depends: [],
  },
  {
    partPath: hinge_vehicle_roof_plate_specialty_4x4_4213,
    partStartPosition: new Vector3(-35, 0, 275),
    partType: "4213",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.002"],
  },
  {
    partPath: plate_1x6_3666,
    partStartPosition: new Vector3(220, 0, 140),
    partType: "3666",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: tile_1x2_with_Groove_3069b,
    partStartPosition: new Vector3(75, 0, 180),
    partType: "3069b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: ["ModelMarker.002"],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(10, 0, 300),
    partType: "2431",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.002", "ModelMarker.004"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(115, 0, 205),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.007",
    depends: ["ModelMarker.002", "ModelMarker.004"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(115, 0, 230),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.008",
    depends: ["ModelMarker.002"],
  },
  {
    partPath: tile_2x2_With_Grove_3068b,
    partStartPosition: new Vector3(115, 0, 255),
    partType: "3068b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: ["ModelMarker.002"],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(270, 0, 140),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.005", "ModelMarker.009"],
  },
  {
    partPath: tile_1x4_2431,
    partStartPosition: new Vector3(10, 0, 315),
    partType: "2431",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: tile_1x1_with_Groove_3070b,
    partStartPosition: new Vector3(95, 0, 180),
    partType: "3070b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: plate_2_x_6_3795,
    partStartPosition: new Vector3(155, 0, 205),
    partType: "3795",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [
      "ModelMarker.002",
      "ModelMarker.002",
      "ModelMarker.011",
      "ModelMarker.012",
    ],
  },
  {
    partPath: train_Coupling_New_2920,
    partStartPosition: new Vector3(305, 0, 155),
    partType: "2920",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: train_Coupling_New_2920,
    partStartPosition: new Vector3(305, 0, 185),
    partType: "2920",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: magnet_Cylindrical_New_73092,
    partStartPosition: new Vector3(305, 0, 205),
    partType: "73092",
    slotId: "ModelMarker.016",
    depends: ["ModelMarker.014"],
  },
  {
    partPath: magnet_Cylindrical_New_73092,
    partStartPosition: new Vector3(305, 0, 225),
    partType: "73092",
    slotId: "ModelMarker.017",
    depends: ["ModelMarker.015"],
  },
];
