import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import { useThree } from "@react-three/fiber";
import { Object3D, Object3DEventMap } from "three";
import { MarkersInfo, Model } from "../Classes/Model";
import { LegoBlock } from "../Types/LegoBlock";
import { ModelPersistenceData } from "../Classes/PersistenceModule";
import usePersistenceDataProvider from "../Hooks/usePersistenceDataProvider";
import { PartsArraignmentFunctionsTypes } from "../Utilities/partsAfterConnectionFunctions";
import { paths } from "../router/routerPaths";
import { useNavigate } from "react-router-dom";
import useAnalytics from "../Hooks/useAnalytics";

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
  updateInstructionWithPersistenceData: (_data: ModelPersistenceData[]) => {},
  handleMoveReadyModelToSetArrangement: () => {},
  handleGetSetRootMarker: () =>
    undefined as Object3D<Object3DEventMap> | undefined,
  handleArrangePartAfterConnection: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _model: Object3D<Object3DEventMap>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _arraignmentFunctionName: PartsArraignmentFunctionsTypes
  ) => {},
  handleGetShouldByHelperVisible: (): boolean => true,
  handleCheckIfSetIsFinished: (): boolean => false,
  handleGetLegoSetNumber: (): string => "",
});

type InstructionData = {
  instruction: TrainInstruction;
};

const TrainInstructionProvider = (
  props: PropsWithChildren & InstructionData
) => {
  const { children, instruction } = props;
  const navigate = useNavigate();
  const { scene } = useThree();
  const { handleSaveArrangedModelDataToDatabase } =
    usePersistenceDataProvider();

  const { trackModelEvent } = useAnalytics();

  const getScene = () => {
    return scene;
  };

  const trainInstruction = useMemo(() => {
    return instruction;
  }, [instruction]);

  trainInstruction.getSceneLoader(getScene);

  const { modelsData } = usePersistenceDataProvider();

  const updateInstructionWithPersistenceData = useCallback(
    (data: ModelPersistenceData[]) => {
      if (trainInstruction) {
        trainInstruction.usePersistenceData(data);
      }
    },
    [trainInstruction]
  );

  useEffect(() => {
    if (modelsData?.length) {
      updateInstructionWithPersistenceData(modelsData);
    } else {
      instruction.setIsPersistenceDataLoaded(true);
    }
  }, [modelsData, updateInstructionWithPersistenceData, instruction]);

  const handleGetPartsList = useCallback(() => {
    if (trainInstruction) {
      return trainInstruction.getActiveModelPartsList();
    }
    return [];
  }, [trainInstruction]);

  const handleGetMarkerById = useCallback(
    (id: number) => {
      return trainInstruction.getMarkerById(id);
    },
    [trainInstruction]
  );

  const handleGetMarkersForSelectedPart = useCallback(
    (partType: string): Object3D<Object3DEventMap>[] => {
      const activeModel = trainInstruction.getActiveModel();
      if (activeModel) {
        return activeModel.getMarkersForSelectedPart(partType);
      }
      return [];
    },
    [trainInstruction]
  );

  const handleFinishPartConnection = useCallback(
    (marker: Object3D) => {
      const isPhaseEnded = trainInstruction.finishPartConnection(marker);
      return isPhaseEnded;
    },
    [trainInstruction]
  );

  const handleGetSceneMarkersInfo = useCallback(() => {
    return trainInstruction.getSceneMarkersInfo();
  }, [trainInstruction]);

  const handleGetRootModelMarkerByName = useCallback(
    (rootMarkerName: string) => {
      if (trainInstruction) {
        return trainInstruction.getModelRootMarkerByName(rootMarkerName);
      }
      return undefined;
    },
    [trainInstruction]
  );

  const handleGetSetModelsToRenderList = useCallback(() => {
    return instruction.getModelsReadyToRender();
  }, [instruction]);

  const handleMoveReadyModelToSetArrangement = useCallback(() => {
    try {
      const result = instruction.setFinalModelArrangement();
      if (result) {
        trackModelEvent("Model Arranged", result.oldModel.getModelName());
        const touchedModels = result.otherModifiedModelsIds.map((id) => {
          return instruction.getModelByName(id);
        });

        handleSaveArrangedModelDataToDatabase(result.oldModel);
        touchedModels.forEach((model) => {
          if (model) {
            handleSaveArrangedModelDataToDatabase(model, true);
          }
        });
      }
    } catch (err) {
      const error = err as Error;
      navigate(paths.errorPath, {
        state: {
          error: error.message,
        },
      });
    }
  }, [
    handleSaveArrangedModelDataToDatabase,
    instruction,
    navigate,
    trackModelEvent,
  ]);

  const handleGetSetRootMarker = useCallback(() => {
    return instruction.getSetRootMarker();
  }, [instruction]);

  const handleArrangePartAfterConnection = (
    model: Object3D<Object3DEventMap>,
    arraignmentFunctionName: PartsArraignmentFunctionsTypes
  ) => {
    try {
      instruction.arrangePartAfterConnection(model, arraignmentFunctionName);
    } catch (err) {
      const error = err as Error;

      navigate(paths.errorPath, {
        state: {
          error: error.message,
        },
      });
    }
  };

  const handleGetShouldByHelperVisible = useCallback(() => {
    return instruction.getShouldByHelperVisible();
  }, [instruction]);

  const handleCheckIfSetIsFinished = useCallback(() => {
    return instruction.checkIfSetIsFinished();
  }, [instruction]);

  const handleGetLegoSetNumber = useCallback(() => {
    return instruction.getLegoSetNumber();
  }, [instruction]);

  const context = {
    handleGetPartsList,
    handleGetMarkersForSelectedPart,
    handleGetMarkerById,
    handleFinishPartConnection,
    handleGetSetModelsToRenderList,
    handleGetSceneMarkersInfo,
    handleGetRootModelMarkerByName,
    updateInstructionWithPersistenceData,
    handleMoveReadyModelToSetArrangement,
    handleGetSetRootMarker,
    handleArrangePartAfterConnection,
    handleGetShouldByHelperVisible,
    handleCheckIfSetIsFinished,
    handleGetLegoSetNumber,
  };

  return (
    <TrainInstructionContext.Provider value={context}>
      {instruction.getIsPersistenceDataLoaded() && children}
    </TrainInstructionContext.Provider>
  );
};

export default TrainInstructionProvider;
