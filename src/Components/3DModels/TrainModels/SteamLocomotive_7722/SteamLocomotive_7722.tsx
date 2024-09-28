import useTrainInstruction from "../../../../Hooks/useTrainInstruction";
import { useEffect, useMemo, useState } from "react";
import LegoPart from "../../LegoPart/LegoPart";
import ModelMarkers from "../../ModelMarkers/ModelMarkers";
import Instruction from "../../Instruction/Instruction";
import { LegoBlock } from "../../../../Types/LegoBlock";
import {
  ModelPersistanceData,
  PartPersistanceData,
} from "../../../../Classes/PersistanceModule";
import axios from "../../../../Api/axios";
import { AxiosError } from "axios";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
type ApiStatus = "Ready" | "Loading" | "Error" | "Idle";

const SteamLocomotive_7722 = () => {
  console.log("Rerender Locomotive");

  const [modelPersistanceData, setModelPersistanceData] = useState<
    ModelPersistanceData[] | undefined
  >(undefined);
  const [status, setStatus] = useState<ApiStatus>("Idle");

  const {
    handleGetPartsList,
    handleGetModelMarkersInfo,
    updateInstructionWithPersistanceData,
    handleGetSceneMarkersInfo,
  } = useTrainInstruction();

  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);

  const loadModelsPersistanceData = async () => {
    setStatus("Loading");
    try {
      const result = await axios.get<ModelPersistanceData[]>("/models");
      setModelPersistanceData(result.data);
      updateInstructionWithPersistanceData(result.data);
      setStatus("Ready");
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.message);
      setStatus("Error");
    }
  };

  useEffect(() => {
    loadModelsPersistanceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modelMarkersInfo = handleGetModelMarkersInfo();
  const sceneMarkersInfo = handleGetSceneMarkersInfo();

  const renderLegoParts = (
    partsList: LegoBlock[],
    persistentData: PartPersistanceData[] | undefined
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
    modelPersistanceData: ModelPersistanceData[] | undefined,
    modelMarkerId: string | undefined
  ) => {
    if (modelPersistanceData && modelMarkerId) {
      const modelData = modelPersistanceData.find((data) => {
        return data.modelName === modelMarkerId;
      });

      return modelData;
    }
  };

  return (
    <>
      <SceneMarkers
        sceneMarkersInfo={sceneMarkersInfo!}
        position={[0, 0.1, -550]}
      />
      {status === "Ready" && (
        <>
          {modelMarkersInfo && (
            <ModelMarkers
              modelMarkersInfo={modelMarkersInfo}
              persistanceData={
                getPersistanceDataForModel(
                  modelPersistanceData,
                  "SteamLocomotive7722Model"
                )?.markersData
              }
            />
          )}
          <group name={"LeftBlocks"}>
            {renderLegoParts(
              partsList,
              getPersistanceDataForModel(
                modelPersistanceData,
                "SteamLocomotive7722Model"
              )?.usedPartsData
            )}
          </group>
        </>
      )}
      <Instruction position={[-170, 0.1, 0]} />
    </>
  );
};

export default SteamLocomotive_7722;
