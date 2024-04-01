import { useState } from "react";
import useElementContextmenu from "./useElementContextMenu";
import { Mesh } from "three";
import { ThreeEvent } from "@react-three/fiber";

const useElementSelection = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { handleResetSelectedMesh, handleSelectMesh } = useElementContextmenu();

  const handleSelectElement = (event: ThreeEvent<MouseEvent>) => {
    const element = event.eventObject as Mesh;
    setIsSelected(true);
    handleSelectMesh(element);
  };

  const handleUnselectElement = () => {
    if (isSelected) {
      setIsSelected(false);
      handleResetSelectedMesh();
    }
  };

  return {
    isSelected,
    handleSelectElement,
    handleUnselectElement,
  };
};

export default useElementSelection;
