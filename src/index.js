import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';



function Index() {
  return (
    <div className="Index">
      
   <Form City="Tel Aviv"/>
   
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< Index/>, rootElement);
