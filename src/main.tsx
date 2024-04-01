import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./Theme/GlobalTheme.tsx";
import ElementContextMenuProvider from "./Providers/ElementMenuProvider.tsx";
import ModelTreeProvider from "./Providers/ModelTreeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ModelTreeProvider>
      <ElementContextMenuProvider>
        <App />
      </ElementContextMenuProvider>
    </ModelTreeProvider>
  </React.StrictMode>
);
