import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProjectsProvider from "./context/ProjectsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectsProvider>
    <App />
  </ProjectsProvider>
);
