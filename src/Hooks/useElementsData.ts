import { useContext } from "react";
import { ElementsDataContext } from "../Providers/ElementsDataProvider";

const useElementsData = () => {
  return useContext(ElementsDataContext);
};

export default useElementsData;
