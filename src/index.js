import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";
import App from "./App";

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx0QXxbf1xzZFRGallZTndYUiweQnxTdEZiW35ZcXRQTmFbUkF2Ww==')

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
