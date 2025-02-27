"use client";

import PlayerCard from "@/components/PlayerCard";
import PlayerForm from "@/components/PlayerForm";
import { useAppSelector } from "@/store";
import React from "react";

const Home = () => {
  const { player1, player2 } = useAppSelector((state) => state.players);

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-6 rounded-lg">
      {!player1 || !player2 ? (
        <PlayerForm />
      ) : (
        <div className="flex flex-col space-y-4">
          <PlayerCard name={player1} />
          <PlayerCard name={player2} />
        </div>
      )}
    </div>
  );
};

export default Home;
