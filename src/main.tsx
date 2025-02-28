import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { AppRoutes } from "./AppRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "60px" }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  </StrictMode>
);
