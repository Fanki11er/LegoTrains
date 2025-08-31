import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x2_3023 } from "../../../PartsImports/Plate_1x2_3023";
import { plate_1x3_3623 } from "../../../PartsImports/Plate_1x3_3623";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";
import { plate_4x6_3032 } from "../../../PartsImports/Plate_4_x_6_3032";

export const locomotiveCabin4564Phase3: LegoBlockType[] = [
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(210, 0, 210),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.010",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 225),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.011",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(210, 0, 225),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.012",
    depends: [],
  },
  {
    partPath: plate_1x2_3023,
    partStartPosition: new Vector3(185, 0, 240),
    partType: "3023",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.013",
    depends: [],
  },

  {
    partPath: plate_1x3_3623,
    partStartPosition: new Vector3(685, 0, 175),
    partType: "3623",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.014",
    depends: [],
  },
  {
    partPath: plate_1x3_3623,
    partStartPosition: new Vector3(685, 0, 190),
    partType: "3623",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.015",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-50, 0, 195),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.016",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(-95, 0, 210),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.017",
    depends: [],
  },
  {
    partPath: plate_4x6_3032,
    partStartPosition: new Vector3(-460, 0, 250),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
];
