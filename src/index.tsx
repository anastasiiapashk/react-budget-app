import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import { BudgetsProvider } from "./contexts/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider i18n={{}}>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </AppProvider>
  </React.StrictMode>
);
