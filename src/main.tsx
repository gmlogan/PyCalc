import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
