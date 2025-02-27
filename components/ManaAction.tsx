"use client";

import ManaPicker from "@/components/ManaPicker";
import ManaUtilizer from "@/components/ManaUtilizer";
import { useAppDispatch, useAppSelector } from "@/store";
import { refreshManaTaps } from "@/store/players";
import React, { useEffect, useState } from "react";

const ManaAction = () => {
  const dispatch = useAppDispatch();
  const [manaCoins, setManaCoins] = useState(2);
  const { turn, round } = useAppSelector((state) => state.round);

  useEffect(() => {
    setManaCoins(2);
    dispatch(refreshManaTaps({ round }));
  }, [turn]);

  return (
    <div className="mt-4">
      {manaCoins > 0 ? (
        <ManaPicker manaCoins={manaCoins} setManaCoins={setManaCoins} />
      ) : (
        <ManaUtilizer />
      )}
    </div>
  );
};

export default ManaAction;
