"use client";

import React, { useState } from "react";

interface PlayerCardProps {
  name: string;
}

const PlayerCard = (props: PlayerCardProps) => {
  const [manaCoins, setManaCoins] = useState(2);

  const { name } = props;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default PlayerCard;
