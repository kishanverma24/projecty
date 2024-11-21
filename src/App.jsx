import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project_Register_Form from "./pages/Project_Register/Project_Register_Form";
import Project from "../src/pages/Project/Project";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projectr" element={<Project_Register_Form />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
