import Link from "next/link";
import React from "react";

const Tendencias = ({ tendencias, handleClick }) => {
  return (
    <div className="flex flex-col items-start gap-7">
      <h4 className="font-bold">Animales</h4>
      <div className="flex flex-col items-start ml-2 border-l-2 border-gray-600 pl-2">
        {tendencias.animals.map((item, index) => (
          <label
            key={index}
            onClick={(e) => {
              handleClick(item.value);
            }}
            className="border-b-2 border-transparent cursor-pointer whitespace-nowrap  hover:text-gray-400 hover:border-b-2 hover:border-gray-600 transition duration-300"
          >
            {item.label}
          </label>
        ))}
      </div>

      <h4 className="font-bold">Paises</h4>
      <div className="flex flex-col items-start ml-2 border-l-2 border-gray-600 pl-2">
        {tendencias.countries.map((item, index) => (
          <label
            key={index}
            onClick={(e) => {
              handleClick(item.value);
            }}
            className="border-b-2 border-transparent cursor-pointer whitespace-nowrap  hover:text-gray-400 hover:border-b-2 hover:border-gray-600 transition duration-300"
          >
            {item.label}
          </label>
        ))}
      </div>

      <h4 className="font-bold "> Lugares</h4>
      <div className="flex flex-col items-start ml-2 border-l-2 border-gray-600 pl-2">
        {tendencias.places.map((item, index) => (
          <label
            key={index}
            onClick={(e) => {
              handleClick(item.value);
            }}
            className="border-b-2 border-transparent cursor-pointer whitespace-nowrap  hover:text-gray-400 hover:border-b-2 hover:border-gray-600 transition duration-300"
          >
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Tendencias;
