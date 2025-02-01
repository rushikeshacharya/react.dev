import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import Body from "./components/Body";
import Profile from "./components/Profile";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
// import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {
  return (
    <>
      <ul>
        <li>Header</li>
        <li>
          Body
          <ul>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </li>
        <li>Footer</li>
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route index element={<App />} />
      <Route path="/body" element={<Body />} /> */}
      {/* <Route path="/about" element={<About />} /> */}

      <Route element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
      </Route>
      <Route path="about">
        <Route index element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
