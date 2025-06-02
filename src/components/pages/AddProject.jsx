import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.projectReducer);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

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
      await dispatch(addProject(formData));
      setFormData({
        title: "",
        description: "",
        createdAt: new Date().toISOString().split("T")[0],
      });

      navigate("/");
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  return (
    <div>
      <div className="add-project-container">
        <h2>Add New Project</h2>

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
              {loading ? "Adding..." : "Add Project"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
