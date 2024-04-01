import { PropsWithChildren, createContext, /*useRef,*/ useState } from "react";
import { Mesh } from "three";

type SelectedMesh = Mesh | null;

export const ElementContextMenuContext = createContext({
  selectedMesh: null as SelectedMesh,
  handleSelectMesh: (element: Mesh) => {
    element;
  },
  handleResetSelectedMesh: () => {},
});

const ElementContextMenuProvider = (props: PropsWithChildren) => {
  const [selectedMesh, setSelectedMesh] = useState<SelectedMesh>(null);

  const handleSelectMesh = (element: Mesh) => {
    setSelectedMesh(element);
  };

  const handleResetSelectedMesh = () => {
    setSelectedMesh(null);
  };

  const context = {
    selectedMesh,
    handleSelectMesh,
    handleResetSelectedMesh,
  };

  return (
    <ElementContextMenuContext.Provider value={context}>
      {props.children}
    </ElementContextMenuContext.Provider>
  );
};

export default ElementContextMenuProvider;
//Todo Lock Selected Element??
