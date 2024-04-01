import { useContext } from "react";
import { ElementContextMenuContext } from "../Providers/ElementMenuProvider";

const useElementContextmenu = () => {
  return useContext(ElementContextMenuContext);
};

export default useElementContextmenu;
