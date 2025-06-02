import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Login from "../auth/Login";
import { AuthUserContext } from "../../context/AuthContext";
import { AppTheme } from "../../context/ThemeContext";

function NavBar() {
  const { isLogin } = useContext(AuthUserContext);
  const { selectTheme, theme } = useContext(AppTheme);

  return (
    <nav className="navbar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "Active" : "")}
        >
          Dashboard
        </NavLink>

        {isLogin && (
          <>
            <NavLink
              to="/details"
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Project Details
            </NavLink>
            <NavLink
              to="/add-project"
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Add Project
            </NavLink>
            <NavLink
              to="/edit-project"
              className={({ isActive }) => (isActive ? "Active" : "")}
            >
              Edit Project
            </NavLink>
          </>
        )}
      </div>
      <div className="lastNav">
        <Login />
        <button onClick={selectTheme}>
          {theme == "Light" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
