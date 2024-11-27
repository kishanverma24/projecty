import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Project_Register_Form from "./pages/Project_Register/Project_Register_Form";
import Project from "../src/pages/Project/Project";
import Projects from "./pages/projects/Projects";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import SearchProfile from "./pages/searchedProfile/SearchProfile";
import EditProfile from "./pages/editProfile/EditProfile";
import EmailVerify from "./components/emailVerify/EmailVerify.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectid" element={<Project />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/search/profile/:username" element={<SearchProfile />} />
        <Route path="/projectr" element={<Project_Register_Form />} />
        <Route path="/user/email/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  );
}
