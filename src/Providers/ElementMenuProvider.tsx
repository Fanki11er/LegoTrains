import { PropsWithChildren, createContext, /*useRef,*/ useState } from "react";
import { Mesh } from "three";

type SelectedMesh = Mesh | null;

export const ElementContextMenuContext = createContext({
  selectedMesh: null as SelectedMesh,
  isElementLocked: false,
  handleSelectMesh: (element: Mesh) => {
    element;
  },
  handleResetSelectedMesh: () => {},
  handleLockElement: () => {},
});

const ElementContextMenuProvider = (props: PropsWithChildren) => {
  const [selectedMesh, setSelectedMesh] = useState<SelectedMesh>(null);
  const [isElementLocked, setIsElementLocked] = useState(false);

  const handleSelectMesh = (element: Mesh) => {
    setSelectedMesh(element);
  };

  const handleResetSelectedMesh = () => {
    setIsElementLocked(false);
    setSelectedMesh(null);
  };

  const handleLockElement = () => {
    setIsElementLocked(true);
  };

  const context = {
    selectedMesh,
    isElementLocked,
    handleSelectMesh,
    handleResetSelectedMesh,
    handleLockElement,
  };

  return (
    <ElementContextMenuContext.Provider value={context}>
      {props.children}
    </ElementContextMenuContext.Provider>
  );
};

export default ElementContextMenuProvider;
