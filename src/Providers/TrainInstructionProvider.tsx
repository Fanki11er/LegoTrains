import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
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

  const [activeModel, setActiveModel] = useState<Model | null>(() => {
    return instruction.getActiveModel();
  });

  const saveActiveModelWithTouchedModels = useCallback(
    (touchedModels: string[]) => {
      const models = touchedModels.map((id) => {
        return instruction.getModelByName(id);
      });

      handleSaveArrangedModelDataToDatabase(activeModel!);
      models.forEach((model) => {
        if (model) {
          handleSaveArrangedModelDataToDatabase(model, true);
        }
      });
    },
    [activeModel, handleSaveArrangedModelDataToDatabase, instruction]
  );

  const afterModelCreationFunction = useCallback(() => {
    const afterModelCreationFunction =
      activeModel?.getAfterModelCreationFunction();

    if (
      afterModelCreationFunction &&
      !activeModel?.getIsArrangedAfterCreation()
    ) {
      const modelRootMarker = instruction.getActiveModelMarkers();

      const result = afterModelCreationFunction(modelRootMarker, scene);

      activeModel?.setIsArrangedAfterCreation(true);

      if (result.status === "error") {
        throw new Error(
          `Error in afterModelCreationFunction: ${result.touchedModels.join(
            ", "
          )}`
        );
      }
      //!! Off for development
      //saveActiveModelWithTouchedModels(result.touchedModels);
    }
  }, [activeModel, instruction, scene, saveActiveModelWithTouchedModels]);

  useEffect(() => {
    afterModelCreationFunction();
  }, [afterModelCreationFunction]);

  instruction.getSceneLoader(getScene);

  const { modelsData } = usePersistenceDataProvider();

  const updateInstructionWithPersistenceData = useCallback(
    (data: ModelPersistenceData[]) => {
      if (instruction) {
        instruction.usePersistenceData(data);
        const isDataLoaded = instruction.getIsPersistenceDataLoaded();
        if (isDataLoaded) {
          setActiveModel(instruction.getActiveModel());
        }
      }
    },
    [instruction]
  );

  useEffect(() => {
    if (modelsData?.length) {
      updateInstructionWithPersistenceData(modelsData);
    } else {
      instruction.setIsPersistenceDataLoaded(true);
    }
  }, [modelsData, updateInstructionWithPersistenceData, instruction]);

  const handleGetPartsList = useCallback(() => {
    if (instruction) {
      return instruction.getActiveModelPartsList();
    }
    return [];
  }, [instruction]);

  const handleGetMarkerById = useCallback(
    (id: number) => {
      return instruction.getMarkerById(id);
    },
    [instruction]
  );

  const handleGetMarkersForSelectedPart = useCallback(
    (partType: string): Object3D<Object3DEventMap>[] => {
      //const activeModel = instruction.getActiveModel();
      if (activeModel) {
        return activeModel.getMarkersForSelectedPart(partType);
      }
      return [];
    },
    [activeModel]
  );

  const handleFinishPartConnection = useCallback(
    (marker: Object3D) => {
      const isPhaseEnded = instruction.finishPartConnection(marker);

      if (isPhaseEnded && marker) {
        const result = instruction.partsArrangeAfterPhaseEnd();

        if (result.status === "error") {
          throw new Error(
            `Error in afterPhaseEndArraignmentFunction: ${result.touchedModels.join(
              ", "
            )}`
          );
        }
        //!! Off for development
        //saveActiveModelWithTouchedModels(result.touchedModels);
      }
      return isPhaseEnded;
    },
    [instruction, saveActiveModelWithTouchedModels]
  );

  const handleGetSceneMarkersInfo = useCallback(() => {
    return instruction.getSceneMarkersInfo();
  }, [instruction]);

  const handleGetRootModelMarkerByName = useCallback(
    (rootMarkerName: string) => {
      if (instruction) {
        return instruction.getModelRootMarkerByName(rootMarkerName);
      }
      return undefined;
    },
    [instruction]
  );

  const handleGetSetModelsToRenderList = useCallback(() => {
    return instruction.getModelsReadyToRender();
  }, [instruction]);

  const handleMoveReadyModelToSetArrangement = useCallback(() => {
    try {
      const result = instruction.setFinalModelArrangement();
      if (result?.status === "success") {
        trackModelEvent("Model Arranged", result.oldModel.getModelName());
        //!! Off for development
        //saveActiveModelWithTouchedModels(result.otherModifiedModelsIds);

        setActiveModel(instruction.getActiveModel());
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
    instruction,
    navigate,
    trackModelEvent,
    saveActiveModelWithTouchedModels,
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
