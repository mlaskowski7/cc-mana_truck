"use client";

import { useAppDispatch } from "@/store";
import { nextRound } from "@/store/round";
import React, { useState } from "react";

const ManaPicker = () => {
  const dispatch = useAppDispatch();
  const [manaCoins, setManaCoins] = useState(2);

  const manaTypes = ["fire", "water", "earth", "air", "instant", "super"];

  const handlePickMana = (manaType: string) => {
    // dispatch(addMana({ player, type: manaType as any }));
    dispatch(nextRound());
  };

  return (
    <div className="text-center">
      <h2 className="text-white">Pick Mana</h2>
      <p className="text-gray-500">Mana coins left: {manaCoins}</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {manaTypes.map((type) => (
          <button
            key={type}
            className="bg-blue-700 text-white p-2 rounded hover:bg-blue-500 cursor-pointer ease-in-out duration-300"
            onClick={() => handlePickMana(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ManaPicker;
