"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { nextRound } from "@/store/round";

import React from "react";

const ManaUtilizer = () => {
  const dispatch = useAppDispatch();
  const { turn, round } = useAppSelector((state) => state.round);
  const { player1, player2 } = useAppSelector((state) => state.players);
  const player = turn === 1 ? player1 : player2;

  const usableMana = player.mana.filter((m) => m.usable);

  const handleUseMana = (manaType: string) => {
    // dispatch(tapMana({ player: turn, type: manaType as any }));
    // dispatch(nextRound()); // Move to next turn
  };

  return (
    <div className="text-center">
      <h2 className="text-white">Use Mana</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {usableMana.length > 0 ? (
          usableMana.map((m, index) => (
            <button
              key={index}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
              onClick={() => handleUseMana(m.type)}
            >
              {m.type.toUpperCase()}
            </button>
          ))
        ) : (
          <p className="text-gray-400">No usable mana</p>
        )}
      </div>
    </div>
  );
};

export default ManaUtilizer;
