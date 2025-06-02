import React, { useState } from "react";
import { createContext } from "react";

export const AppTheme = createContext({
  theme: "Light",
  selectTheme: () => {},
});

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("Light");

  function selectTheme() {
    setTheme(theme == "Dark" ? "Light" : "Dark");
  }
  return (
    <AppTheme.Provider value={{ selectTheme, theme }}>
      {children}
    </AppTheme.Provider>
  );
}

export default ThemeContext;
