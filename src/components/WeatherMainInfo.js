import React from "react";
import icono from "../img/marcador.png"

export default function WeatherMainInfo({ weather }){

    function weatherText(weather){
        if (weather.current.condition.text === "Sunny"){
            return "Soleado"
        }
        else if (weather.current.condition.text === "Partly cloudy"){
            return "Parcialmente nublado"
        }
        else if (weather.current.condition.text === "Clear"){
            return "Despejado"
        }
        else if (weather.current.condition.text === "Moderate or heavy rain shower"){
            return "Lluvia moderada o fuerte"
        }
        else if (weather.current.condition.text === "Overcast"){
            return "Nublado"
        }
        else if (weather.current.condition.text === "Light rain"){
            return "Lluvia ligera"
        }
        else if (weather.current.condition.text === "Light rain shower"){
            return "Lluvia ligera"
        }
    }

    if (weather !== null){
        return(
            <>
                <div className="info-location">
                    <span>{weather.location.name}, {weather.location.country} <img src={icono} className="icon" alt="location-icon" /></span>
                </div>
                <div className="info-container">
                    <div className="box-info-weather">
                        <span className="caracteristic">Hora local</span>
                        <span>{(weather.location.localtime).slice((weather.location.localtime).search(" "), )}hs</span>
                    </div>
                    <div className="box-info-weather">
                        <span>{weatherText(weather)}</span>
                        <span><img src={weather.current.condition.icon} alt = "icon-weather"/></span>
                    </div>
                    <div className="box-info-weather">
                        <span className="caracteristic">Temperatura</span>
                        <span>{weather.current.temp_c}°</span>
                    </div>
                    <div className="box-info-weather">
                        <span className="caracteristic">Sensación térmica</span>
                        <span>{weather.current.feelslike_c}°</span>
                    </div>
                    <div className="box-info-weather">
                        <span className="caracteristic">Humedad</span>
                        <span>{weather.current.humidity}%</span>
                    </div>
                    <div className="box-info-weather">
                        <span className="caracteristic">Velocidad del viento</span>
                        <span>{weather.current.wind_kph}km/h</span>
                    </div>

                </div>
            </>
        );
    }

}