import React from 'react';
export default function ForecastDay(props){
return(
    <div className="col-2.4">       
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/04d@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{props.data}°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
)
}