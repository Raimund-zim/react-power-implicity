import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
    </div>
  );
};

export default App;
