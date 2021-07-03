import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';
import Card from './Card';
function Index() {
  return (
    <div className="Index">
   <Form />
   <Card/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< Index/>, rootElement);
