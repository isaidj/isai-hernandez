"use client";
import CardArray from "@/components/CardArray";
import { useTimer } from "@/hooks";
import React, { useEffect, useState } from "react";

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
  const [mode, setMode] = useState(4); // 0: 4x4, 1: 6x6, 2: 10x10
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [win, setWin] = useState(false);

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
  useEffect(() => {
    const winModal = document.getElementById("winModal");
    if (winModal) {
      // Verificar si el elemento existe antes de acceder a él
      if (win) {
        winModal.classList.remove("hidden");
      } else {
        winModal.classList.add("hidden");
      }
    }
  }, [win]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <h1 className=" text-slate-200 text-3xl font-bold text-center">
        Puzzle verse
      </h1>
      <h2 className=" text-slate-200 text-tiny font-bold text-center">
        You have to match the words, complete the game to win.
      </h2>

      <div className="flex flex-row justify-center items-center gap-2">
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(2)}
        >
          2x2
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(4)}
        >
          4x4
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(6)}
        >
          6x6
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setMode(8)}
        >
          8x8
        </button>
      </div>
      {/* <Timer /> */}
      <CardArray
        items={ramdomizeMatriz({ array: data, cant: mode })}
        loading={loading}
        win={() => setWin(true)}
      />
      <WinModal
        handlePlayAgain={() => {
          setWin(false);
          setMode(mode);
        }}
      />
    </div>
  );
};

export default Game;

const WinModal = ({ handlePlayAgain }: { handlePlayAgain: () => void }) => {
  return (
    <div id="winModal" className="hidden">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className=" text-slate-200 text-3xl font-bold text-center">
              You win!
            </h1>
            <button
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                handlePlayAgain();
              }}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timer = ({
  handleStart,
  handleStop,
  handleRestart,
}: {
  handleStart: () => void;
  handleStop: () => void;
  handleRestart: () => void;
}) => {
  const { seconds, start, stop, restart } = useTimer(1000, 0);
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <span className=" text-slate-200 text-3xl font-bold text-center mr-4">
        {seconds}
      </span>
      <button
        className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => {
          start();
        }}
      >
        Play
      </button>
      <button
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => {
          stop();
        }}
      >
        Stop
      </button>
      <button
        className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => {
          restart();
        }}
      >
        Restart
      </button>
    </div>
  );
};
