import useTrainInstruction from "../../../../Hooks/useTrainInstruction";
import { memo, useMemo } from "react";
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
import MaterialsProvider from "../../../../Providers/materialsProvider";
import Floor from "../../Floor/Floor";
import Tracks from "../../Tracks/Tracks";
import OtherSceneElement from "../../OtherSceneElement/OtherSceneElement";
import {
  straight_Track_Old,
  curved_Track_Old,
  tracksMarkers_7722,
  train_Signal_Post,
  train_Direction_Switch_3218,
} from "../../../../LegoSets/Set7722V1/PartsImports";
import { instruction_textures_7722 } from "../../../../InstructionsTextures/Instruction_7722";

const SteamLocomotive_7722 = memo(() => {
  console.log("Rerender Locomotive");
  //Todo make Higher Order Component

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

  const getPersistenceUsedPartsDataForModel = (
    modelPersistenceData: ModelPersistenceData[] | null
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

  return (
    <>
      {modelsData && sceneMarkersInfo && (
        <>
          <SceneMarkers
            sceneMarkersInfo={sceneMarkersInfo}
            position={[0, 0, -550]}
          />
          <Tracks
            tracksMarkersFilePath={tracksMarkers_7722}
            straightTrackFilePath={straight_Track_Old}
            curvedTrackFilePath={curved_Track_Old}
          />

          <OtherSceneElement
            elementPath={train_Signal_Post}
            markerId="SignalPost"
            elementDescription="SignalPost"
          />

          <OtherSceneElement
            elementPath={train_Direction_Switch_3218}
            markerId="DestinationSwitch"
            elementDescription="DestinationSwitch"
          />
          <Instruction
            position={[-170, 0.1, 0]}
            instructionTextures={instruction_textures_7722}
          />

          <MaterialsProvider>
            <Floor />
            {renderModels(handleGetSetModelsToRenderList(), modelsData)}
            <group name={"LeftBlocks"}>
              {renderLegoParts(
                partsList,
                getPersistenceUsedPartsDataForModel(modelsData)
              )}
            </group>
          </MaterialsProvider>
        </>
      )}
    </>
  );
});

export default SteamLocomotive_7722;
