"use client";

import { useAppSelector } from "@/store";
import React from "react";

interface PlayerCardProps {
  name: string;
}

const PlayerCard = (props: PlayerCardProps) => {
  const { player1, player2 } = useAppSelector((state) => state.players);
  const player = player1.name === props.name ? player1 : player2;
  const usableMana = player.mana.filter((m) => m.usable);
  const tappedMana = player.mana.filter((m) => !m.usable);

  return (
    <div className="bg-gray-900 p-8 rounded-2xl max-md: w-full flex justify-center items-center flex-col">
      <h2 className="text-2xl">{player.name}</h2>
      <p className="text-gray-500">Your mana:</p>
      <div className="mt-2 text-white">
        <div className="grid grid-cols-3 gap-2">
          {usableMana.length > 0 ? (
            usableMana.map((m, index) => (
              <p key={index} className="bg-blue-700 p-1 text-[10px] rounded">
                {m.type.toUpperCase()}
              </p>
            ))
          ) : (
            <p className="text-gray-400">Empty</p>
          )}
        </div>
      </div>
      <div className="mt-2 text-white">
        <h3 className="text-gray-400 font-semibold text-center">Tapped</h3>
        <div className="grid grid-cols-3 gap-2">
          {tappedMana.length > 0 ? (
            tappedMana.map((m, index) => (
              <p key={index} className="bg-gray-700 p-1 text-[10px] rounded">
                {m.type.toUpperCase()}
              </p>
            ))
          ) : (
            <p className="text-gray-400">Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
