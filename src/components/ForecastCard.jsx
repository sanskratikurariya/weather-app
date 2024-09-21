import React from "react";
import "../styles/ForecastCard.css";

const ForecastCard = ({ day, tempMax, tempMin, city,condition, icon, unit }) => {
  return (
    <div className="forecast-card">
      <h2>{city}</h2>
      <h3>{day}</h3>

      <p>
        {tempMax}° / {tempMin}° {unit === "metric" ? "C" : "F"}
      </p>
      <p>{condition}</p>
      <img
        className="forecast-icon"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={condition}
      />
    </div>
  );
};

export default ForecastCard;
