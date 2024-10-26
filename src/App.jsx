import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/01_Project_Register_Pages/page1/Project_Title_Overview";
import Page2 from "./pages/01_Project_Register_Pages/page2/Project_Details";
import Page3 from "./pages/01_Project_Register_Pages/page3/Technical_Requirments";
import Page4 from "./pages/01_Project_Register_Pages/page4/CurrentStatus_Progress";
import Page5 from "./pages/01_Project_Register_Pages/page5/Documentation_Resources";
import Page6 from "./pages/01_Project_Register_Pages/page6/Contact_Information";
import Page7 from "./pages/01_Project_Register_Pages/page7/Budget_Funding";
import Page8 from "./pages/01_Project_Register_Pages/page8/Feedback_Usecases";
import Page9 from "./pages/01_Project_Register_Pages/page9/Collaboration_Needs_Profiles";
import MainForm from "./pages/PP/MainForm";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/pp" element={<MainForm />} />
      </Routes>
    </BrowserRouter>
  );
}
