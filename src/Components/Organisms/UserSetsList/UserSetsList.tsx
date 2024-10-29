import {
  DashboardSetInformationData,
  SetInformationDTO,
} from "../../../Types/DashboardSetInformationData";
import DashboardSetInformation from "../../Molecules/DashboardSetInformation/DashboardSetInformation";
import { UserSetsListWrapper } from "./UserSetsList.styles";
import set_7722_image from "../../../assets/SetsDashboardImages/SET_7722.jpg";
import set_4552_image from "../../../assets/SetsDashboardImages/SET_4552.jpg";
import { legoSetRouterNavigationPath } from "../../../router/routerPaths";
import { Link } from "react-router-dom";

const allSetsInformationData: DashboardSetInformationData[] = [
  {
    setId: "Set_7722_V1",
    setName: "LEGO 7722 Steam Cargo Train",
    setVersion: 1,
    allModels: 2,
    imagePath: set_7722_image,
  },
  {
    setId: "Set_4552-V1",
    setName: "LEGO 4552 Cargo Crain",
    setVersion: 1,
    allModels: 2,
    imagePath: set_4552_image,
  },
];

const data: SetInformationDTO[] = [
  { setId: "Set_7722_V1", isCompleted: true, completedModels: 2 },
];

//Todo Future sets list

const matchSets = (
  setsInformation: SetInformationDTO[],
  setData: DashboardSetInformationData
) => {
  return setsInformation.find((setInformation) => {
    return setInformation.setId === setData.setId;
  });
};

const UserSetsList = () => {
  const renderSetsInformation = (
    setsInformation: SetInformationDTO[],
    allSetsData: DashboardSetInformationData[]
  ) => {
    return allSetsData.map((setData) => {
      const matchedSet = matchSets(setsInformation, setData);
      return (
        <li>
          <Link to={legoSetRouterNavigationPath(setData.setId)}>
            <DashboardSetInformation
              dashboardSetInformationData={setData}
              setInformationDTO={matchedSet}
            />
          </Link>
        </li>
      );
    });
  };

  return (
    <UserSetsListWrapper>
      {data && renderSetsInformation(data, allSetsInformationData)}
    </UserSetsListWrapper>
  );
};

export default UserSetsList;
