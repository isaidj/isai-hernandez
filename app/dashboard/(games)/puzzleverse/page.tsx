"use client";
import CardArray from "@/components/CardArray";
import React, { useEffect } from "react";

const colors = {
  Charcoal: "#264653",
  "Persian green": "#2a9d8f",
  Saffron: "#e9c46a",
  "Sandy brown": "#f4a261",
  "Burnt sienna": "#e76f51",
};
interface item {
  id: string | number;
  value: number | string;
  flipped?: boolean;
  color?: string;
}
const ramdomizeMatriz = ({
  array,
  cant,
}: {
  array: Array<string>;
  cant: number;
}) => {
  //cant is number of item per row
  const middle = Math.floor(cant ** 2 / 2);
  console.log("middl2 " + middle);
  const rows = cant;
  const columns = cant;
  const matrix: item[][] = [];
  let counter = 0;
  let counter2 = 0;
  for (let x = 0; x < rows; x++) {
    let row: item[] = [];
    for (let y = 0; y < columns; y++) {
      const color =
        Object.values(colors)[
          Math.floor(Math.random() * Object.values(colors).length)
        ];
      if (counter >= middle) {
        row.push({
          id: "d" + Number(counter2 + 1),
          value: array[counter2],
          flipped: false,
          color: color,
        });
        counter2++;
      } else {
        row.push({
          id: counter + 1,
          value: array[counter],
          flipped: false,
          color: color,
        });
        counter++;
      }
    }

    matrix.push(row);
  }
  console.log(matrix);
  //randomize
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
      const randomX = Math.floor(Math.random() * rows);
      const randomY = Math.floor(Math.random() * columns);
      const temp = matrix[x][y];
      matrix[x][y] = matrix[randomX][randomY];
      matrix[randomX][randomY] = temp;
    }
  }

  return matrix;
};

const Game = () => {
  const [mode, setMode] = React.useState(4); // 0: 4x4, 1: 6x6, 2: 10x10
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    const nOfWords = Math.floor(mode ** 2 / 2);
    const getData = async () => {
      const data = await fetch(
        `https://random-word-api.herokuapp.com/word?lang=es&number=${nOfWords}`
      );
      const res = await data.json();
      console.log(res);
      setData(res);
      setLoading(false);
    };
    getData();
  }, [mode]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <h1 className="text-3xl font-bold text-center">Puzzle verse</h1>

      <div className="flex flex-row justify-center items-center gap-2">
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(2)}
        >
          2x2
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(4)}
        >
          4x4
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(6)}
        >
          6x6
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(8)}
        >
          8x8
        </button>
      </div>

      <CardArray
        items={ramdomizeMatriz({ array: data, cant: mode })}
        loading={loading}
      />
    </div>
  );
};

export default Game;
