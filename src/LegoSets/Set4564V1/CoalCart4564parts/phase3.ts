import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { train_Buffer_Beam_4022 } from "../../../PartsImports/Train_Buffer_Beam_4022";
import { train_Coupling_4023 } from "../../../PartsImports/4023_Train_Coupling";
import { magnet_Cylindrical_73092 } from "../../../PartsImports/73092_Magnet_Cylindrical";
import { plate_2x4_3020 } from "../../../PartsImports/Plate_2x4_3020";
import { slope_Brick_Inverted_3665 } from "../../../PartsImports/Slope_Brick_Inverted_3665";

export const coalCart4564Phase3: LegoBlockType[] = [
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(20, 0, 640),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.003",
    depends: [],
  },
  {
    partPath: train_Buffer_Beam_4022,
    partStartPosition: new Vector3(20, 0, 580),
    partType: "4022",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.004",
    depends: [],
  },
  {
    partPath: train_Coupling_4023,
    partStartPosition: new Vector3(60, 0, 800),
    partType: "4023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.005",
    depends: ["ModelMarker.003"],
  },
  {
    partPath: train_Coupling_4023,
    partStartPosition: new Vector3(60, 0, 825),
    partType: "4023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.006",
    depends: ["ModelMarker.004"],
  },
  {
    partPath: magnet_Cylindrical_73092,
    partStartPosition: new Vector3(85, 0, 800),
    partType: "73092",
    slotId: "ModelMarker.007",
    depends: ["ModelMarker.005"],
  },
  {
    partPath: magnet_Cylindrical_73092,
    partStartPosition: new Vector3(85, 0, 825),
    partType: "73092",
    slotId: "ModelMarker.008",
    depends: ["ModelMarker.006"],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 300),
    partType: "3020",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.009",
    depends: ["ModelMarker.003"],
  },
  {
    partPath: plate_2x4_3020,
    partStartPosition: new Vector3(100, 0, 325),
    partType: "3020",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: ["ModelMarker.004"],
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(460, 0, 415),
    partType: "3665",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(460, 0, 440),
    partType: "3665",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(460, 0, 465),
    partType: "3665",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(460, 0, 490),
    partType: "3665",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: slope_Brick_Inverted_3665,
    partStartPosition: new Vector3(460, 0, 515),
    partType: "3665",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
];
