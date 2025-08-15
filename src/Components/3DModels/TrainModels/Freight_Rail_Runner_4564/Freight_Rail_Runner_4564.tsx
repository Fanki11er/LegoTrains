import { SCENE_OFFSET } from "../../../../Constants/sceneOffset";
import { instruction_textures_4564 } from "../../../../InstructionsTextures/Instruction_4564";
import MaterialsProvider from "../../../../Providers/MaterialsProvider";
import Floor from "../../Floor/Floor";
import Instruction from "../../Instruction/Instruction";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
import Tracks from "../../Tracks/Tracks";
import { TrainModelProps } from "../../TrainModel/TrainModel";
import {
  straight_Track_9V,
  curved_Track_9V,
  tracksMarkers_4564,
} from "../../../../LegoSets/Set4564V1/set4564PartsImports";

const tracksPaths = [straight_Track_9V, curved_Track_9V];

const [x, y, z] = SCENE_OFFSET;

const FreightRailRunner_4564 = ({
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
          tracksMarkersFilePath={tracksMarkers_4564}
          tracksTypesFilePaths={tracksPaths}
        />

        <MaterialsProvider>
          <Floor />
          <Instruction
            position={[-200, 0.1, 0]}
            instructionTextures={instruction_textures_4564}
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

export default FreightRailRunner_4564;
