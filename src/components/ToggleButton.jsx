import React from "react";
import "../styles/ToggleButton.css";

const ToggleButton = ({ handleToggle, unit }) => {
  return (
    <button className="toggle-button" onClick={handleToggle}>
      Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
    </button>
  );
};

export default ToggleButton;
