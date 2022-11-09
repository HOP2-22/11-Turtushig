import React, { createContext } from "react";

import { useState } from "react";

export const ColorModeContext = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("white");

  const ColorModeContext = () => {
    setTheme("dark");
  };
  return (
    <ColorModeContext.Provider
      value={{ theme: theme, changeTheme: ColorModeHander }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
