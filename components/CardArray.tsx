import React, { useState, useEffect } from "react";
import styleGames from "./StyleGames.module.css";

interface Item {
  id: string | number;
  value: number | string;
  flipped?: boolean;
  color?: string;
}

export const CardArray = ({
  items,
  loading,
}: {
  items: Item[][];
  loading: boolean;
}) => {
  const [itemsDuplicated, setItemsDuplicated] = useState<Item[][]>(items);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [attempts, setAttempts] = useState(0);

  const addSelectedItem = (item: Item) => {
    if (selectedItems.length < 2) {
      const flipAnimation = (element: HTMLElement | null) => {
        if (element) {
          element.classList.add(styleGames.flipCard);
          setTimeout(() => {
            element.classList.remove(styleGames.flipCard);
          }, 2000);
        }
      };
      flipAnimation(document.getElementById(item.id.toString()));
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    if (selectedItems.length === 2) {
      const [item1, item2] = selectedItems;
      if (item1.id === item2.id) {
        setSelectedItems([]);
        setAttempts((prev) => prev + 1);
        return;
      }

      const idItem1 = item1.id.toString().replace("d", "");
      const idItem2 = item2.id.toString().replace("d", "");

      if (idItem1 === idItem2) {
        const newMatrix = itemsDuplicated.map((row) =>
          row.map((item) =>
            item.id === item1.id || item.id === item2.id
              ? { ...item, flipped: true }
              : item
          )
        );
        setItemsDuplicated(newMatrix);
        setSelectedItems([]);
      } else {
        const shakeError = (element: HTMLElement | null) => {
          if (element) {
            element.classList.add(styleGames.shakeError);
            setTimeout(() => {
              element.classList.remove(styleGames.shakeError);
              setSelectedItems([]);
            }, 2000);
          }
        };
        console.log(item1.id.toString());
        console.log(item2.id.toString());
        shakeError(document.getElementById(item2.id.toString()));
        shakeError(document.getElementById(item1.id.toString()));

        setAttempts((prev) => prev + 1);
      }
    }
  }, [selectedItems]);

  useEffect(() => {
    setItemsDuplicated(items);
  }, [items]);

  return (
    <div className="flex flex-col items-center justify-center">
      <table className="table-auto border-separate border-spacing-3">
        <tbody>
          {itemsDuplicated.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  loading={loading}
                  addSelectedItem={addSelectedItem}
                  selectedItems={selectedItems}
                  index={rowIndex * row.length + row.indexOf(item)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-slate-200">
          Intentos: {attempts}
        </span>
      </div>
    </div>
  );
};

export default CardArray;

const Card = ({
  item,
  loading,
  addSelectedItem,
  selectedItems,
  index,
}: {
  item: Item;
  loading: boolean;
  addSelectedItem: (item: Item) => void;
  selectedItems: Item[];
  index: number;
}) => {
  return (
    <td
      id={item.id.toString()}
      className={`m-2 p-2 rounded-lg shadow-lg shadow-slate-900 text-center w-32 h-32 font-bold text-base text-slate-200 ${
        item.flipped
          ? "bg-gray-600"
          : "hover:bg-green-600 cursor-pointer select-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      }`}
      style={{
        backgroundColor: loading
          ? "#1f2937"
          : item.flipped
          ? "#1f2937"
          : selectedItems.includes(item)
          ? "#15803d"
          : item.color,
        color:
          loading || item.flipped || selectedItems.includes(item)
            ? "white"
            : "transparent",
      }}
      onClick={() =>
        loading ? null : item.flipped ? null : addSelectedItem(item)
      }
    >
      {selectedItems.includes(item) ? (
        item.value
      ) : item.flipped ? (
        item.value
      ) : (
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-200">{index + 1}</span>
        </div>
      )}
    </td>
  );
};
