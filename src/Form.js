import './Form.css';
import React, {useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form(props) {
  console.log(props.City);

    const [city, setCity] = useState(props.City);
  const [ul, setUl] = useState(null);
  const [h1, setH1]= useState(`Weather App`);


  function handleTemp(){
     let apiKey = `a8f5a22819d25df63838b32e0cf4b2f4`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

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
        <li>{Math.round(response.data.main.temp_min)}°C/{Math.round(response.data.main.temp_max)}°C</li>
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
      <div class="card">
     <div class="card-body">

      <h1>{h1}</h1>
      <form  onSubmit={handleSubmit}>
       <div className="row">
     <div class="col-3">
     <input onChange={updateCity} type="search" placeHolder="Type a city.." 
      autoComplete="off" class="form-control form-control-lg  shadow-sm" />
      </div>

      <div class="col-1.5">
       <input type="submit" value="Search" class="form-control btn btn-primary form-control-lg  " />
      </div>
      </div>
      </form>



      <div >{ul}</div>
    </div>
    </div>
      </div>
  );
}





