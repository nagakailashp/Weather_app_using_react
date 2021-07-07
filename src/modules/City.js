import styled from "styled-components";
import React from "react";

const Logo = styled.img`
width: 140px;
height: 140px;
`;

const Lable = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:18px auto;
`;

const Search = styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
margin:20px auto;
& input {
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
}
& button {
    padding:10px;
    font-size:14px;
    color:white;
    background-color:black;
    border:none;
    outline:none;
    font-weight:bold;
    cursor:pointer;
}
`;

const City = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
        <Logo src={"/icon/perfect-day.svg"} />
        <Lable>Find weather of your city</Lable>
        <Search onSubmit={fetchWeather}>
            <input onChange={(e) => updateCity(e.target.value)} placeholder="City"/>
            <button type={"submit"}>Search</button>
        </Search>
        </>
    );
};

export default City;