"use client";

import { useAppSelector } from "@/store";
import React from "react";

interface PlayerCardProps {
  name: string;
}

const PlayerCard = (props: PlayerCardProps) => {
  const { player1, player2 } = useAppSelector((state) => state.players);
  const player = player1.name === props.name ? player1 : player2;

  return (
    <div className="bg-gray-900 p-8 rounded-2xl max-md: w-full flex justify-center items-center flex-col">
      <h2 className="text-2xl">{player.name}</h2>
      <p className="text-gray-500">Your mana:</p>
      <div className="flex max-md:flex-col gap-4 font-bold">
        <p className="text-red-600">Fire: {player.mana.elemental.fire}</p>
        <p className="text-blue-400">Water: {player.mana.elemental.water}</p>
        <p className="text-green-600">Earth: {player.mana.elemental.earth}</p>
        <p className="text-gray-300">Air: {player.mana.elemental.air}</p>
        <p className="text-yellow-200">Instant: {player.mana.instant}</p>
        <p className="text-purple-800">Super: {player.mana.super}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
