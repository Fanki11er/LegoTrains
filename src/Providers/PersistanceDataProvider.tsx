import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import {
  getSetDataFromDatabase,
  getSetModelsDataFromDatabase,
} from "../firebase/readFromDbFunctions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import { MODELS_DATA, SET_DATA } from "../Api/queryKeys";
import {
  createNewModelData,
  updateModelInDatabase,
} from "../firebase/writeToDbFunctions";
import { checkIfIsErrors, checkIfIsLoading } from "../Utilities/utilities";
import SubmitIndicator from "../Components/Molecules/SubmitIndicator/SubmitIndicator";
import ErrorIndicator from "../Components/Molecules/ErrorIndicator/ErrorIndicator";
import { InSceneProceedStatus } from "../Components/Atoms/InSceneProceedStatus/InSceneProceedStatus.styles";
import { OperationStatus } from "../Types/OperationStatus";
import { FullCenterWrapper } from "../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";

export const PersistanceDataContext = createContext({
  handleSaveModelDataToDatabase: () => {},
  setData: null as SetPersistanceData | null | undefined,
  modelsData: null as ModelPersistanceData[] | null | undefined,
});

type Props = {
  instruction: TrainInstruction;
  legoSetId: string;
};

const PersistanceDataProvider = ({
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
  } = useQuery<SetPersistanceData | null>({
    queryKey: [SET_DATA, legoSetId],
    queryFn: () => getSetDataFromDatabase(legoSetId),
  });

  const {
    data: modelsData,
    isLoading: isModelsDataLoading,
    error: modelsDataError,
  } = useQuery<ModelPersistanceData[] | null>({
    queryKey: [MODELS_DATA, legoSetId],
    queryFn: () => getSetModelsDataFromDatabase(legoSetId),
  });

  const sendModelDataToDatabase = useCallback(
    (data: ModelPersistanceData, modelsList: string[]) => {
      const foundModel = modelsList.find((model) => {
        return model === data.modelName;
      });
      let timeout: null | NodeJS.Timeout = null;
      setStatus({ message: "Saving progress...", status: "proceed" });

      if (foundModel) {
        updateModelInDatabase(legoSetId, data)
          .then(() => {
            queryClient.invalidateQueries({
              queryKey: [MODELS_DATA, legoSetId],
            });
            queryClient.invalidateQueries({
              queryKey: [SET_DATA, legoSetId],
            });

            timeout = setTimeout(() => {
              setStatus(null);
            }, 2000);
          })
          .catch((err) => {
            setStatus({ message: err.message, status: "error" });
            timeout = setTimeout(() => {
              setStatus(null);
            }, 2000);
            //!! Set to logs
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
            }, 2000);
          })
          .catch((err) => {
            setStatus({ message: err.message, status: "error" });
            timeout = setTimeout(() => {
              setStatus(null);
            }, 2000);
            //!! Set to logs
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

  const context = {
    handleSaveModelDataToDatabase,
    setData,
    modelsData,
  };

  const isLoading = checkIfIsLoading([isModelsDataLoading, isSetDataLoading]);
  const error = checkIfIsErrors([modelsDataError, setDataError]);
  //!! Add return button
  return (
    <PersistanceDataContext.Provider value={context}>
      {isLoading && (
        <FullCenterWrapper>
          <SubmitIndicator size={150} />
        </FullCenterWrapper>
      )}
      {error && (
        <FullCenterWrapper>
          <ErrorIndicator message={error.message} />
        </FullCenterWrapper>
      )}
      {!isLoading && !error && children}
      <InSceneProceedStatus $show={!!status}>
        {status?.message}
      </InSceneProceedStatus>
    </PersistanceDataContext.Provider>
  );
};

export default PersistanceDataProvider;
