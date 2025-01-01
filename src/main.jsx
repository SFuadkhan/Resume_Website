import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PagingContextProvider from "./context/PagingContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <BrowserRouter>
      <PagingContextProvider>
        <App />
      </PagingContextProvider>
    </BrowserRouter>
  //{/* </StrictMode> */}
);
