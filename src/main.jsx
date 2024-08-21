import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BudgetsProvider } from "./contexts/BudgetsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </StrictMode>
);
