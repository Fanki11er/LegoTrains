import { Vector3 } from "three";
import { LegoBlockType } from "../../../Types/LegoBlockType";
import { panel_1x2x2x2_with_Solid_Studs_Closed_4864b } from "../../../PartsImports/Panel_1x2x2_with_Solid_Studs_Closed_4864b";
import { plate_with_Ladder_4175 } from "../../../PartsImports/Plate_With_Ladder_4175";
import { antenna_small_base_with_lever_298c03 } from "../../../PartsImports/Antenna_Small_Base_with_Lever_298c03";

export const blueHopper4536Phase5: LegoBlockType[] = [
  {
    partPath: panel_1x2x2x2_with_Solid_Studs_Closed_4864b,
    partStartPosition: new Vector3(305, 0, 250),
    partType: "4864b",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.034",
    depends: [],
  },
  {
    partPath: panel_1x2x2x2_with_Solid_Studs_Closed_4864b,
    partStartPosition: new Vector3(305, 0, 265),
    partType: "4864b",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.035",
    depends: [],
  },
  {
    partPath: panel_1x2x2x2_with_Solid_Studs_Closed_4864b,
    partStartPosition: new Vector3(305, 0, 280),
    partType: "4864b",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.036",
    depends: [],
  },
  {
    partPath: panel_1x2x2x2_with_Solid_Studs_Closed_4864b,
    partStartPosition: new Vector3(305, 0, 295),
    partType: "4864b",
    materialId: "bluePlasticMaterial",
    slotId: "ModelMarker.037",
    depends: [],
  },
  {
    partPath: plate_with_Ladder_4175,
    partStartPosition: new Vector3(305, 0, 320),
    partType: "4175",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.038",
    depends: [],
  },
  {
    partPath: plate_with_Ladder_4175,
    partStartPosition: new Vector3(305, 0, 350),
    partType: "4175",
    materialId: "oldGrayPlasticMaterial",
    slotId: "ModelMarker.039",
    depends: [],
  },
  {
    partPath: antenna_small_base_with_lever_298c03,
    partStartPosition: new Vector3(95, 0, 270),
    partType: "298c03",
    materialId: "oldGrayPlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.040",
    depends: [],
  },
  {
    partPath: antenna_small_base_with_lever_298c03,
    partStartPosition: new Vector3(95, 0, 285),
    partType: "298c03",
    materialId: "oldGrayPlasticMaterial",
    multipart: true,
    propagateMainMaterialToChildren: true,
    slotId: "ModelMarker.041",
    depends: [],
  },
];
