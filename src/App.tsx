import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "@assets";
import { Home, CreatePost } from "@pages";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <p className="text-black font-bold">
        Flying Frigate Productions Proudly presents -{" "}
        <span className="text-red-700">Dall-E</span>
        <img src={logo} />
      </p>
      <Home />
    </div>
  );
};

export default App;
