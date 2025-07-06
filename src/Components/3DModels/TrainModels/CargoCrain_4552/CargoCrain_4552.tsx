import { SCENE_OFFSET } from "../../../../Constants/sceneOffset";
import { instruction_textures_4552 } from "../../../../InstructionsTextures/Instruction_4552";
import MaterialsProvider from "../../../../Providers/MaterialsProvider";
import Floor from "../../Floor/Floor";
import Instruction from "../../Instruction/Instruction";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
import { TrainModelProps } from "../../TrainModel/TrainModel";

//const tracksPaths = [straight_Track_Old, curved_Track_Old];

const [x, y, z] = SCENE_OFFSET;

const CargoCrain_4552 = ({
  modelsData,
  partsList,
  sceneMarkersInfo,
  renderLegoParts,
  renderModels,
  handleGetSetModelsToRenderList,
  getPersistenceUsedPartsDataForModel,
}: TrainModelProps) => {
  //useTrackPageView("SteamLocomotive_7722 Experience");

  return (
    sceneMarkersInfo && (
      <>
        <SceneMarkers
          sceneMarkersInfo={sceneMarkersInfo}
          position={[x, y, z]}
        />

        {/* <Tracks
          tracksMarkersFilePath={tracksMarkers_7722}
          tracksTypesFilePaths={tracksPaths}
        /> */}

        {/* <OtherSceneElement
          elementPath={train_Signal_Post}
          markerId="SignalPost"
          elementDescription="SignalPost"
        /> */}

        {/* <OtherSceneElement
          elementPath={train_Direction_Switch_3218}
          markerId="DestinationSwitch"
          elementDescription="DestinationSwitch"
        /> */}

        <MaterialsProvider>
          <Floor />
          <Instruction
            position={[-170, 0.1, 0]}
            instructionTextures={instruction_textures_4552}
          />
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

export default CargoCrain_4552;
