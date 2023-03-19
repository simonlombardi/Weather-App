import React, { useState } from "react";
import WeatherInput from "./WeatherInput";
import WeatherMainInfo from "./WeatherMainInfo";
import "../App.css"

export default function WeatherApp(){
    const [weather, setWeather] = useState(null);

    async function onChangeCity(city){
        try {
            const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=2a1de55fcafb4d3e888213338231703&q=${city}&aqi=no`)
            const requestJson = await request.json();
            console.log(requestJson)
            setWeather(requestJson);
            

        } catch (error) {}
    }
    return(
        <div className="app-container">
            <WeatherInput onChangeCity={onChangeCity} />
            <WeatherMainInfo weather={weather} />
        </div>
    );
}