import React, { createContext, useState } from "react";

export const AuthUserContext = createContext(null);

function AuthContext({ children }) {
  const [isLogin, setLogin] = useState(false);

  function handleLogin() {
    setLogin(!isLogin);
  }

  return (
    <AuthUserContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export default AuthContext;
