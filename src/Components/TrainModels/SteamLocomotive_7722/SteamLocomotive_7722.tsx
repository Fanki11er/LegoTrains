import { Mesh } from "three";
// @ts-expect-error Not a type
import modelBaseNest from "../../../assets/3D/ModelBaseNest/ModelBaseNest.glb";
import Nest from "../../3DModels/Nest/Nest";
import { steamLocomotivePartsList } from "../../../PartsLists/steamLocomotivePartsList";
import ModelBase from "../../3DModels/ModelBase/ModelBase";
import Floor from "../../3DModels/Floor/Floor";
import LegoPart from "../../LegoPart/LegoPart";
//import { useThree } from "@react-three/fiber";
//import { useEffect } from "react";
import { PartInfo } from "../../../Types/PartInfo";
import useElementsManipulations from "../../../Hooks/useElementsManipulations";

const SteamLocomotive_7722 = () => {
  //console.log("Rerender Locomotive");

  //const { scene } = useThree();
  const { freeNestsToConnectElement, selectedMesh } =
    useElementsManipulations();
  // useEffect(() => {
  //   console.log("--SCENE--", scene);
  // });

  const renderLegoParts = (partsList: PartInfo[]) => {
    return partsList.map((part, index) => {
      return <LegoPart partInfo={part} key={index} />;
    });
  };

  const renderNests = (nests: Mesh[], selectedMesh: Mesh) => {
    return nests.map((nest) => {
      return <Nest key={nest.uuid} nest={nest} selectedMesh={selectedMesh} />;
    });
  };

  return (
    <>
      <Floor />
      <group name={"FreeBlocks"}>
        {renderLegoParts(steamLocomotivePartsList)}
      </group>
      <group name="BuiltModel">
        <ModelBase nestPath={modelBaseNest} />
      </group>
      <group name={"FreeNests"}>
        {selectedMesh &&
          renderNests(freeNestsToConnectElement, selectedMesh?.object)}
      </group>
    </>
  );
};

export default SteamLocomotive_7722;
