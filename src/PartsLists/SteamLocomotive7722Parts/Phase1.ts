import { PartInfo } from "../../Types/PartInfo";

export const phase1: PartInfo[] = [
  {
    partType: "4178",
    slotId: "ModelMarker.006",
    depends: [],
  },
  {
    partType: "3062b",
    slotId: "ModelMarker.001",
    depends: ["ModelMarker.006"],
  },
  {
    partType: "3062b",
    slotId: "ModelMarker.002",
    depends: ["ModelMarker.006"],
  },
  {
    partType: "3062b",
    slotId: "ModelMarker.003",
    depends: ["ModelMarker.006"],
  },
  {
    partType: "3062b",
    slotId: "ModelMarker.004",
    depends: ["ModelMarker.006"],
  },
  // {
  //   partPath: trainBase_4178,
  //   partStartPosition: new Vector3(0, 0, 60),
  //   partId: "4178",
  //   partPriority: 1,
  // },
  // {
  //   partPath: roundOpenStud_3062b,
  //   partStartPosition: new Vector3(-25, 0, 100),
  //   partId: "3062b",
  //   partPriority: 2,
  //   materialId: "redPlasticMaterial",
  // },
  // {
  //   partPath: roundOpenStud_3062b,
  //   partStartPosition: new Vector3(-10, 0, 100),
  //   partId: "3062b",
  //   partPriority: 2,
  //   materialId: "redPlasticMaterial",
  // },
  // {
  //   partPath: roundOpenStud_3062b,
  //   partStartPosition: new Vector3(10, 0, 100),
  //   partId: "3062b",
  //   partPriority: 2,
  //   materialId: "redPlasticMaterial",
  // },
  // {
  //   partPath: roundOpenStud_3062b,
  //   partStartPosition: new Vector3(25, 0, 100),
  //   partId: "3062b",
  //   partPriority: 2,
  //   materialId: "redPlasticMaterial",
  // },
];
