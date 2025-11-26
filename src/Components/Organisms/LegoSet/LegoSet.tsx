import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserSetsListFromDatabase } from "../../../firebase/readFromDbFunctions";
import { ExistingDataInfo } from "../../../Classes/PersistenceModule";
import { USER_SETS_LIST } from "../../../Api/queryKeys";
import { lazy, useEffect, useState } from "react";
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
import Experience from "../../3DModels/Experience/Experience";
import { createSet7722V1Instruction } from "../../../LegoSets/Set7722V1/set7722V1Instruction";
import { createSet4552V1Instruction } from "../../../LegoSets/Set4552V1/set4552V1Instruction";
import CargoCrain_4552 from "../../3DModels/TrainModels/CargoCrain_4552/CargoCrain_4552";
import { createSet4564V1Instruction } from "../../../LegoSets/Set4564V1/set4564V1Instruction";
import FreightRailRunner_4564 from "../../3DModels/TrainModels/Freight_Rail_Runner_4564/Freight_Rail_Runner_4564";
import { createSet4536V1Instruction } from "../../../LegoSets/Set4536V1/set4536V1Instruction";
import BlueHopperCar_4536 from "../../3DModels/TrainModels/Blue_Hopper_Car_4536/Blue_Hopper_Car_4536";

const SteamLocomotive_7722 = lazy(
  () =>
    import(
      "../../3DModels/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722"
    )
);

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

  const renderSelectedSet = (id: string, legoSetId: string) => {
    switch (id) {
      case "Set_7722_V1":
        return (
          <Experience
            legoSetId={legoSetId}
            createInstruction={createSet7722V1Instruction}
            model={(props) => <SteamLocomotive_7722 {...props} />}
          />
        );
      case "Set_4552_V1":
        return (
          <Experience
            legoSetId={legoSetId}
            createInstruction={createSet4552V1Instruction}
            model={(props) => <CargoCrain_4552 {...props} />}
          />
        );
      case "Set_4564_V1":
        return (
          <Experience
            legoSetId={legoSetId}
            createInstruction={createSet4564V1Instruction}
            model={(props) => <FreightRailRunner_4564 {...props} />}
          />
        );
      case "Set_4536_V1":
        return (
          <Experience
            legoSetId={legoSetId}
            createInstruction={createSet4536V1Instruction}
            model={(props) => <BlueHopperCar_4536 {...props} />}
          />
        );
      default:
        throw new Error("Set not found");
    }
  };

  return (
    <ErrorBoundary
      fallback={<ErrorFallback message={ERROR_FALLBACK_TEXT} />}
      save
      setId={id}
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
      {legoSetId !== null &&
        id &&
        !isLoading &&
        !error &&
        renderSelectedSet(id, legoSetId)}
    </ErrorBoundary>
  );
};

export default LegoSet;
