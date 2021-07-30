import React, {useState } from 'react';
import "./Forecast.css"
import axios from 'axios';
import ForecastDay from './ForecastDay';

export default  function Forecast(props){
    const [weather, setWeather] = useState(null);
      const [ready, setReady] = useState(false);

     function search(){
    let lat =props.info.coordinates.lat; 
    let lon =props.info.coordinates.lon; 
    let apiKey = `19feeaddd6a1c9e30cabe069c18a6aa4`;
    let url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(url).then(showTemperature);
     }
     function showTemperature(response) {
       setWeather(response.data.daily);
       setReady(true);
      console.log(response.data.daily);
      
     }
    

    if (ready) {
    return (
    <div className="WeatherForecast">
      <div className="row">
      <ForecastDay  data={weather[0].temp.max}  />

      <ForecastDay/>
      <ForecastDay/>
      <ForecastDay/>
      <ForecastDay/>
        
    </div>
    </div>
   ); }else {search() 
    return null
}}