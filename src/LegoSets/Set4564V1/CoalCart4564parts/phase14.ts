import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { slope_Brick_3x4_33_Degrees_3297 } from "../../../PartsImports/Slope_Brick_3x4_33_Degrees_3297";
import { brick_1x12_6112 } from "../../../PartsImports/Brick_1x12_6112";
import { plate_Specialty_1x6_with_Train_Wagon_End_6583 } from "../../../PartsImports/Plate_Specialty_1x6_with_Train_Wagon_End_6583";
import { roundOpenStud_3062b } from "../../../PartsImports/RoundOpenStud_3062b";

export const coalCart4564Phase14: LegoBlockType[] = [
  {
    partPath: slope_Brick_3x4_33_Degrees_3297,
    partStartPosition: new Vector3(-200, 0, 665),
    partType: "3297",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.094",
    depends: [],
  },
  {
    partPath: slope_Brick_3x4_33_Degrees_3297,
    partStartPosition: new Vector3(-200, 0, 630),
    partType: "3297",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.095",
    depends: [],
  },
  {
    partPath: brick_1x12_6112,
    partStartPosition: new Vector3(-280, 0, 860),
    partType: "6112",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.096",
    depends: [],
  },
  {
    partPath: brick_1x12_6112,
    partStartPosition: new Vector3(-280, 0, 875),
    partType: "6112",
    materialId: "redPlasticMaterial",
    slotId: "ModelMarker.097",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(-675, 0, 50),
    partType: "6583",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.098",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(-705, 0, 50),
    partType: "6583",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.099",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 195),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.100",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 210),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.101",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 225),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.102",
    depends: [],
  },

  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 240),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.103",
    depends: ["ModelMarker.100", "ModelMarker.101", "ModelMarker.102"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 255),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.104",
    depends: ["ModelMarker.100", "ModelMarker.101", "ModelMarker.102"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 270),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.105",
    depends: ["ModelMarker.100", "ModelMarker.101", "ModelMarker.102"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 285),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.106",
    depends: ["ModelMarker.100", "ModelMarker.101", "ModelMarker.102"],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 300),
    partType: "3062b",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.107",
    depends: ["ModelMarker.100", "ModelMarker.101", "ModelMarker.102"],
  },
];
