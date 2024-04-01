import { useState } from "react";
import useElementContextmenu from "./useElementContextMenu";
import { Mesh } from "three";
import { ThreeEvent } from "@react-three/fiber";

const useElementSelection = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { handleResetSelectedMesh, handleSelectMesh, isElementLocked } =
    useElementContextmenu();

  const handleSelectElement = (event: ThreeEvent<MouseEvent>) => {
    if (!isElementLocked) {
      const element = event.eventObject as Mesh;
      setIsSelected(true);
      handleSelectMesh(element);
    }
  };

  const handleUnselectElement = () => {
    if (isSelected && !isElementLocked) {
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
