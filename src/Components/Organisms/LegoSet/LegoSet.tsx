import { useParams } from "react-router-dom";
import Set722V1 from "../../../LegoSets/Set7722V1/Set722V1";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserSetsListFromDatabase } from "../../../firebase/readFromDbFunctions";
import { ExistingDataInfo } from "../../../Classes/PersistanceModule";
import { USER_SETS_LIST } from "../../../Api/queryKeys";
import { useEffect, useState } from "react";
import { createNewUserSet } from "../../../firebase/writeToDbFunctions";
import ErrorIndicator from "../../Molecules/ErrorIndicator/ErrorIndicator";
import SubmitIndicator from "../../Molecules/SubmitIndicator/SubmitIndicator";
import useAuth from "../../../Hooks/useAuth";
import { FullCenterWrapper } from "../../Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import {
  checkIfIsErrors,
  checkIfIsLoading,
} from "../../../Utilities/utilities";
import ErrorBoundary from "../../Molecules/ErrorBoundary/ErrorBoundary";
import ErrorFallback from "../../Molecules/ErrorFallback/ErrorFallback";
import { ERROR_FALLBACK_TEXT } from "../../../Constants/constants";

const LegoSet = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [legoSetId, setLegoSetId] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const {
    data: setsList,
    isLoading: isSetsListLoading,
    error: setsListError,
  } = useQuery<ExistingDataInfo[]>({
    queryKey: [USER_SETS_LIST],
    queryFn: () => getUserSetsListFromDatabase(),
    staleTime: Infinity,
  });

  const {
    mutate: createNewSet,
    isPending: isMutating,
    error: mutationError,
  } = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_SETS_LIST] });
    },
    mutationFn: () => createNewUserSet(id),
  });

  useEffect(() => {
    if (id && setsList && !currentUser?.isAnonymous) {
      const foundSet = setsList.find((set) => {
        return set === id;
      });
      if (foundSet) {
        setLegoSetId(foundSet);
      } else {
        createNewSet();
      }
    } else {
      setLegoSetId("");
    }
  }, [setsList, id, createNewSet, currentUser]);

  const isLoading = checkIfIsLoading([isSetsListLoading, isMutating]);
  const error = checkIfIsErrors([setsListError, mutationError]);

  return (
    <ErrorBoundary
      fallback={<ErrorFallback message={ERROR_FALLBACK_TEXT} />}
      save
    >
      {isLoading && (
        <FullCenterWrapper>
          <SubmitIndicator size={150} />
        </FullCenterWrapper>
      )}
      {error && (
        <FullCenterWrapper>
          <ErrorIndicator message={error.name} />
        </FullCenterWrapper>
      )}
      {legoSetId !== null && !isLoading && !error && (
        <>{id === "Set_7722_V1" && <Set722V1 legoSetId={legoSetId} />}</>
      )}
    </ErrorBoundary>
  );
};

export default LegoSet;
