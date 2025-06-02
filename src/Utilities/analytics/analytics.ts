import ReactGA from "react-ga4";
import { Consent } from "../../Types/generalTypes";

const GA_MEASUREMENT_ID = import.meta.env.VITE_APP_GA_MEASUREMENT_ID || "";

export const initializeAnalytics = () => {
  const consentMode = localStorage.getItem("consentMode");

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

  return !!consentMode;
};

export const updateConsent = (consent: Consent) => {
  const consentOptions = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
  };

  ReactGA.gtag("consent", "update", consentOptions);
  localStorage.setItem("consentMode", JSON.stringify(consentOptions));
};
