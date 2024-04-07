import { Mesh } from "three";
// @ts-expect-error Not a type
import modelBaseNest from "../../../assets/3D/ModelBaseNest/ModelBaseNest.glb";
import Nest from "../../3DModels/Nest/Nest";
import useElementContextmenu from "../../../Hooks/useElementContextMenu";
import Part from "../../3DModels/Part/Part";
import { steamLocomotivePartsList } from "../../../PartsLists/steamLocomotivePartsList";
import ModelBase from "../../3DModels/ModelBase/ModelBase";

const SteamLocomotive_7722 = () => {
  console.log("Rerender Locomotive");
  const { freeNestsToConnectElement } = useElementContextmenu();

  const renderParts = (partsList: string[]) => {
    return partsList.map((part, index) => {
      return <Part modelPath={part} key={index} />;
    });
  };

  const renderNests = (nests: Mesh[]) => {
    return nests.map((nest) => {
      return <Nest key={nest.uuid} nest={nest} />;
    });
  };

  return (
    <group>
      <group castShadow name={"FreeBlocks"}>
        {renderParts(steamLocomotivePartsList)}
      </group>
      <group name="BuiltModel">
        <ModelBase nestPath={modelBaseNest} position={[0, 0, 0]} />
      </group>
      <group name={"FreeNests"}>{renderNests(freeNestsToConnectElement)}</group>
    </group>
  );
};

export default SteamLocomotive_7722;
