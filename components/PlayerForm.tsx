"use client";

import { useState } from "react";
import { useAppDispatch } from "../store";
import { setPlayers } from "../store";

const PlayerForm = () => {
  const dispatch = useAppDispatch();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player1 && player2) {
      dispatch(setPlayers({ player1, player2 }));
    }
  };

  return (
    <div className="text-center items-center justify-center">
      <h2 className="font-semibold">Provide player names</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 p-4 rounded-lg"
      >
        <input
          type="text"
          placeholder="player1 name..."
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="p-2"
        />
        <input
          type="text"
          placeholder="player2 name..."
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          className="p-2"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white p-2 rounded hover:bg-blue-600 ease-in-out duration-300 cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
