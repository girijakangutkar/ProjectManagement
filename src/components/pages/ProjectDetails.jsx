import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContext";

function ProjectDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthUserContext);
  const { selectedProject, loading } = useSelector(
    (state) => state.projectReducer
  );

  if (!selectedProject) {
    return (
      <div className="no-project">
        <p>
          No project selected. Please go back to dashboard and select a project.
        </p>
        <button onClick={() => navigate("/")} className="back-btn">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <div className="project-header">
        <button onClick={() => navigate("/")} className="back-btn">
          ← Back to Dashboard
        </button>
        <div className="project-info">
          <h1>{selectedProject.title}</h1>
          <p className="project-date">Created: {selectedProject.createdAt}</p>
          {selectedProject.description && (
            <p className="project-description">{selectedProject.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
