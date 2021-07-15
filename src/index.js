import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';

function Index() {
  return (
    <div className="Index">
    <Weather />
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< Index/>, rootElement);