"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { utilizeMana } from "@/store/players";
import { nextRound } from "@/store/round";
import React, { useEffect, useState } from "react";

const ManaUtilizer = () => {
  const dispatch = useAppDispatch();
  const { turn, round } = useAppSelector((state) => state.round);
  const { player1, player2 } = useAppSelector((state) => state.players);

  const player = turn === 1 ? player1 : player2;
  const usableMana = player.mana.filter((m) => m.usable);

  const [selectedManaTypes, setSelectedManaTypes] = useState<string[]>([]);

  const toggleSelectedMana = (manaType: string) => {
    setSelectedManaTypes((prev) => {
      if (prev.includes(manaType)) {
        return prev.filter((type) => type !== manaType);
      } else {
        return [...prev, manaType];
      }
    });
  };

  const handleUseSelectedMana = () => {
    dispatch(
      utilizeMana({
        manasUsed: selectedManaTypes,
        turn: turn,
        reusableOnRound: round + 1,
      })
    );
    dispatch(nextRound());
  };

  return (
    <div className="text-center">
      <h2 className="text-white">Use Your Mana</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {usableMana.length > 0 ? (
          usableMana.map((m, index) => {
            const isSelected = selectedManaTypes.includes(m.type);
            return (
              <button
                key={index}
                className={`p-2 rounded text-white ease-in-out duration-300 cursor-pointer
                  ${
                    isSelected
                      ? "bg-blue-900 hover:bg-blue-700"
                      : "bg-blue-700 hover:bg-blue-900"
                  }
                `}
                onClick={() => toggleSelectedMana(m.type)}
              >
                {m.type.toUpperCase()}
              </button>
            );
          })
        ) : (
          <button
            className="text-gray-500 hover:underline underline-offset-4 ease-in-out duration-300 cursor-pointer"
            onClick={handleUseSelectedMana}
          >
            No usable mana, click to proceed
          </button>
        )}
      </div>
      {selectedManaTypes.length > 0 && (
        <div className="mt-6">
          <button
            className="text-white p-2 rounded border-1 border-white hover:underline underline-offset-4 ease-in-out duration-300 cursor-pointer"
            onClick={handleUseSelectedMana}
          >
            Use Selected Mana
          </button>
        </div>
      )}
    </div>
  );
};

export default ManaUtilizer;
