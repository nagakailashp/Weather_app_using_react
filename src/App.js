import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import City from "./modules/City";
import Weather from "./modules/Weather";

const Key = "9cb3e7f53343d83260ac363d26973c4f";

export const WeatherIcons = {
  "01d": "public/icon/sunny.svg",
  "01n": "public/icon/night.svg",
  "02d": "public/icon/day.svg",
  "02n": "public/icon/cloudy-night.svg",
  "03d": "public/icon/cloudy.svg",
  "03n": "public/icon/cloudy.svg",
  "04d": "/Weather_app_using_react/public/icon//perfect-day.svg",
  "04n": "public/icon/cloudy-night.svg",
  "09d": "public/icon/rain.svg",
  "09n": "public/icon/rain-night.svg",
  "10d": "public/icon/rain.svg",
  "10n": "public/icon/rain-night.svg",
  "11d": "public/icon/storm.svg",
  "11n": "public/icon/storm.svg",
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
