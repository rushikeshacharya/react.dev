import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

// function Component2({ user }) {
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      {/* <Component3 user={user} /> */}
      <Component3 />
    </>
  );
}

function Component3() {
  // function Component3({ user }) {

  return (
    <>
      <h1>Component 3</h1>
      {/* <Component4 user={user} /> */}
      <Component4 />
    </>
  );
}

// function Component4({ user }) {
function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      {/* <Component5 user={user} /> */}
      <Component5 />
    </>
  );
}

function Component5() {
  // function Component5({ user }) {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const App = () => {
  const [user, setUser] = useState("Jay Hind!!!");

  return (
    // <>
    //   <h1>{`Hello ${user}!`}</h1>
    //   <Component2 user={user} />
    // </>

    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      {/* <Component2 user={user} /> */}
      <Component2 />
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
