"use client";

import { ManaType, manaTypes } from "@/constants/mana";
import { useAppDispatch, useAppSelector } from "@/store";
import { pickMana } from "@/store/players";
import React from "react";

interface ManaPickerProps {
  manaCoins: number;
  setManaCoins: (arg: number) => void;
}

const ManaPicker = (props: ManaPickerProps) => {
  const { manaCoins, setManaCoins } = props;

  const dispatch = useAppDispatch();
  const { turn, round } = useAppSelector((state) => state.round);

  const handlePickMana = (manaType: string) => {
    setManaCoins(manaType == "super" ? manaCoins - 2 : manaCoins - 1);
    dispatch(
      pickMana({
        turn: turn,
        type: manaType as ManaType,
        usableOnRound: round + 1,
      })
    );
  };

  return (
    <div className="text-center">
      <h2 className="text-white">Pick Mana</h2>
      <p className="text-gray-500">Mana coins left: {manaCoins}</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {manaTypes.map((type) => (
          <button
            key={type}
            className="bg-blue-900 text-white p-2 rounded hover:bg-blue-700 cursor-pointer ease-in-out duration-300"
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
