import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { plate_1x4_3710 } from "../../../PartsImports/Plate_1x4_3710";
import { plate_2x3_3021 } from "../../../PartsImports/Plate_2x3_3021";
import { train_Wheel_Holder_9V_with_Wheels_Complete_2878c01 } from "../../../PartsImports/Train_Wheel_Holder_9V_with_Wheels_Complete_2878c01";

export const blueHopper4536Phase3: LegoBlockType[] = [
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(270, 0, 155),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.018",
    depends: [],
  },
  {
    partPath: plate_1x4_3710,
    partStartPosition: new Vector3(270, 0, 170),
    partType: "3710",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.019",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 145),
    partType: "3021",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.020",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 170),
    partType: "3021",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.021",
    depends: ["ModelMarker.020"],
  },
  {
    partPath: train_Wheel_Holder_9V_with_Wheels_Complete_2878c01,
    partStartPosition: new Vector3(380, 0, 160),
    partType: "2878c01",
    slotId: "ModelMarker.022",
    depends: ["ModelMarker.021"],
  },

  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 195),
    partType: "3021",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.023",
    depends: [],
  },
  {
    partPath: plate_2x3_3021,
    partStartPosition: new Vector3(340, 0, 220),
    partType: "3021",
    materialId: "blackPlasticMaterial",
    slotId: "ModelMarker.024",
    depends: ["ModelMarker.023"],
  },
  {
    partPath: train_Wheel_Holder_9V_with_Wheels_Complete_2878c01,
    partStartPosition: new Vector3(380, 0, 220),
    partType: "2878c01",
    slotId: "ModelMarker.025",
    depends: ["ModelMarker.024"],
  },
];
