import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      Function Theme
    </div>
  );
}
