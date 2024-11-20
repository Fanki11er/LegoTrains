import useTrainInstruction from "../../../../Hooks/useTrainInstruction";
import { memo, useEffect, useMemo } from "react";
import LegoPart from "../../LegoPart/LegoPart";
import ModelMarkers from "../../ModelMarkers/ModelMarkers";
import Instruction from "../../Instruction/Instruction";
import { LegoBlock } from "../../../../Types/LegoBlock";
import {
  ModelPersistenceData,
  PartPersistenceData,
} from "../../../../Classes/PersistenceModule";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
import { Model } from "../../../../Classes/Model";
import usePersistenceDataProvider from "../../../../Hooks/usePersistenceDataProvider";

const SteamLocomotive_7722 = memo(() => {
  console.log("Rerender Locomotive");

  const {
    handleGetPartsList,
    updateInstructionWithPersistenceData,
    handleGetSceneMarkersInfo,
    handleGetSetModelsToRenderList,
  } = useTrainInstruction();

  const { modelsData } = usePersistenceDataProvider();

  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);

  useEffect(() => {
    modelsData && updateInstructionWithPersistenceData(modelsData);
  }, [modelsData, updateInstructionWithPersistenceData]);

  const renderModels = (
    models: Model[],
    modelPersistenceData: ModelPersistenceData[] | null
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
    modelPersistenceData: ModelPersistenceData[] | null,
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
  //Todo Fix
  return (
    <>
      {modelsData && sceneMarkersInfo && (
        <>
          <SceneMarkers
            sceneMarkersInfo={sceneMarkersInfo}
            position={[0, 4, -550]}
          />

          {renderModels(handleGetSetModelsToRenderList(), modelsData)}
          <group name={"LeftBlocks"}>
            {/*!!Fix this (problem when there will be many models) */}
            {renderLegoParts(
              partsList,
              getPersistenceDataForModel(modelsData, "SteamLocomotive7722Model")
                ?.usedPartsData
            )}
          </group>

          <Instruction position={[-170, 0.1, 0]} />
        </>
      )}
    </>
  );
});

export default SteamLocomotive_7722;
