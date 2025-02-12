import {
  DashboardFutureSetInformationData,
  DashboardSetInformationData,
} from "../Types/DashboardSetInformationData";

import set_7722_image from "../assets/SetsDashboardImages/SET_7722.jpg";
import set_4552_image from "../assets/SetsDashboardImages/SET_4552.jpg";

export const ALL_READY_SETS_INFORMATION_DATA: DashboardSetInformationData[] = [
  {
    setId: "Set_7722_V1",
    setName: "LEGO 7722 Steam Cargo Train",
    setVersion: 1,
    allModels: 8,
    imagePath: set_7722_image,
  },
];

export const FUTURE_SETS_INFORMATION_DATA: DashboardFutureSetInformationData[] =
  [
    {
      setId: "Set_4552_V1",
      setName: "LEGO 4552 Cargo Crain",
      setVersion: 1,
      imagePath: set_4552_image,
    },
  ];
