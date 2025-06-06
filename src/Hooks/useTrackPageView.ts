import { useContext, useEffect } from "react";
import { AnalyticsContext } from "../Providers/AnalyticsProvider";

const useTrackPageView = (pageName: string) => {
  const { trackPageView } = useContext(AnalyticsContext);

  useEffect(() => {
    if (trackPageView) {
      trackPageView(pageName);
    }
  }, [pageName, trackPageView]);
};

export default useTrackPageView;
