import React, { useState } from "react";

export default function WeatherInput({ onChangeCity }){
    const [city, setCity] = useState(null);

    function handleInput(e){
        setCity(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }

    function handleClick(){
        onChangeCity(city);
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="container-form">
                <input type="text" placeholder="Enter a city" onChange={handleInput} className="input"></input>
                <button onClick={handleClick} className="btn">Search</button>
            </form>
        </>
    );
}