import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./Theme/GlobalTheme.tsx";
import ElementsDataProvider from "./Providers/ElementsDataProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ElementsDataProvider>
      <App />
    </ElementsDataProvider>
  </React.StrictMode>
);
