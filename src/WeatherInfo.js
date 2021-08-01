import React from 'react';
import "./WeatherInfo.css";
export default function WeatherInfo(props){
    const temp = props.info.temp;
    console.log(props.info.icon)
    return(
<div>  
            <img
            src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`} 
            alt= {props.info.description} ></img> 

            <ul className="info">
           <li > <span className="temp" >{Math.round(temp)}</span><span className="c" >°C</span> </li>
           <li> {props.info.description} </li>
           
          </ul>

         <ul className="info2">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
          </div>
    )
}