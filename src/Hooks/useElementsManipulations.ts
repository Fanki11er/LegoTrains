import { useContext } from "react";
import { ElementsManipulationsContext } from "../Providers/ElementsManipulationProvider";

const useElementsManipulations = () => {
  return useContext(ElementsManipulationsContext);
};
export default useElementsManipulations;
