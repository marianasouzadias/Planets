import React from "react";
import Navbar from "./components/Navbar";
import PlanetList from "./components/PlanetList";
import planets from "./data/planets.json";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar planetsData={planets} />
      <PlanetList />
      <Outlet />
    </>
  );
}

export default App;
