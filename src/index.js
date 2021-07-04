import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';


function Index() {
  return (
    <div className="Index">
      <a href="https://github.com/naomi41/React-app"> Open source code</a>
   <Form />
   
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(< Index/>, rootElement);
