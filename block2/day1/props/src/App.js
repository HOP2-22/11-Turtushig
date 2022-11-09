import React from "react";
import ThemeContext from "./context/ThemeContext.jsx";
import Home from "./context/home.jsx";

function App() {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
}

export default App;
