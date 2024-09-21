import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard";
import "../styles/FiveDayForecast.css";

const FiveDayForecast = ({ city, unit }) => {
  const [forecastData, setForecastData] = useState([]);

  const API_KEY = "0f98066fd3b718c055f79a7be79c8e38";

  useEffect(() => {
    fetchFiveDayForecast(city, unit);
  }, [city, unit]);

  const fetchFiveDayForecast = async (city, unit) => {
    const response = await fetch(
    
         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      
    );
    const data = await response.json();
    console.log(data);
    const forecast = data.list.filter((_, index) => index % 8 === 0);
    setForecastData(forecast);
  };

  return (
    <div className="forecast-container">
      {forecastData.map((day, index) => (
        <ForecastCard
        city={city}
          key={index}
          day={new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
          })}
         
          tempMax={Math.round(day.main.temp_max)}
          tempMin={Math.round(day.main.temp_min)}
          condition={day.weather[0].main}
          icon={day.weather[0].icon}
          unit={unit}
        />
      ))}
    </div>
  );
};

export default FiveDayForecast;
