import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";

import { plate_Specialty_1_x_8_with_Door_Rail_4510 } from "../../Set7722V1/Set7722V1PartsImports";
import { brick_1x2_Yellow_With_Envelope_Sticker_3004 } from "../../../PartsImports/Brick_1x2_Yellow_With_Envelope_Sticker_3004";

export const postCart4564Phase14: LegoBlockType[] = [
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(-130, 0, 520),
    partType: "4510",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.084",
    depends: [],
  },
  {
    partPath: plate_Specialty_1_x_8_with_Door_Rail_4510,
    partStartPosition: new Vector3(-130, 0, 495),
    partType: "4510",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.085",
    depends: [],
  },
  {
    partPath: brick_1x2_Yellow_With_Envelope_Sticker_3004,
    partStartPosition: new Vector3(-200, 0, 350),
    partType: "3004",
    slotId: "ModelMarker.086",
    depends: [],
  },
  {
    partPath: brick_1x2_Yellow_With_Envelope_Sticker_3004,
    partStartPosition: new Vector3(-200, 0, 365),
    partType: "3004",
    slotId: "ModelMarker.087",
    depends: ["ModelMarker.086"],
  },
  {
    partPath: brick_1x2_Yellow_With_Envelope_Sticker_3004,
    partStartPosition: new Vector3(-200, 0, 380),
    partType: "3004",
    slotId: "ModelMarker.088",
    depends: [],
  },
  {
    partPath: brick_1x2_Yellow_With_Envelope_Sticker_3004,
    partStartPosition: new Vector3(-200, 0, 395),
    partType: "3004",
    slotId: "ModelMarker.089",
    depends: ["ModelMarker.088"],
  },
];
