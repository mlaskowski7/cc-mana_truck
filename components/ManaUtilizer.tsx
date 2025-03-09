"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { utilizeMana } from "@/store/players";
import { nextRound } from "@/store/round";
import React, { useState } from "react";

const ManaUtilizer = () => {
  const dispatch = useAppDispatch();
  const { turn, round } = useAppSelector((state) => state.round);
  const { player1, player2 } = useAppSelector((state) => state.players);

  const player = turn === 1 ? player1 : player2;
  const usableMana = player.mana.filter((m) => m.usable);
  const [selectedManaIndices, setSelectedManaIndices] = useState<number[]>([]);

  const toggleSelectedMana = (manaIndex: number) => {
    setSelectedManaIndices((prevIndices) => {
      if (prevIndices.includes(manaIndex)) {
        return prevIndices.filter((i) => i !== manaIndex);
      } else {
        return [...prevIndices, manaIndex];
      }
    });
  };

  const handleUseSelectedMana = () => {
    const manasUsed = selectedManaIndices.map((i) => usableMana[i].type);
    dispatch(
      utilizeMana({
        manasUsed,
        turn,
        reusableOnRound: round + 1,
      })
    );
    setSelectedManaIndices([]);
  };

  const handleFinishTurn = () => {
    dispatch(nextRound());
  }

  return (
    <div className="text-center">
      <h2 className="text-black">Use Your Mana</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {usableMana.length > 0 ? (
          usableMana.map((mana, index) => {
            const isSelected = selectedManaIndices.includes(index);
            return (
              <button
                key={index}
                className={`p-2 rounded text-white ease-in-out duration-300 cursor-pointer
                  ${
                    isSelected
                      ? "bg-blue-600 border-2 border-black hover:bg-blue-900 hover:border-none"
                      : "bg-blue-900 hover:bg-blue-600 hover:border-2 border-black"
                  }
                `}
                onClick={() => toggleSelectedMana(index)}
              >
                {mana.type.toUpperCase()}
              </button>
            );
          })
        ) : (
          <p className="text-gray-500">No usable mana</p>
        )}
      </div>
      <div className="mt-6">
          <button className="p-2 rounded bg-gray-900 text-white 
                      hover:underline 
                      underline-offset-4 
                      ease-in-out duration-300 
                      cursor-pointer 
                      disabled:bg-gray-600 
                      disabled:opacity-50 
                      disabled:cursor-not-allowed 
                      disabled:hover:no-underline 
                      disabled:pointer-events-none"
            onClick={handleUseSelectedMana}
            disabled={usableMana.length <= 0}
          >
            Use Selected Mana
          </button>
      </div>
      <div className="mt-6">
        <button
          className="bg-gray-900 text-white p-2 rounded border-1 border-white hover:underline underline-offset-4 ease-in-out duration-300 cursor-pointer"
          onClick={handleFinishTurn}
        >
          Finish Turn
        </button>
      </div>
    </div>
  );
};

export default ManaUtilizer;
