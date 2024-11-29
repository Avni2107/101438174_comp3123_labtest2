import React from 'react'; // Import React
import './App.css'; // Import the CSS file for styling
import Weather from './Weather'; // Import the Weather component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <p>Enter a city name to check its weather:</p>
      </header>
      {/* Render the Weather component */}
      <Weather />
      <footer className="App-footer">
        <p>&copy; 2024 Weather App | Created by [Avni]</p>
      </footer>
    </div>
  );
}

export default App;

