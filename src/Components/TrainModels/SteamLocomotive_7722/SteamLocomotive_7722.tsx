//import { Mesh } from "three";
//// @ts-expect-error Not a type
//import modelBaseNest from "../../../assets/3D/ModelBaseNest/ModelBaseNest.glb";
//import Nest from "../../3DModels/Nest/Nest";
//import { steamLocomotivePartsList } from "../../../PartsLists/steamLocomotivePartsList";
//import ModelBase from "../../3DModels/ModelBase/ModelBase";
//import Floor from "../../3DModels/Floor/Floor";
// import LegoPart from "../../LegoPart/LegoPart";
//import { useThree } from "@react-three/fiber";
//import { useEffect } from "react";
import { PartInfo } from "../../../Types/PartInfo";
//import useElementsManipulations from "../../../Hooks/useElementsManipulations";
import useTrainInstruction from "../../../Hooks/useTrainInstruction";
import { useMemo } from "react";
import ModelMarkers from "../../3DModels/ModelMarkers/ModelMarkers";
// @ts-expect-error Not a type
import modelMarkers from "../../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";
import LegoPartV2 from "../../3DModels/LegoPartV2/LegoPartV2";

const SteamLocomotive_7722 = () => {
  //console.log("Rerender Locomotive");
  const { handleGetPartsList } = useTrainInstruction();
  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);
  // const { scene } = useThree();
  // console.log(scene);
  // const { freeNestsToConnectElement, selectedMesh } =
  //   useElementsManipulations();
  // useEffect(() => {
  //   console.log("--SCENE--", scene);
  // });

  const renderLegoParts = (partsList: PartInfo[]) => {
    return partsList.map((part, index) => {
      return <LegoPartV2 partInfo={part} key={index} />;
    });
  };

  return (
    <>
      {/* <Floor /> */}
      <group name={"LeftBlocks"}>{renderLegoParts(partsList)}</group>
      <ModelMarkers modelPath={modelMarkers} />
    </>
  );
};

export default SteamLocomotive_7722;
