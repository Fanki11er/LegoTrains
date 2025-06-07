import { memo, useMemo } from "react";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import usePersistenceDataProvider from "../../../Hooks/usePersistenceDataProvider";
import { MarkersInfo, Model } from "../../../Classes/Model";
import {
  ModelPersistenceData,
  PartPersistenceData,
} from "../../../Classes/PersistenceModule";
import ModelMarkers from "../ModelMarkers/ModelMarkers";
import { LegoBlock } from "../../../Types/LegoBlock";
import LegoPart from "../LegoPart/LegoPart";

export type TrainModelProps = {
  modelsData: ModelPersistenceData[] | null | undefined;
  handleGetSetModelsToRenderList: () => Model[];
  partsList: LegoBlock[];
  renderModels: (
    models: Model[],
    modelPersistenceData: ModelPersistenceData[] | null | undefined
  ) => JSX.Element[];
  sceneMarkersInfo: MarkersInfo | null;
  getPersistenceUsedPartsDataForModel: (
    modelPersistenceData: ModelPersistenceData[] | null | undefined
  ) => PartPersistenceData[];
  renderLegoParts: (
    partsList: LegoBlock[],
    persistentData: PartPersistenceData[] | null | undefined
  ) => JSX.Element[];
};

type RenderProps = {
  model: (pops: TrainModelProps) => React.ReactNode;
};

const TrainModel = memo(({ model }: RenderProps) => {
  const {
    handleGetPartsList,
    handleGetSceneMarkersInfo,
    handleGetSetModelsToRenderList,
  } = useTrainInstruction();

  const { modelsData } = usePersistenceDataProvider();

  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);

  const renderModels = (
    models: Model[],
    modelPersistenceData: ModelPersistenceData[] | null | undefined
  ) => {
    return models.map((model) => {
      return (
        <ModelMarkers
          modelDataObject={model}
          key={model.getModelName()}
          persistenceData={getPersistenceDataForModel(
            modelPersistenceData,
            model.getModelName()
          )}
        />
      );
    });
  };

  const sceneMarkersInfo = handleGetSceneMarkersInfo();

  const renderLegoParts = (
    partsList: LegoBlock[],
    persistentData: PartPersistenceData[] | null | undefined
  ) => {
    return partsList.map((block) => {
      const savedData = persistentData?.find((part) => {
        return part.userData.partId === block.partId;
      });

      return (
        <LegoPart
          partInfo={block}
          key={block.partId}
          persistenceData={savedData}
        />
      );
    });
  };

  const getPersistenceDataForModel = (
    modelPersistenceData: ModelPersistenceData[] | null | undefined,
    modelMarkerId: string | undefined
  ) => {
    if (modelPersistenceData && modelMarkerId) {
      const modelData =
        modelPersistenceData.find((data) => {
          return data.modelName === modelMarkerId;
        }) || null;

      return modelData;
    }
    return null;
  };

  const getPersistenceUsedPartsDataForModel = (
    modelPersistenceData: ModelPersistenceData[] | null | undefined
  ) => {
    const usedPartsData: PartPersistenceData[] = [];
    modelPersistenceData?.forEach((model) => {
      const data = model.usedPartsData;
      if (data) {
        usedPartsData.push(...model.usedPartsData);
      }
    });
    return usedPartsData;
  };

  return model({
    modelsData,
    handleGetSetModelsToRenderList,
    partsList,
    renderModels,
    sceneMarkersInfo,
    getPersistenceUsedPartsDataForModel,
    renderLegoParts,
  });
});

export default TrainModel;
