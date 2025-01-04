import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"grey",
      },
      className:"title"
    },
    "Welcome to Hands on React...!"
  );

  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading]
  );
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);