import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import {
  getSetDataFromDatabase,
  getSetModelsDataFromDatabase,
} from "../firebase/readFromDbFunctions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ModelPersistenceData,
  SetPersistenceData,
} from "../Classes/PersistenceModule";
import { MODELS_DATA, SET_DATA } from "../Api/queryKeys";
import {
  createNewModelData,
  saveErrorLog,
  updateModelInDatabase,
} from "../firebase/writeToDbFunctions";
import { checkIfIsErrors, checkIfIsLoading } from "../Utilities/utilities";
import SubmitIndicator from "../Components/Molecules/SubmitIndicator/SubmitIndicator";
import ErrorIndicator from "../Components/Molecules/ErrorIndicator/ErrorIndicator";
import { InSceneProceedStatus } from "../Components/Atoms/InSceneProceedStatus/InSceneProceedStatus.styles";
import { OperationStatus } from "../Types/OperationStatus";
import { FullCenterWrapper } from "../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import { Model } from "../Classes/Model";

export const PersistenceDataContext = createContext({
  handleSaveModelDataToDatabase: () => {},
  handleSaveArrangedModelDataToDatabase: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _model: Model,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _doNotIncrementFinishedModelsNumber?: boolean
  ) => {},
  setData: null as SetPersistenceData | null | undefined,
  modelsData: null as ModelPersistenceData[] | null | undefined,
});

type Props = {
  instruction: TrainInstruction;
  legoSetId: string;
};

const PersistenceDataProvider = ({
  children,
  instruction,
  legoSetId,
}: PropsWithChildren & Props) => {
  const [status, setStatus] = useState<OperationStatus | null>(null);
  const queryClient = useQueryClient();

  const {
    data: setData,
    isLoading: isSetDataLoading,
    error: setDataError,
  } = useQuery<SetPersistenceData | null>({
    queryKey: [SET_DATA, legoSetId],
    queryFn: () => getSetDataFromDatabase(legoSetId),
    staleTime: 60000,
  });

  const {
    data: modelsData,
    isLoading: isModelsDataLoading,
    error: modelsDataError,
  } = useQuery<ModelPersistenceData[] | null>({
    queryKey: [MODELS_DATA, legoSetId],
    queryFn: () => getSetModelsDataFromDatabase(legoSetId),
    staleTime: 60000,
  });

  const sendModelDataToDatabase = useCallback(
    (
      data: ModelPersistenceData,
      modelsList: string[],
      doNotIncrementFinishedModelsNumber?: boolean
    ) => {
      const foundModel = modelsList.find((model) => {
        return model === data.modelName;
      });
      let timeout: null | NodeJS.Timeout = null;
      setStatus({ message: "Saving progress...", status: "proceed" });

      if (foundModel) {
        updateModelInDatabase(
          legoSetId,
          data,
          doNotIncrementFinishedModelsNumber
        )
          .then(() => {
            queryClient.invalidateQueries({
              queryKey: [MODELS_DATA, legoSetId],
            });
            queryClient.invalidateQueries({
              queryKey: [SET_DATA, legoSetId],
            });

            timeout = setTimeout(() => {
              setStatus(null);
            }, 1000);
          })
          .catch((err) => {
            setStatus({ message: err.name, status: "error" });
            saveErrorLog(err.message, legoSetId);

            console.error(err);
            timeout = setTimeout(() => {
              setStatus(null);
            }, 2000);
          });
      } else {
        createNewModelData(legoSetId, data)
          .then(() => {
            queryClient.invalidateQueries({
              queryKey: [MODELS_DATA, legoSetId],
            });
            queryClient.invalidateQueries({
              queryKey: [SET_DATA, legoSetId],
            });

            timeout = setTimeout(() => {
              setStatus(null);
            }, 1000);
          })
          .catch((err) => {
            setStatus({ message: err.name, status: "error" });

            saveErrorLog(err.message, legoSetId);
            timeout = setTimeout(() => {
              setStatus(null);
            }, 2000);
          });
      }
      return () => {
        if (timeout) window.clearTimeout(timeout);
      };
    },
    [legoSetId, queryClient]
  );

  const handleSaveModelDataToDatabase = useCallback(() => {
    if (instruction) {
      const data = instruction.prepareDataToSaveAfterPhaseEnd();
      if (data && setData) {
        sendModelDataToDatabase(data, setData?.modelsList || []);
      }
    }
  }, [sendModelDataToDatabase, instruction, setData]);

  const handleSaveArrangedModelDataToDatabase = useCallback(
    (model: Model, doNotIncrementFinishedModelsNumber?: boolean) => {
      if (instruction) {
        const data = instruction.prepareDataToSaveAfterModelArrangement(model);
        if (data && setData) {
          // sendModelDataToDatabase(
          //   data,
          //   setData?.modelsList || [],
          //   doNotIncrementFinishedModelsNumber
          // );
        }
      }
    },
    [sendModelDataToDatabase, instruction, setData]
  );

  const context = {
    handleSaveModelDataToDatabase,
    handleSaveArrangedModelDataToDatabase,
    setData,
    modelsData,
  };

  const isLoading = checkIfIsLoading([isModelsDataLoading, isSetDataLoading]);
  const error = checkIfIsErrors([modelsDataError, setDataError]);

  return (
    <PersistenceDataContext.Provider value={context}>
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
      {!isLoading && !error && children}
      <InSceneProceedStatus $show={!!status} $status={status?.status}>
        {status?.message}
      </InSceneProceedStatus>
    </PersistenceDataContext.Provider>
  );
};

export default PersistenceDataProvider;
