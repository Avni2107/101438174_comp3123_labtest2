import React, { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Toronto"); // Default city
  const [weatherData, setWeatherData] = useState(null); // To store fetched weather data
  const [error, setError] = useState(null); // To handle errors
  const API_KEY = "your_actual_api_key"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (city) => {
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
    try {
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
      const data = await response.json();
      setWeatherData(data); // Save the weather data
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setWeatherData(null); // Clear any previous data
    }
  };

  // Fetch weather data when the component loads
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      {/* Input for City */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={() => fetchWeather(city)}>Get Weather</button>

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Weather Data */}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
}

export default Weather;

