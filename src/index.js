import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';

function Index() {
  return (
    <div className="Index">
   <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< Index/>, rootElement);
