import { createContext, PropsWithChildren, useCallback } from "react";
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
import { Html } from "@react-three/drei";
import SubmitIndicator from "../Components/Molecules/SubmitIndicator/SubmitIndicator";
import ErrorIndicator from "../Components/Molecules/ErrorIndicator/ErrorIndicator";

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
  const queryClient = useQueryClient();

  const {
    data: setData,
    isLoading: isSetDataLoading,
    error: setDataError,
  } = useQuery<SetPersistanceData | null>({
    queryKey: [SET_DATA, legoSetId],
    queryFn: () => getSetDataFromDatabase(legoSetId),
    staleTime: Infinity,
  });

  const {
    data: modelsData,
    isLoading: isModelsDataLoading,
    error: modelsDataError,
  } = useQuery<ModelPersistanceData[] | null>({
    queryKey: [MODELS_DATA, legoSetId],
    queryFn: () => getSetModelsDataFromDatabase(legoSetId),
    staleTime: Infinity,
  });

  const sendModelDataToDatabase = useCallback(
    async (data: ModelPersistanceData, modelsList: string[]) => {
      const foundModel = modelsList.find((model) => {
        return model === data.modelName;
      });
      if (foundModel) {
        updateModelInDatabase(legoSetId, data).then(() => {
          queryClient.invalidateQueries({
            queryKey: [MODELS_DATA, legoSetId],
          });
          queryClient.invalidateQueries({
            queryKey: [SET_DATA, legoSetId],
          });
        });
      } else {
        createNewModelData(legoSetId, data);
      }
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
  //Todo fix loaders
  return (
    <PersistanceDataContext.Provider value={context}>
      {isLoading && (
        <Html>
          <SubmitIndicator size={150} />
        </Html>
      )}
      {error && (
        <Html>
          <ErrorIndicator message={error.message} />
        </Html>
      )}

      {!isLoading && !error && children}
    </PersistanceDataContext.Provider>
  );
};

export default PersistanceDataProvider;
