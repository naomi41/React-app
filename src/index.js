import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Forecast from './Forecast';


function Index() {
  return (
    <div className="Index">
      
   <Form City="Tel Aviv"/>
   <Forecast />
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< Index/>, rootElement);
