import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
//import { PartInfo } from "../Types/PartInfo";
import { useThree } from "@react-three/fiber";
import { Object3D, Object3DEventMap } from "three";
import { ModelMarkersInfo } from "../Classes/Model";
import { LegoBlock } from "../Types/LegoBlock";
import { ModelPersistanceData } from "../Classes/PersistanceModule";
import axios from "../Api/axios";

export const TrainInstructionContext = createContext({
  handleGetPartsList: (): LegoBlock[] => [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGetMarkersForSelectedPart: (_partId: string) =>
    [] as Object3D<Object3DEventMap>[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGetMarkerById: (_id: number) =>
    undefined as Object3D<Object3DEventMap> | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleFinishPartConnection: (_marker: Object3D): boolean => false,
  handleGetModelMarkersInfo: () => null as ModelMarkersInfo | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGetRootModelMarkerByName: (_rootMarkerName: string) =>
    undefined as Object3D<Object3DEventMap> | undefined,
  handleSaveModelDataToDatabase: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateInstructionWithPersistanceData: (_data: ModelPersistanceData[]) => {},
});

type InstructionData = {
  instruction: TrainInstruction;
};

const TrainInstructionProvider = (
  props: PropsWithChildren & InstructionData
) => {
  const { children, instruction } = props;
  const { scene } = useThree();

  const trainInstruction = useRef(instruction);

  useEffect(() => {
    if (
      trainInstruction.current &&
      !trainInstruction.current.getIsSceneLoaded()
    ) {
      trainInstruction.current.loadScene(scene);
    }
  }, [scene]);

  const handleGetPartsList = useCallback(() => {
    if (trainInstruction.current) {
      return trainInstruction.current.getActiveModelPartsList();
    }
    return [];
  }, []);

  const handleGetMarkerById = useCallback((id: number) => {
    return trainInstruction.current.getMarkerById(id);
  }, []);

  const handleGetMarkersForSelectedPart = useCallback(
    (partType: string): Object3D<Object3DEventMap>[] => {
      const activeModel = trainInstruction.current.getActiveModel();
      if (activeModel) {
        return activeModel.getMarkersForSelectedPart(partType);
      }
      return [];
    },
    []
  );

  const handleFinishPartConnection = useCallback((marker: Object3D) => {
    const isPhaseEnded = trainInstruction.current.finishPartConnection(marker);
    return isPhaseEnded;
  }, []);

  const handleGetModelMarkersInfo = useCallback(() => {
    const activeModel = trainInstruction.current.getActiveModel();
    if (activeModel) {
      return activeModel.getModelMarkersInfo();
    }
    return null;
  }, []);

  const handleGetRootModelMarkerByName = (rootMarkerName: string) => {
    if (trainInstruction.current) {
      return trainInstruction.current.getModelRootMarkerByName(rootMarkerName);
    }
    return undefined;
  };

  const handleSaveModelDataToDatabase = () => {
    if (trainInstruction.current) {
      const data = trainInstruction.current.prepareDataToSaveAfterPhaseEnd();
      if (data) {
        sendDataToDatabase(data);
      }
    }
  };

  const sendDataToDatabase = async (data: ModelPersistanceData) => {
    const savedModels = await axios.get<{ modelName: string; id: string }[]>(
      "/modelsList"
    );
    const foundModel = savedModels.data.find((model) => {
      return model.modelName === data.modelName;
    });

    if (foundModel) {
      axios.patch(`/models/${foundModel.id}`, data);
    } else {
      const info = await axios.post("/models", data);
      await axios.post("/modelsList", {
        modelName: data.modelName,
        id: info.data.id,
      });
    }
  };

  const updateInstructionWithPersistanceData = (
    data: ModelPersistanceData[]
  ) => {
    if (trainInstruction.current) {
      trainInstruction.current.usePersistanceData(data);
    }
  };

  const context = {
    handleGetPartsList,
    handleGetMarkersForSelectedPart,
    handleGetMarkerById,
    handleFinishPartConnection,
    handleGetModelMarkersInfo,
    handleGetRootModelMarkerByName,
    handleSaveModelDataToDatabase,
    updateInstructionWithPersistanceData,
  };

  return (
    <TrainInstructionContext.Provider value={context}>
      {children}
    </TrainInstructionContext.Provider>
  );
};

export default TrainInstructionProvider;
