import { useContext } from "react";
import { MaterialsProviderContext } from "../Providers/MaterialsProvider";

const useMaterials = () => {
  return useContext(MaterialsProviderContext);
};

export default useMaterials;
