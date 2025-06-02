import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/pages/Dashboard";
import ProjectDetails from "./components/pages/ProjectDetails";
import AddProject from "./components/pages/AddProject";
import EditProject from "./components/pages/EditProject";
import NavBar from "./components/nav/NavBar";
import "./App.css";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import PrivateRoutes from "./components/nav/PrivateRoutes";
import { AppTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(AppTheme);
  return (
    <div className={theme == "Dark" ? "DarkTheme" : "LightTheme"}>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<DashBoard />}>
            Dashboard
          </Route>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
          <Route path="/logout" element={<Logout />}>
            Logout
          </Route>

          <Route
            path="/details"
            element={
              <PrivateRoutes>
                <ProjectDetails />
              </PrivateRoutes>
            }
          >
            Details
          </Route>
          <Route
            path="/add-project"
            element={
              <PrivateRoutes>
                <AddProject />
              </PrivateRoutes>
            }
          >
            Add project
          </Route>
          <Route
            path="/edit-project"
            element={
              <PrivateRoutes>
                <EditProject />
              </PrivateRoutes>
            }
          >
            Edit Project
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
