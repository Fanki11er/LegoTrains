import {
  DashboardFutureSetInformationData,
  DashboardSetInformationData,
} from "../../../Types/DashboardSetInformationData";
import DashboardSetInformation from "../../Molecules/DashboardSetInformation/DashboardSetInformation";
import { UserSetsListWrapper } from "./UserSetsList.styles";
import { legoSetRouterNavigationPath } from "../../../router/routerPaths";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SetPersistanceData } from "../../../Classes/PersistanceModule";
import { getAllSetsPersistanceData } from "../../../firebase/readFromDbFunctions";
import { All_SETS_DATA } from "../../../Api/queryKeys";
import SubmitIndicator from "../../Molecules/SubmitIndicator/SubmitIndicator";
import {
  ALL_READY_SETS_INFORMATION_DATA,
  FUTURE_SETS_INFORMATION_DATA,
} from "../../../LegoSets/allSetsDashboardInformation";
import DashboardFutureSetsInformation from "../../Molecules/DashboardFutureSetsInformation/DashboardFutureSetsInformation";
import ErrorIndicator from "../../Molecules/ErrorIndicator/ErrorIndicator";

const matchSets = (
  setsInformation: SetPersistanceData[],
  setData: DashboardSetInformationData
) => {
  return setsInformation.find((setInformation) => {
    return setInformation.setName === setData.setId;
  });
};

const UserSetsList = () => {
  const { data, isLoading, isError, error } = useQuery<
    SetPersistanceData[] | null
  >({
    queryKey: [All_SETS_DATA],
    queryFn: () => getAllSetsPersistanceData(),
    staleTime: Infinity,
  });

  const renderSetsInformation = (
    setsInformation: SetPersistanceData[],
    allSetsData: DashboardSetInformationData[]
  ) => {
    return allSetsData.map((setData) => {
      const matchedSet = matchSets(setsInformation, setData);
      return (
        <li key={setData.setId}>
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

  const renderFutureSetsInformation = (
    futureSets: DashboardFutureSetInformationData[]
  ) => {
    return futureSets.map((set) => {
      return (
        <li key={set.setId}>
          <DashboardFutureSetsInformation
            dashboardFutureSetInformationData={set}
          />
        </li>
      );
    });
  };

  return (
    <>
      {isLoading && <SubmitIndicator size={150} />}
      {isError && <ErrorIndicator message={error.message} />}
      {!isLoading && !isError && (
        <UserSetsListWrapper>
          {renderSetsInformation(data || [], ALL_READY_SETS_INFORMATION_DATA)}
          {renderFutureSetsInformation(FUTURE_SETS_INFORMATION_DATA)}
        </UserSetsListWrapper>
      )}
    </>
  );
};

export default UserSetsList;
