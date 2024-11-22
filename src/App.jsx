import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Project_Register_Form from "./pages/Project_Register/Project_Register_Form";
import Project from "../src/pages/Project/Project";
import Projects from "./pages/projects/Projects";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projectr" element={<Project_Register_Form />} />
      </Routes>
    </BrowserRouter>
  );
}
