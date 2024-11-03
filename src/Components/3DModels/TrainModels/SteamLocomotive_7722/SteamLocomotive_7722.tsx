import useTrainInstruction from "../../../../Hooks/useTrainInstruction";
import { useEffect, useMemo } from "react";
import LegoPart from "../../LegoPart/LegoPart";
import ModelMarkers from "../../ModelMarkers/ModelMarkers";
import Instruction from "../../Instruction/Instruction";
import { LegoBlock } from "../../../../Types/LegoBlock";
import {
  ModelPersistanceData,
  PartPersistanceData,
} from "../../../../Classes/PersistanceModule";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
import { Model } from "../../../../Classes/Model";
import usePersistanceDataProvider from "../../../../Hooks/usePersistanceDataProvider";

const SteamLocomotive_7722 = () => {
  console.log("Rerender Locomotive");

  const {
    handleGetPartsList,
    updateInstructionWithPersistanceData,
    handleGetSceneMarkersInfo,
    handleGetSetModelsToRenderList,
  } = useTrainInstruction();

  const { modelsData } = usePersistanceDataProvider();

  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);

  useEffect(() => {
    modelsData && updateInstructionWithPersistanceData(modelsData);
  }, [modelsData, updateInstructionWithPersistanceData]);

  const renderModels = (
    models: Model[],
    modelPersistanceData: ModelPersistanceData[] | null
  ) => {
    return models.map((model) => {
      return (
        <ModelMarkers
          modelDataObject={model}
          key={model.getModelName()}
          persistanceData={getPersistanceDataForModel(
            modelPersistanceData,
            model.getModelName()
          )}
        />
      );
    });
  };

  const sceneMarkersInfo = handleGetSceneMarkersInfo();

  const renderLegoParts = (
    partsList: LegoBlock[],
    persistentData: PartPersistanceData[] | null | undefined
  ) => {
    return partsList.map((block) => {
      const savedData = persistentData?.find((part) => {
        return part.userData.partId === block.partId;
      });

      return (
        <LegoPart
          partInfo={block}
          key={block.partId}
          persistanceData={savedData}
        />
      );
    });
  };

  const getPersistanceDataForModel = (
    modelPersistanceData: ModelPersistanceData[] | null,
    modelMarkerId: string | undefined
  ) => {
    if (modelPersistanceData && modelMarkerId) {
      const modelData =
        modelPersistanceData.find((data) => {
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
              getPersistanceDataForModel(modelsData, "SteamLocomotive7722Model")
                ?.usedPartsData
            )}
          </group>

          <Instruction position={[-170, 0.1, 0]} />
        </>
      )}
    </>
  );
};

export default SteamLocomotive_7722;
