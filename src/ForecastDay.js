import React from 'react';
export default function ForecastDay(props){
return(
    <div className="col-2.4">       
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{Math.round( props.data.temp.max)}°</span>
            <span className="WeatherForecast-temperature-min">{Math.round( props.data.temp.min)}°</span>
          </div>
        </div>
)
}