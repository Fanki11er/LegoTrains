import {
  PropsWithChildren,
  useMemo,
  createContext,
  useEffect,
  useCallback,
} from "react";
import CookiesInformation from "../Components/Molecules/CookiesInformation/CookiesInformation";
import ReactGA from "react-ga4";
import { Consent } from "../Types/generalTypes";

const GA_MEASUREMENT_ID = import.meta.env.VITE_APP_GA_MEASUREMENT_ID || "";

type AnalyticsContextType = {
  consentMode: string | null;
  updateConsent: (consent: Consent) => void;
  trackPageView: (pageName: string) => void;
  trackUserEvent: (action: string) => void;
  trackModelEvent: (action: string, modelId: string) => void;
};

export const AnalyticsContext = createContext<AnalyticsContextType>({
  trackPageView: (_pageName) => {
    _pageName;
  },
  updateConsent: (_consent) => {
    _consent;
  },
  trackUserEvent: (_action) => {
    _action;
  },
  trackModelEvent: (_action, _modelId) => {
    _action;
    _modelId;
  },

  consentMode: null,
});

const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const consentMode = localStorage.getItem("consentMode");

  useEffect(() => {
    if (consentMode === null) {
      ReactGA.gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    } else {
      ReactGA.gtag("consent", "default", JSON.parse(consentMode));
    }

    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, [consentMode]);

  const updateConsent = useCallback((consent: Consent) => {
    const consentOptions = {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: consent.analytics ? "granted" : "denied",
    };

    ReactGA.gtag("consent", "update", consentOptions);
    localStorage.setItem("consentMode", JSON.stringify(consentOptions));
  }, []);

  const trackPageView = useCallback((pageName: string) => {
    ReactGA.send({ hitType: "pageview", page: pageName });
  }, []);

  const trackUserEvent = useCallback((action: string) => {
    ReactGA.event({
      category: "User",
      action,
      label: action,
    });
  }, []);

  const trackModelEvent = useCallback((action: string, modelId: string) => {
    ReactGA.event({
      category: "Model",
      action,
      label: modelId,
    });
  }, []);

  const values = useMemo(() => {
    return {
      consentMode,
      updateConsent,
      trackPageView,
      trackUserEvent,
      trackModelEvent,
    };
  }, [
    consentMode,
    trackPageView,
    updateConsent,
    trackUserEvent,
    trackModelEvent,
  ]);

  return (
    <AnalyticsContext.Provider value={values}>
      {!consentMode ? <CookiesInformation /> : null}
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
