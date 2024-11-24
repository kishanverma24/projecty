import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProjectsProvider from "./context/ProjectsContext.jsx";
import { LoginUserProvider } from "./context/LoginUserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginUserProvider>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </LoginUserProvider>
);
