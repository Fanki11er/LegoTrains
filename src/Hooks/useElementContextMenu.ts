import { useContext } from "react";
import { ElementContextMenuContext } from "../Providers/ElementMenuProvider";

const useElementContextMenu = () => {
  return useContext(ElementContextMenuContext);
};

export default useElementContextMenu;
