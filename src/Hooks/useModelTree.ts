import { useContext } from "react";
import { ModelTreeContext } from "../Providers/ModelTreeProvider";

const useModelTree = () => {
  return useContext(ModelTreeContext);
};

export default useModelTree;
