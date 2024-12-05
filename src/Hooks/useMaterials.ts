import { useContext } from "react";
import { MaterialsProviderContext } from "../Providers/materialsProvider";

const useMaterials = () => {
  return useContext(MaterialsProviderContext);
};

export default useMaterials;
