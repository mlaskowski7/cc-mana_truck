import { useAppSelector } from "@/store";
import React from "react";

const Round = () => {
  const { round, turn } = useAppSelector((state) => state.round);
  const { player1, player2 } = useAppSelector((state) => state.players);
  return (
    <div className="flex flex-col gap-2 text-gray-600 text-center items-center justify-center    ">
      <p>Current round: {round}</p>
      <p>
        Player turn: <b>{turn == 1 ? player1.name : player2.name}</b>
      </p>
    </div>
  );
};

export default Round;
