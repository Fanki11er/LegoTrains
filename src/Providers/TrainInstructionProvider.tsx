import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import { useThree } from "@react-three/fiber";
import { Object3D, Object3DEventMap } from "three";
import { MarkersInfo, Model } from "../Classes/Model";
import { LegoBlock } from "../Types/LegoBlock";
import { ModelPersistanceData } from "../Classes/PersistanceModule";
import usePersistanceDataProvider from "../Hooks/usePersistanceDataProvider";

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
  handleGetSetModelsToRenderList: (): Model[] => [],
  handleGetSceneMarkersInfo: () => null as MarkersInfo | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGetRootModelMarkerByName: (_rootMarkerName: string) =>
    undefined as Object3D<Object3DEventMap> | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateInstructionWithPersistanceData: (_data: ModelPersistanceData[]) => {},
  handleMoveReadyModelToSetArrangement: () => {},
  handleGetSetRootMarker: () =>
    undefined as Object3D<Object3DEventMap> | undefined,
});

type InstructionData = {
  instruction: TrainInstruction;
};

const TrainInstructionProvider = (
  props: PropsWithChildren & InstructionData
) => {
  console.log("RenderInstructionProvider");
  const { children, instruction } = props;
  const { scene } = useThree();
  const { handleSaveModelDataToDatabase } = usePersistanceDataProvider();

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

  const handleGetSceneMarkersInfo = useCallback(() => {
    return trainInstruction.current.getSceneMarkersInfo();
  }, []);

  const handleGetRootModelMarkerByName = useCallback(
    (rootMarkerName: string) => {
      if (trainInstruction.current) {
        return trainInstruction.current.getModelRootMarkerByName(
          rootMarkerName
        );
      }
      return undefined;
    },
    []
  );

  const updateInstructionWithPersistanceData = useCallback(
    (data: ModelPersistanceData[]) => {
      if (trainInstruction.current) {
        trainInstruction.current.usePersistanceData(data);
      }
    },
    []
  );

  const handleGetSetModelsToRenderList = useCallback(() => {
    return instruction.getModelsReadyToRender();
  }, [instruction]);

  const handleMoveReadyModelToSetArrangement = useCallback(() => {
    const result = instruction.moveReadyModelToSetArrangement();
    if (result) {
      handleSaveModelDataToDatabase();
    }
    //Todo: Make arrangement of model
  }, [handleSaveModelDataToDatabase, instruction]);

  const handleGetSetRootMarker = useCallback(() => {
    return instruction.getSetRootMarker();
  }, [instruction]);

  const context = {
    handleGetPartsList,
    handleGetMarkersForSelectedPart,
    handleGetMarkerById,
    handleFinishPartConnection,
    handleGetSetModelsToRenderList,
    handleGetSceneMarkersInfo,
    handleGetRootModelMarkerByName,
    updateInstructionWithPersistanceData,
    handleMoveReadyModelToSetArrangement,
    handleGetSetRootMarker,
  };

  return (
    <TrainInstructionContext.Provider value={context}>
      {children}
    </TrainInstructionContext.Provider>
  );
};

export default TrainInstructionProvider;
