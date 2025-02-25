import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header, MapView } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <div style={{ marginTop: "60px" }}>
      <MapView />
    </div>
  </StrictMode>
);
