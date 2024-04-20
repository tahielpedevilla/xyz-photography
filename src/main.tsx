import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./fonts.ts";
import { App } from "./App.tsx";
import "./index.css";
import { CustomCursor } from "./components/CustomCursor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <CustomCursor />
    <App />
  </React.StrictMode>,
);
