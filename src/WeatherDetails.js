import React from 'react';

const WeatherDetails = ({ data }) => {
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
    </div>
  );
};

export default WeatherDetails;
