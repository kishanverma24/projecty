import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project_Register_Form from "./pages/Project_Register/Project_Register_Form";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project_Register_Form />} />
      </Routes>
    </BrowserRouter>
  );
}
