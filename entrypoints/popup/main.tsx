import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import "./style.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Airdrop } from "@/components/Airdrop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
