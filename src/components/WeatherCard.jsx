import React from "react";
import "../styles/WeatherCard.css";

const WeatherCard = ({ city, temp, condition, icon, unit }) => {
  return (
    <div className="weather-card">
      <h2 className="city-name">{city}</h2>
      <p className="temperature">
        {Math.round(temp)}°{unit === "metric" ? "C" : "F"}
      </p>
      <p className="condition">{condition}</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={condition}
      />
    </div>
  );
};

export default WeatherCard;
