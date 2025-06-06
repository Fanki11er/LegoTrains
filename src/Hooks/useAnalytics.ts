import { useContext } from "react";
import { AnalyticsContext } from "../Providers/AnalyticsProvider";

const useAnalytics = () => {
  return useContext(AnalyticsContext);
};

export default useAnalytics;
