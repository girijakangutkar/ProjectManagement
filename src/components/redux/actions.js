import axios from "axios";

const API_URL =
  "https://react-one-123a6-default-rtdb.asia-southeast1.firebasedatabase.app/projects";

// Fetch all projects
export const fetchProjects = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await axios.get(`${API_URL}.json`);
      const data = response.data;

      const projectsArray = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];

      dispatch({ type: "FETCH_SUCCESS", payload: projectsArray });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", error: err.message });
    }
  };
};

// Add new project
export const addProject = (projectData) => {
  return async (dispatch) => {
    dispatch({ type: "POST_START" });
    try {
      const response = await axios.post(`${API_URL}.json`, {
        ...projectData,
      });

      dispatch({ type: "POST_SUCCESS" });
      dispatch(fetchProjects());
    } catch (err) {
      dispatch({ type: "POST_ERROR", error: err.message });
    }
  };
};

// Update project
export const updateProject = (projectId, projectData) => {
  return async (dispatch) => {
    dispatch({ type: "UPDATE_START" });
    try {
      await axios.patch(`${API_URL}/${projectId}.json`, projectData);
      dispatch({ type: "UPDATE_SUCCESS" });
      dispatch(fetchProjects());
    } catch (err) {
      dispatch({ type: "UPDATE_ERROR", error: err.message });
    }
  };
};

// Delete project
export const deleteProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_START" });
    try {
      await axios.delete(`${API_URL}/${projectId}.json`);
      dispatch({ type: "DELETE_SUCCESS" });
      dispatch(fetchProjects());
    } catch (err) {
      dispatch({ type: "DELETE_ERROR", error: err.message });
    }
  };
};
