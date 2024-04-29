//import { useThree } from "@react-three/fiber";
//import { useEffect } from "react";
import { PartInfo } from "../../../../Types/PartInfo";
import useTrainInstruction from "../../../../Hooks/useTrainInstruction";
import { useMemo } from "react";
// @ts-expect-error Not a type
import modelMarkers from "../../../../assets/3D/ModelsMarkers/SteamLocomotive7722/Markers.glb";
import LegoPart from "../../LegoPart/LegoPart";
import ModelMarkers from "../../ModelMarkers/ModelMarkers";

const SteamLocomotive_7722 = () => {
  //console.log("Rerender Locomotive");
  const { handleGetPartsList } = useTrainInstruction();
  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);
  // const { scene } = useThree();
  // console.log(scene);
  // useEffect(() => {
  //   console.log("--SCENE--", scene);
  // });

  const renderLegoParts = (partsList: PartInfo[]) => {
    return partsList.map((part, index) => {
      return <LegoPart partInfo={part} key={index} />;
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
