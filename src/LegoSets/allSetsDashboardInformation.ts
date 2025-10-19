import {
  DashboardFutureSetInformationData,
  DashboardSetInformationData,
} from "../Types/DashboardSetInformationData";

import set_7722_image from "../assets/SetsDashboardImages/SET_7722.jpg";
import set_4552_image from "../assets/SetsDashboardImages/SET_4552.jpg";
import set_4564_image from "../assets/SetsDashboardImages/SET_4564.jpg";
import set_4563_image from "../assets/SetsDashboardImages/SET_4563.jpg";
import set_4565_image from "../assets/SetsDashboardImages/SET_4565.jpg";
import set_4559_image from "../assets/SetsDashboardImages/SET_4559.jpg";

export const ALL_READY_SETS_INFORMATION_DATA: DashboardSetInformationData[] = [
  {
    setId: "Set_7722_V1",
    setName: "LEGO 7722 Steam Cargo Train",
    setVersion: 1,
    allModels: 7,
    imagePath: set_7722_image,
  },
  {
    setId: "Set_4552_V1",
    setName: "LEGO 4552 Cargo Crane",
    setVersion: 1,
    allModels: 9,
    imagePath: set_4552_image,
  },
  {
    setId: "Set_4564_V1",
    setName: "LEGO 4564 Freight Rail Runner",
    setVersion: 1,
    allModels: 9,
    imagePath: set_4564_image,
  },
];

export const FUTURE_SETS_INFORMATION_DATA: DashboardFutureSetInformationData[] =
  [
    {
      setId: "Set_4563_V1",
      setName: "LEGO 4563 Load N' Haul Railroad",
      setVersion: 1,
      imagePath: set_4563_image,
      informationText: "Available in the future...",
    },

    {
      setId: "Set_4565_V1",
      setName: "LEGO 4565 Freight and Crane",
      setVersion: 1,
      imagePath: set_4565_image,
      informationText: "Available in the future...",
    },

    {
      setId: "Set_4559_V1",
      setName: "LEGO 4559 Cargo Railway",
      setVersion: 1,
      imagePath: set_4559_image,
      informationText: "Available in the future...",
    },
  ];
