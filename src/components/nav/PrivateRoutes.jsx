import React, { useContext } from "react";
import { AuthUserContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { isLogin } = useContext(AuthUserContext);

  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
