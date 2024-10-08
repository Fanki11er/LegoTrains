import { createContext, PropsWithChildren, useCallback } from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import {
  getSetDataFromDatabase,
  getSetModelsDataFromDatabase,
} from "../firebase/readFromDbFunctions";
import { useQuery } from "@tanstack/react-query";
import {
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import { MODELS_DATA, SET_DATA } from "../Api/queryKeys";
import {
  createNewModelData,
  updateModelInDatabase,
} from "../firebase/writeToDbFuncions";

export const PersistanceDataContext = createContext({
  handleSaveModelDataToDatabase: () => {},
  setData: undefined as SetPersistanceData | undefined,
  modelsData: undefined as ModelPersistanceData[] | undefined,
  isLoading: false,
  isError: false,
  error: null as Error | null,
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
  console.log("RenderPersistanceProvider");

  const {
    data: setData,
    isLoading: isSetDataLoading,
    isError: isSetDataError,
    error: setDataError,
  } = useQuery<SetPersistanceData | undefined>({
    queryKey: [SET_DATA, legoSetId],
    queryFn: () => getSetDataFromDatabase(legoSetId),
    staleTime: Infinity,
  });

  const {
    data: modelsData,
    isLoading: isModelsDataLoading,
    isError: isModelsError,
    error: modelsDataError,
  } = useQuery<ModelPersistanceData[] | undefined>({
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
        updateModelInDatabase(legoSetId, data);
      } else {
        createNewModelData(legoSetId, data);
      }
    },
    [legoSetId]
  );

  const handleSaveModelDataToDatabase = useCallback(() => {
    if (instruction) {
      const data = instruction.prepareDataToSaveAfterPhaseEnd();
      if (data && setData) {
        sendModelDataToDatabase(data, setData?.modelsList);
      }
    }
  }, [sendModelDataToDatabase, instruction, setData]);

  const context = {
    handleSaveModelDataToDatabase,
    setData,
    modelsData,
    isLoading: isSetDataLoading,
    isError: isSetDataError,
    error: setDataError,
  };

  return (
    <PersistanceDataContext.Provider value={context}>
      {children}
    </PersistanceDataContext.Provider>
  );
};

export default PersistanceDataProvider;
