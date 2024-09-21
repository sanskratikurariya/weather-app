import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import FiveDayForecast from "./components/FiveDayForecast";
import ToggleButton from "./components/ToggleButton";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "0f98066fd3b718c055f79a7be79c8e38";
  
  useEffect(() => {
    fetchWeatherData(city);
  }, [city, unit]);

  const fetchWeatherData = async (city) => {
    const response = await fetch(
    
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
     
      
    );
    const data = await response.json();
    if (data.cod === 200) {
      setWeatherData(data);
    } else {
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    if (searchTerm !== "") setCity(searchTerm);
    setSearchTerm("");
  };

  const handleUnitToggle = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <div className="app-container">
      <h1 className="title">Weather Forecast</h1>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {weatherData ? (
        <div>
          <WeatherCard
            city={weatherData.name}
            temp={weatherData.main.temp}
            condition={weatherData.weather[0].main}
            icon={weatherData.weather[0].icon}
            unit={unit}
          />
          <ToggleButton handleToggle={handleUnitToggle} unit={unit} />
        </div>
      ) : (
        <p className="error-message">city not found please enter  a city name</p>
      )}
      <FiveDayForecast city={city} unit={unit} />
    </div>
  );
}

export default App;
