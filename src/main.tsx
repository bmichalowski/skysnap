import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components";
import { MapView } from "./features/MapView";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <div style={{ marginTop: "60px" }}>
      <MapView />
    </div>
  </StrictMode>
);
