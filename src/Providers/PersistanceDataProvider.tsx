import { createContext, PropsWithChildren, useCallback } from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import { getSetDataFromDatabase } from "../firebase/readFromDbFunctions";
import { useQuery } from "@tanstack/react-query";
import {
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import { SET_DATA } from "../Api/queryKeys";
import { createNewModelData } from "../firebase/writeToDbFuncions";

export const PersistanceDataContext = createContext({
  handleSaveModelDataToDatabase: () => {},
  setData: undefined as SetPersistanceData | undefined,
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

  //!!!!!!
  // const sendDataToDatabase = useCallback(async (data: ModelPersistanceData) => {
  //   const savedModels = await axios.get<{ modelName: string; id: string }[]>(
  //     "/modelsList"
  //   );
  //   const foundModel = savedModels.data.find((model) => {
  //     return model.modelName === data.modelName;
  //   });

  //   if (foundModel) {
  //     axios.patch(`/models/${foundModel.id}`, data);
  //   } else {
  //     const info = await axios.post("/models", data);
  //     await axios.post("/modelsList", {
  //       modelName: data.modelName,
  //       id: info.data.id,
  //     });
  //   }
  // }, []);

  const sendDataToDatabase = useCallback(
    async (data: ModelPersistanceData, modelsList: string[]) => {
      const foundModel = modelsList.find((model) => {
        return model === data.modelName;
      });
      if (foundModel) {
        //axios.patch(`/models/${foundModel.id}`, data);
      } else {
        createNewModelData(legoSetId, data);
        // const info = await axios.post("/models", data);
        // await axios.post("/modelsList", {
        //   modelName: data.modelName,
        //   id: info.data.id,
        // });
      }
    },
    [legoSetId]
  );

  const handleSaveModelDataToDatabase = useCallback(() => {
    console.log("SEND");
    if (instruction) {
      const data = instruction.prepareDataToSaveAfterPhaseEnd();
      if (data && setData) {
        sendDataToDatabase(data, setData?.modelsList);
      }
    }
  }, [sendDataToDatabase, instruction, setData]);

  const context = {
    handleSaveModelDataToDatabase,
    setData,
    isLoading: isSetDataLoading,
    isError: isSetDataError,
    error: setDataError,
  };

  return (
    <PersistanceDataContext.Provider value={context}>
      {setData && children}
    </PersistanceDataContext.Provider>
  );
};

export default PersistanceDataProvider;
