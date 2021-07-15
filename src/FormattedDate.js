import React from "react";

export default function FormattedDate() {
let now = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[now.getDay()];
let minutes= now.getMinutes(); 
let hours= now.getHours();

if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
 
  return (
    <div>
{day} {hours}:{minutes}   
    </div>
  );
}