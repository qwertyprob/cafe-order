import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; //tailwindcss styles
import "./index.scss"; //global styles
//components
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
