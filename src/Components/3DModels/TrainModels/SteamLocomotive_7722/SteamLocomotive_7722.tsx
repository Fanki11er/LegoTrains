
import useTrainInstruction from "../../../../Hooks/useTrainInstruction";
import {  useMemo } from "react";
import LegoPart from "../../LegoPart/LegoPart";
import ModelMarkers from "../../ModelMarkers/ModelMarkers";
import Instruction from "../../Instruction/Instruction";
import { LegoBlock } from "../../../../PartsLists/SteamLocomotive7722Parts/SetLegoBlockTypes";

const SteamLocomotive_7722 = () => {
  console.log("Rerender Locomotive");

  const { handleGetPartsList, handleGetModelMarkersPath } =
    useTrainInstruction();

  const partsList = useMemo(() => {
    return handleGetPartsList();
  }, [handleGetPartsList]);

  const modelMarkersPath = handleGetModelMarkersPath();

  const renderLegoParts = (partsList: LegoBlock[]) => {
    return partsList.map((block, index) => {
      return <LegoPart partInfo={block} key={index} />;
    });
  };

  return (
    <>
      <group name={"LeftBlocks"}>{renderLegoParts(partsList)}</group>
      {modelMarkersPath && <ModelMarkers modelPath={modelMarkersPath} />}
      <Instruction position={[-170, 0.1, 0]} />
    </>
  );
};

export default SteamLocomotive_7722;
