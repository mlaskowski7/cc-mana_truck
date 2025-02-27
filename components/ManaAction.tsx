"use client";

import { useAppSelector } from "@/store";
import ManaPicker from "@/components/ManaPicker";
import ManaUtilizer from "@/components/ManaUtilizer";
import React from "react";

const ManaAction = () => {
  const { action } = useAppSelector((state) => state.round);

  return (
    <div className="mt-4">
      {action === "pick mana" ? <ManaPicker /> : <ManaUtilizer />}
    </div>
  );
};

export default ManaAction;
