import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import City from "./modules/City";
import Weather from "./modules/Weather";

const Key = "9cb3e7f53343d83260ac363d26973c4f";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

const Container= styled.div`
 display: flex;
 flex-direction: column;
 margin: auto;
 align-items: center;
 padding: 20px 10px;
 width: 380px;
 background: white;
 box-shadow: 0 3px 6px 0 #555;
 font-family: Montserrat;
`;


const AppLabel = styled.span`
  color:black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`,
    );
    updateWeather(response.data);
  };
  return <Container>
    <AppLabel>React weather App</AppLabel>
    {city && weather ? (
        <Weather weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>;
}

export default App;
