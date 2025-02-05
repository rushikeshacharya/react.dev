import React, { useDeferredValue, useState } from "react";
import ReactDOM from "react-dom/client";
import SlowList from "./SlowList";

const App = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <SlowList text={text} /> */}
      <SlowList text={deferredText} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
