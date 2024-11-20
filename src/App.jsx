import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainForm from "./pages/PP/ProjectRegisterForm";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainForm />} />
      </Routes>
    </BrowserRouter>
  );
}
