import React from 'react';

export default function WeatherInfo(props){
    
    return(
<div>  
            <img
            src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`} 
            alt= {props.info.description} ></img> 

            <ul>
             <li> {props.info.description} </li>
           <li> {Math.round(props.info.temp)}°C </li>
          </ul>
          
         <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
          </div>
    )
}