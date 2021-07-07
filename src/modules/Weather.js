import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunset: "/Weather_app_using_react/icon/temp.svg",
    sunrise: "/Weather_app_using_react/icon/temp.svg",
    humidity: "/Weather_app_using_react/icon/humidity.svg",
    wind: "/Weather_app_using_react/icon/wind.svg",
    pressure: "/Weather_app_using_react/icon/pressure.svg",
};

const Condition = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:space-between;
margin:30px auto;
`;

const Temp = styled.span`
margin:20px auto;
font-size:14px;
& span{
    font-size:28px;
}
`;

const Logo = styled.img`
width: 100px;
height: 100px;
margin:5px auto;
`;

const Location = styled.span`
font-size:28px;
font-weight:bold;
`;

const Info = styled.span`
font-size:14px;
font-weight:bold;
margin:20px 25px auto;
text-align:start;
width:90%;
`;

const Infocontainer = styled.div`
display:flex;
width:90%;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`;

const Infocard = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Infoicon = styled.img`
  width: 36px;
  height: 36px;
`;
const Infolabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const Infocomponent = (props) =>{
    const {name, value} = props;
    return(
        <Infocard>
            <Infoicon src={WeatherInfoIcons[name]} />
            <Infolabel>
                {value}
                <span>{name}</span>
            </Infolabel>
        </Infocard>
    );
};

const Weather = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
        <Condition>
            <Temp>
                <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                {`  |  ${weather?.weather[0].description}`}
            </Temp>
            <Logo src={WeatherIcons[weather?.weather[0].icon]}/>
        </Condition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <Info>Weather Info</Info>
        <Infocontainer>
            <Infocomponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
            <Infocomponent name={"humidity"} value={weather?.main?.humidity}/>
            <Infocomponent name={"wind"} value={weather?.wind?.speed}/>
            <Infocomponent name={"pressure"} value={weather?.main?.pressure}/>
        </Infocontainer>
        </>
    );
};

export default Weather;
