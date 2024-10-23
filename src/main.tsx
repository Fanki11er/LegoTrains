import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./Theme/GlobalTheme.tsx";
import Router from "./router/Router/Router.tsx";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/theme.ts";
import AuthProvider from "./Providers/AuthProvider.tsx";
//const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
