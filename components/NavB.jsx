"use client";
import React from "react";
import Tendencias from "./Tendencias";

const tendencias = {
  countries: [
    { label: "Iceland", value: "iceland" },
    { label: "Egypt", value: "egypt" },
    { label: "Japan", value: "japan" },
    { label: "Brazil", value: "brazil" },
    { label: "Thailand", value: "thailand" },
    { label: "New Zealand", value: "new zealand" },
    { label: "Kenya", value: "kenya" },
    { label: "Greece", value: "greece" },
  ],
  animals: [
    { label: "Siberian Tiger", value: "siberian tiger" },
    { label: "Snow Leopard", value: "snow leopard" },
    { label: "Polar Bear", value: "polar bear" },
    { label: "Red Panda", value: "red panda" },
    { label: "Hummingbird", value: "hummingbird" },
    { label: "Octopus", value: "octopus" },
    { label: "Peacock", value: "peacock" },
  ],
  places: [
    { label: "Santorini", value: "santorini" },
    { label: "Bora Bora", value: "bora bora" },
    { label: "Cappadocia", value: "cappadocia" },
    { label: "Great Barrier Reef", value: "great barrier reef" },
    { label: "Antelope Canyon", value: "antelope canyon" },
  ],
};

const NavB = ({ peticionN }) => {
  return (
    <Tendencias tendencias={tendencias} handleClick={(e) => peticionN(e)} />
  );
};

export default NavB;
