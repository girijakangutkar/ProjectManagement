import React, { useContext } from "react";
import { AuthUserContext } from "../../context/AuthContext.jsx";

function Login() {
  const { isLogin, handleLogin } = useContext(AuthUserContext);
  return (
    <div>
      <button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Login;
