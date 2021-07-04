import './Form.css';
import React, {useState } from 'react';
import axios from "axios";

export default function Form() {
    const [city, setCity] = useState(null);
  const [ul, setUl] = useState(null);
  const [h1, setH1]= useState("Weather App");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `a8f5a22819d25df63838b32e0cf4b2f4`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {

    setCity(event.target.value);
  }
  function showTemperature(response) {
    console.log(response);
        setH1(`Weather in ${response.data.name}`);
    setUl(
      <ul className="hi" >
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description} </li>
        <li>Humidity: {Math.round(response.data.main.humidity)} %</li>
        <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt= {response.data.weather[0].description}
          ></img>
        </li>
      </ul>
    );
  }
  return (
    <div className="Form">
      <h1>{h1}</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div >{ul}</div>
    </div>
  );
}





