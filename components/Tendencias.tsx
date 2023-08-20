"use client";
import React from "react";

const list_tendencias = {
  Countries: [
    { label: "Iceland", value: "iceland" },
    { label: "Egypt", value: "egypt" },
    { label: "Japan", value: "japan" },
    { label: "Brazil", value: "brazil" },
    { label: "Thailand", value: "thailand" },
    { label: "New Zealand", value: "new zealand" },
    { label: "Kenya", value: "kenya" },
    { label: "Greece", value: "greece" },
  ],
  Animals: [
    { label: "Siberian Tiger", value: "siberian tiger" },
    { label: "Snow Leopard", value: "snow leopard" },
    { label: "Polar Bear", value: "polar bear" },
    { label: "Red Panda", value: "red panda" },
    { label: "Hummingbird", value: "hummingbird" },
    { label: "Octopus", value: "octopus" },
    { label: "Peacock", value: "peacock" },
  ],
  Places: [
    { label: "Santorini", value: "santorini" },
    { label: "Bora Bora", value: "bora bora" },
    { label: "Cappadocia", value: "cappadocia" },
    { label: "Great Barrier Reef", value: "great barrier reef" },
    { label: "Antelope Canyon", value: "antelope canyon" },
  ],
};

const Tendencias = ({ onSearch }: { onSearch: (value: string) => void }) => {
  return (
    <div className="flex flex-col items-start gap-7">
      {Object.keys(list_tendencias).map((key, index) => (
        <div key={index}>
          <h4 className="font-bold">{key}</h4>
          <div className="flex flex-col items-start ml-2 border-l-2 border-gray-600 pl-2">
            {list_tendencias[key as keyof typeof list_tendencias].map(
              (item, index) => (
                <label
                  key={index}
                  onClick={(e) => {
                    onSearch(item.value);
                  }}
                  className="text-slate-200 border-b-2 border-transparent cursor-pointer whitespace-nowrap  hover:text-gray-400 hover:border-b-2 hover:border-gray-600 transition duration-300"
                >
                  {item.label}
                </label>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tendencias;
