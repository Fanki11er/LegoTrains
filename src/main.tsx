import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Theme/GlobalTheme.tsx";
import Router from "./router/Router/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/theme.ts";
import AuthProvider from "./Providers/AuthProvider.tsx";
import ErrorBoundary from "./Components/Molecules/ErrorBoundary/ErrorBoundary.tsx";
import ErrorFallback from "./Components/Molecules/ErrorFallback/ErrorFallback.tsx";
import { ERROR_FALLBACK_TEXT } from "./Constants/constants.ts";
import CookiesInformation from "./Components/Molecules/CookiesInformation/CookiesInformation.tsx";
import { initializeAnalytics } from "./Utilities/analytics/analytics.ts";

export const APP_VERSION = "25.06.02";

const queryClient = new QueryClient();

const consentMode = initializeAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallback message={ERROR_FALLBACK_TEXT} />}>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        {!consentMode ? <CookiesInformation /> : null}
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
