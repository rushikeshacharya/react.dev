import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [name, setName] = useState("OM");
  console.log("App rendered...");

  //to store a value without causing re-render
  const renderCount = useRef(0);

  //to access the dom elements
  const inputElement = useRef(null);

  // to store previous state value
  const previousValue = useRef("");

  useEffect(() => {
    console.log("Use Effect");

    renderCount.current = renderCount.current + 1;
    inputElement.current.focus();
    previousValue.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        ref={inputElement}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter the name"
      />
      <h2>Previous Name: {previousValue.current}</h2>
      <h2> Render Count: {renderCount.current}</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
