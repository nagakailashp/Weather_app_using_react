import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import City from "./modules/City";
import Weather from "./modules/Weather";

const Key = "9cb3e7f53343d83260ac363d26973c4f";

export const WeatherIcons = {
  "01d": "/Weather_app_using_react/icon/sunny.svg",
  "01n": "/Weather_app_using_react/icon/night.svg",
  "02d": "/Weather_app_using_react/icon/day.svg",
  "02n": "/Weather_app_using_react/icon/cloudy-night.svg",
  "03d": "/Weather_app_using_react/icon/cloudy.svg",
  "03n": "/Weather_app_using_react/icon/cloudy.svg",
  "04d": "/Weather_app_using_react/icon/perfect-day.svg",
  "04n": "/Weather_app_using_react/icon/cloudy-night.svg",
  "09d": "/Weather_app_using_react/icon/rain.svg",
  "09n": "/Weather_app_using_react/icon/rain-night.svg",
  "10d": "/Weather_app_using_react/icon/rain.svg",
  "10n": "/Weather_app_using_react/icon/rain-night.svg",
  "11d": "/Weather_app_using_react/icon/storm.svg",
  "11n": "/Weather_app_using_react/icon/storm.svg",
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
