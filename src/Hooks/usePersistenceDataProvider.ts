import { useContext } from "react";
import { PersistenceDataContext } from "../Providers/PersistenceDataProvider";

const usePersistenceDataProvider = () => {
  return useContext(PersistenceDataContext);
};

export default usePersistenceDataProvider;
