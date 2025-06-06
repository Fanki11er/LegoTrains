import {
  DashboardFutureSetInformationData,
  DashboardSetInformationData,
} from "../../../Types/DashboardSetInformationData";
import DashboardSetInformation from "../../Molecules/DashboardSetInformation/DashboardSetInformation";
import { UserSetsListWrapper } from "./UserSetsList.styles";
import { useQuery } from "@tanstack/react-query";
import { SetPersistenceData } from "../../../Classes/PersistenceModule";
import { getAllSetsPersistenceData } from "../../../firebase/readFromDbFunctions";
import { All_SETS_DATA } from "../../../Api/queryKeys";
import SubmitIndicator from "../../Molecules/SubmitIndicator/SubmitIndicator";
import {
  ALL_READY_SETS_INFORMATION_DATA,
  FUTURE_SETS_INFORMATION_DATA,
} from "../../../LegoSets/allSetsDashboardInformation";
import DashboardFutureSetsInformation from "../../Molecules/DashboardFutureSetsInformation/DashboardFutureSetsInformation";
import ErrorIndicator from "../../Molecules/ErrorIndicator/ErrorIndicator";
import ResetSetModal from "../../Molecules/ResetSetModal/ResetSetModal";
import { useCallback, useState } from "react";

const matchSets = (
  setsInformation: SetPersistenceData[],
  setData: DashboardSetInformationData
) => {
  return setsInformation.find((setInformation) => {
    return setInformation.setName === setData.setId;
  });
};

const UserSetsList = () => {
  const [setToReset, setSetToReset] = useState("");
  const { data, isLoading, isError, error } = useQuery<
    SetPersistenceData[] | null
  >({
    queryKey: [All_SETS_DATA],
    queryFn: () => getAllSetsPersistenceData(),
    staleTime: 60000,
  });

  const handleToggleModal = useCallback(
    (setId: string) => {
      if (setToReset) {
        setSetToReset("");
      } else {
        setSetToReset(setId);
      }
    },
    [setToReset]
  );

  const renderSetsInformation = (
    setsInformation: SetPersistenceData[],
    allSetsData: DashboardSetInformationData[]
  ) => {
    return allSetsData.map((setData) => {
      const matchedSet = matchSets(setsInformation, setData);
      return (
        <li key={setData.setId}>
          <DashboardSetInformation
            dashboardSetInformationData={setData}
            setInformationDTO={matchedSet}
            handleToggleResetModal={handleToggleModal}
          />
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
      {setToReset && (
        <ResetSetModal
          setId={setToReset}
          handleToggleModal={handleToggleModal}
        />
      )}
    </>
  );
};

export default UserSetsList;
