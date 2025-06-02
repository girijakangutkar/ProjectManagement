// const initialState = {
//   loading: false,
//   data: [],
//   error: null,
// };

// const projectReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_START":
//       return { ...state, loading: true, error: null };
//     case "FETCH_SUCCESS":
//       return { loading: false, data: action.payload, error: null };
//     case "FETCH_ERROR":
//       return { loading: false, data: null, error: action.error };
//     case "POST_START":
//       return { ...state, loading: true, error: null };
//     case "POST_SUCCESS":
//       return { loading: false, error: null, data: action.payload };
//     case "POST_ERROR":
//       return { loading: false, data: null, error: action.error };

//     default:
//       return state;
//   }
// };

// export default projectReducer;

const initialState = {
  loading: false,
  data: [],
  error: null,
  selectedProject: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch operations
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };

    // Add project operations
    case "POST_START":
      return { ...state, loading: true, error: null };
    case "POST_SUCCESS":
      return { ...state, loading: false, error: null };
    case "POST_ERROR":
      return { ...state, loading: false, error: action.error };

    // Update project operations
    case "UPDATE_START":
      return { ...state, loading: true, error: null };
    case "UPDATE_SUCCESS":
      return { ...state, loading: false, error: null };
    case "UPDATE_ERROR":
      return { ...state, loading: false, error: action.error };

    // Delete project operations
    case "DELETE_START":
      return { ...state, loading: true, error: null };
    case "DELETE_SUCCESS":
      return { ...state, loading: false, error: null };
    case "DELETE_ERROR":
      return { ...state, loading: false, error: action.error };

    // Select project for editing
    case "SELECT_PROJECT":
      return { ...state, selectedProject: action.payload };

    case "CLEAR_SELECTED_PROJECT":
      return { ...state, selectedProject: null };

    default:
      return state;
  }
};

export default projectReducer;
