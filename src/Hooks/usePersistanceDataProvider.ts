import { useContext } from "react";
import { PersistanceDataContext } from "../Providers/PersistanceDataProvider";

const usePersistanceDataProvider = () => {
  return useContext(PersistanceDataContext);
};

export default usePersistanceDataProvider;
