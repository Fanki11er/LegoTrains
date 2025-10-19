import { SCENE_OFFSET } from "../../../../Constants/sceneOffset";
import { instruction_textures_4564 } from "../../../../InstructionsTextures/Instruction_4564";
import { train_Track_9V_Curved_2867 } from "../../../../PartsImports/Train_Track_9V_Curved_2867";
import { train_Track_9V_Straight_2865 } from "../../../../PartsImports/Train_Track_9V_Straight_2865";
import tracksMarkers_4564 from "../../../../assets/Set_4564_V1/ModelsMarkers/Tracks4564/TracksMarkers_4564.glb";
import MaterialsProvider from "../../../../Providers/MaterialsProvider";
import Floor from "../../Floor/Floor";
import Instruction from "../../Instruction/Instruction";
import SceneMarkers from "../../SceneMarkers/SceneMarkers";
import Tracks from "../../Tracks/Tracks";
import { TrainModelProps } from "../../TrainModel/TrainModel";
import OtherSceneElement from "../../OtherSceneElement/OtherSceneElement";
import { train_Speed_Controller_9v } from "../../../../PartsImports/Electric_Train_Speed_Regulator_9v_Complete_Assembly_2868b";
import { train_Track_Contacts_with_Wire_4564 } from "../../../../PartsImports/Electric_Train_Track_Contacts_with_Wire_Set_4564_5306c01";

const tracksPaths = [train_Track_9V_Straight_2865, train_Track_9V_Curved_2867];

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

        <OtherSceneElement
          elementPath={train_Speed_Controller_9v}
          markerId="SpeedController"
          elementDescription="Speed Controller"
        />
        <OtherSceneElement
          elementPath={train_Track_Contacts_with_Wire_4564}
          markerId="TrackContacts"
          elementDescription="Track Contacts"
          doNotMoveToFloorLevel={true}
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
