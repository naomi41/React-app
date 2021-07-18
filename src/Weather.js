import './Weather.css';
import React, {useState } from 'react'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherInfo from './WeatherInfo';
import Loader from "react-loader-spinner";
import FormattedDate from './FormattedDate';
import Forecast from "./Forecast";

export default function Weather(){
const [city, setCity] = useState('bibi');
const [weatherData, setWeatherData] = useState({ ready: false });

function search(){
 let apiKey = `19feeaddd6a1c9e30cabe069c18a6aa4`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
}

 function showTemperature(response){
   console.log(response);
   setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
    });
    }
     function updateCity(event) {
    setCity(event.target.value);
  }

     function handleSubmit(event) {
    event.preventDefault();
    search();
  }

if (weatherData.ready) {
    return(
     <div className="Weather">
      <div className="card">
     <div className="card-body">
   
      <h1> {weatherData.city} </h1>
      <FormattedDate/>
      <form onSubmit={handleSubmit}> 
       <div className="row">
     <div className="col-3">
     <input  onChange={updateCity}   type="search" placeholder="Type a city.." 
      autoComplete="off" className="form-control form-control-lg  shadow-sm" />
      </div>
      <div className="col-1.5">
       <input type="submit" value="Search" className="form-control btn btn-primary form-control-lg  " />
      </div>
      </div>
      </form>
     <WeatherInfo info={weatherData} />
     <Forecast/>
     </div>
    </div>
      </div>
    )}else{
      search()
      return(
        <Loader 
        type="ThreeDots"
       color="#000000"
       height={80}
       width={80} />
      )
      }}