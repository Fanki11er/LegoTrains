import { SCENE_OFFSET } from "../../../../Constants/sceneOffset";
import { instruction_textures_4536 } from "../../../../InstructionsTextures/Instruction_4536";
import { train_Track_9V_Straight_2865 } from "../../../../PartsImports/Train_Track_9V_Straight_2865";
import tracksMarkers_4536 from "../../../../assets/Set_4536_V1/ModelsMarkers/Tracks4536/TracksMarkers_4536.glb";
import MaterialsProvider from "../../../../Providers/MaterialsProvider";
import Floor from "../../Floor/Floor";
import Instruction from "../../Instruction/Instruction";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
import Tracks from "../../Tracks/Tracks";
import { TrainModelProps } from "../../TrainModel/TrainModel";
import Tutorial from "../../../Organisms/Tutorial/Tutorial";

const tracksPaths = [train_Track_9V_Straight_2865];

const [x, y, z] = SCENE_OFFSET;

const BlueHopperCar_4536 = ({
  modelsData,
  partsList,
  sceneMarkersInfo,
  renderLegoParts,
  renderModels,
  handleGetSetModelsToRenderList,
  getPersistenceUsedPartsDataForModel,
}: TrainModelProps) => {
  return (
    sceneMarkersInfo && (
      <>
        <SceneMarkers
          sceneMarkersInfo={sceneMarkersInfo}
          position={[x, y, z]}
        />

        <Tracks
          tracksMarkersFilePath={tracksMarkers_4536}
          tracksTypesFilePaths={tracksPaths}
        />

        <MaterialsProvider>
          <Floor />
          <Instruction
            position={[-250, 0.1, 0]}
            instructionTextures={instruction_textures_4536}
            rotation={-90}
          />

          {renderModels(handleGetSetModelsToRenderList(), modelsData)}
          <group name={"LeftBlocks"}>
            {renderLegoParts(
              partsList,
              getPersistenceUsedPartsDataForModel(modelsData)
            )}
          </group>
        </MaterialsProvider>
        <Tutorial />
      </>
    )
  );
};

export default BlueHopperCar_4536;
