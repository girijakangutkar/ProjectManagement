import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContext>
        <ThemeContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeContext>
      </AuthContext>
    </Provider>
  </StrictMode>
);
