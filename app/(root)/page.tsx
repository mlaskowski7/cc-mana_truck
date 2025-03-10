"use client";

import ManaAction from "@/components/ManaAction";
import PlayerCard from "@/components/PlayerCard";
import PlayerForm from "@/components/PlayerForm";
import Round from "@/components/Round";
import { useAppSelector } from "@/store";
import React from "react";

const Home = () => {
  const { player1, player2 } = useAppSelector((state) => state.players);

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-6 rounded-lg">
      {!player1.name || !player2.name ? (
        <PlayerForm />
      ) : (
        <div className="flex flex-col gap-10">
          <Round />
          <div className="flex max-md:flex-col flex-row max-ms:space-y-4 space-y-0 space-x-4 gap-4">
            <PlayerCard name={player1.name} />
            <PlayerCard name={player2.name} />
          </div>
          <ManaAction />
        </div>
      )}
    </div>
  );
};

export default Home;
