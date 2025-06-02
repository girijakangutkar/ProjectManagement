import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function EditProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProject, loading, error } = useSelector(
    (state) => state.projectReducer
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdAt: "",
  });

  useEffect(() => {
    if (selectedProject) {
      setFormData({
        title: selectedProject.title || "",
        description: selectedProject.description || "",
        createdAt: selectedProject.createdAt || "",
      });
    }
  }, [selectedProject]);

  if (!selectedProject) {
    return (
      <div className="no-project">
        <p>
          No project selected for editing. Please go back to dashboard and
          select a project.
        </p>
        <button onClick={() => navigate("/")} className="back-btn">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Project title is required!");
      return;
    }

    try {
      await dispatch(updateProject(selectedProject.id, formData));
      dispatch({ type: "CLEAR_SELECTED_PROJECT" });
      navigate("/");
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  const handleCancel = () => {
    dispatch({ type: "CLEAR_SELECTED_PROJECT" });
    navigate("/");
  };

  return (
    <div className="edit-project-container">
      <div className="edit-project-header">
        {/* <button onClick={() => navigate("/")} className="back-btn">
          ← Back to Dashboard
        </button> */}
        <h2>Edit Project</h2>
      </div>
      {error && <div className="error-message">Error: {error}</div>}

      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-group">
          <label htmlFor="title">Project Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter project title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter project description"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="createdAt">Created Date</label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Updating..." : "Update Project"}
          </button>

          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProject;
