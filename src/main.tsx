import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Theme/GlobalTheme.tsx";
import Router from "./router/Router/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/theme.ts";
import AuthProvider from "./Providers/AuthProvider.tsx";
import ErrorBoundary from "./Components/Molecules/ErrorBoundary/ErrorBoundary.tsx";

export const APP_VERSION = "24.10.28";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Error</div>}>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
