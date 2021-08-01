import React from 'react';
export default function ForecastDay(props){
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
return(
    <div className="col-2.4">       
          <div className="WeatherForecast-day">{day()}</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="Weather info" ></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{Math.round( props.data.temp.max)}°</span>
            <span className="WeatherForecast-temperature-min">{Math.round( props.data.temp.min)}°</span>
          </div>
        </div>
)
}