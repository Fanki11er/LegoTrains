import Instruction from "../../Instruction/Instruction";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
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
import { TrainModelProps } from "../../TrainModel/TrainModel";
import MaterialsProvider from "../../../../Providers/materialsProvider";

const SteamLocomotive_7722 = ({
  modelsData,
  partsList,
  sceneMarkersInfo,
  renderLegoParts,
  renderModels,
  handleGetSetModelsToRenderList,
  getPersistenceUsedPartsDataForModel,
}: TrainModelProps) => {
  return (
    modelsData &&
    sceneMarkersInfo && (
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
    )
  );
};

export default SteamLocomotive_7722;
