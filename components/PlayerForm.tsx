"use client";

import { useState } from "react";
import { useAppDispatch } from "../store";
import { setPlayers } from "../store";

const PlayerForm = () => {
  const dispatch = useAppDispatch();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!player1.trim() || !player2.trim()) {
      setError("Both player names are required.");
      return;
    }
    if (player1.trim().toLowerCase() === player2.trim().toLowerCase()) {
      setError("Player names must be different.");
      return;
    }

    setError(null);
    dispatch(setPlayers({ player1, player2 }));
  };

  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="font-semibold">Provide player names</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 p-4 rounded-lg"
      >
        <input
          type="text"
          placeholder="Player 1 name..."
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Player 2 name..."
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />

        {/* Display error message if there is one */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

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
