import React from 'react';
import "./Forecast.css"
export default function Forecast(){
    return (
    <div className="WeatherForecast">
      <div className="row">
      
         <div className="col-2.4">
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/04d@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
         
    <div className="col-2.4">       
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/04d@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>

        <div className="col-2.4">
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/04d@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>

         <div className="col-2.4">
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/04d@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>

         <div className="col-2.4">
          <div className="WeatherForecast-day">Thu</div>
           <img className="imgForcast" src={`http://openweathermap.org/img/wn/04d@2x.png`}></img> 
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>

       
      </div>
    </div>
  );
}