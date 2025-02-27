"use client";

import React, { useState } from "react";

interface PlayerCardProps {
  name: string;
}

const PlayerCard = (props: PlayerCardProps) => {
  const [manaCoins, setManaCoins] = useState(2);

  const { name } = props;

  return (
    <div className="bg-gray-900 p-8 rounded-2xl">
      <h2 className="text-2xl">{name}</h2>
      <p>
        Mana coins: <b>{manaCoins}</b>
      </p>
    </div>
  );
};

export default PlayerCard;
