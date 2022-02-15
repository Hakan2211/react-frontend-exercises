import "./app.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Work from "../pages/Work/Work";
import Food from "../pages/Food/Food";
import About from "../pages/About/About";

import Header from "../components/Layout/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/food" element={<Food />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
