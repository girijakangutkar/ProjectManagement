import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects, deleteProject } from "../redux/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContext";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthUserContext);
  const {
    data: projects,
    loading,
    error,
  } = useSelector((state) => state.projectReducer);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleDeleteProject = async (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await dispatch(deleteProject(projectId));
        alert("Project deleted successfully!");
      } catch (err) {
        console.error("Error deleting project:", err);
      }
    }
  };

  const handleEditProject = (project) => {
    dispatch({ type: "SELECT_PROJECT", payload: project });
    navigate("/edit-project");
  };

  const handleViewDetails = (project) => {
    dispatch({ type: "SELECT_PROJECT", payload: project });
    navigate("/details");
  };

  if (loading) return <div className="loading">Loading projects...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Project Dashboard</h1>
        {isLogin && (
          <button
            onClick={() => navigate("/add-project")}
            className="add-project-btn"
          >
            Add New Project
          </button>
        )}
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <p>No projects found.</p>
          {isLogin && (
            <button
              onClick={() => navigate("/add-project")}
              className="add-first-project-btn"
            >
              Create Your First Project
            </button>
          )}
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.createdAt}</span>
              </div>

              <div className="project-description">
                <p>{project.description || "No description provided"}</p>
              </div>

              <div className="project-actions">
                {isLogin ? (
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="view-btn"
                  >
                    View Details
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      alert("Please login to view details");
                    }}
                    className="view-btn"
                  >
                    View Details
                  </button>
                )}

                {isLogin && (
                  <>
                    <button
                      onClick={() => handleEditProject(project)}
                      className="edit-btn"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
