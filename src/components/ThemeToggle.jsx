import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => (
  <div className="text-center mb-3">
    <button className="btn btn-secondary" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  </div>
);

export default ThemeToggle;
