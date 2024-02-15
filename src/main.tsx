import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store";
import "./utils/i18n.ts";
import { registerLicense } from "@syncfusion/ej2-base";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
