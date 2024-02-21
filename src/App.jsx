import React from "react";
import Navbar from "./components/Navbar";
import planets from "./data/planets.json";
import "./styles/App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="background ">
      <div className="stars">
        <Navbar planetsData={planets} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
