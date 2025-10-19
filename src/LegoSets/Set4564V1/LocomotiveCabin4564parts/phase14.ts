import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { panel_1x2x2_with_black_stripes_pattern_4864pb01 } from "../../../PartsImports/Panel_1x2x2_with_Black_Stripes_Pattern_4864pb01";
import { plate_Specialty_1x6_with_Train_Wagon_End_6583 } from "../../../PartsImports/Plate_Specialty_1x6_with_Train_Wagon_End_6583";
import { roundOpenStud_3062b } from "../../../PartsImports/RoundOpenStud_3062b";
export const locomotiveCabin4564Phase14: LegoBlockType[] = [
  {
    partPath: panel_1x2x2_with_black_stripes_pattern_4864pb01,
    partStartPosition: new Vector3(-330, 0, 265),
    partType: "4864pb01",
    slotId: "ModelMarker.121",
    depends: [],
  },
  {
    partPath: panel_1x2x2_with_black_stripes_pattern_4864pb01,
    partStartPosition: new Vector3(-330, 0, 290),
    partType: "4864pb01",
    slotId: "ModelMarker.122",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(-555, 0, 50),
    partType: "6583",
    slotId: "ModelMarker.123",
    materialId: "yellowPLasticMaterial",
    depends: [],
  },
  {
    partPath: plate_Specialty_1x6_with_Train_Wagon_End_6583,
    partStartPosition: new Vector3(-585, 0, 50),
    partType: "6583",
    slotId: "ModelMarker.124",
    materialId: "yellowPLasticMaterial",
    depends: [],
  },
  {
    partPath: roundOpenStud_3062b,
    partStartPosition: new Vector3(160, 0, 180),
    partType: "3062b",
    slotId: "ModelMarker.125",
    materialId: "blackPlasticMaterial",
    depends: [],
  },
];
