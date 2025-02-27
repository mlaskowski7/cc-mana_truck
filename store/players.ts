import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  name: string;
  mana: ManaState;
}

interface ManaState {
  elemental: {
    fire: number;
    water: number;
    earth: number;
    air: number;
  };
  instant: number;
  super: number;
}

interface PlayerState {
  player1: Player;
  player2: Player;
}

const initialState: PlayerState = {
  player1: {
    name: "",
    mana: {
      elemental: {
        fire: 0,
        water: 0,
        earth: 0,
        air: 0,
      },
      instant: 0,
      super: 0,
    },
  },
  player2: {
    name: "",
    mana: {
      elemental: {
        fire: 0,
        water: 0,
        earth: 0,
        air: 0,
      },
      instant: 0,
      super: 0,
    },
  },
};

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayersNames: (
      state,
      action: PayloadAction<{ player1: string; player2: string }>
    ) => {
      state.player1.name = action.payload.player1;
      state.player2.name = action.payload.player2;
    },
    updateMana: (
      state,
      action: PayloadAction<{ player: 1 | 2; type: ManaType; amount: number }>
    ) => {
      const player =
        action.payload.player === 1 ? state.player1 : state.player2;
      const { type, amount } = action.payload;

      if (["fire", "water", "earth", "air"].includes(type)) {
        player.mana.elemental[type as keyof typeof player.mana.elemental] +=
          amount;
      } else {
        player.mana[type as "instant" | "super"] += amount;
      }
    },
  },
});

export const { setPlayersNames, updateMana } = playerSlice.actions;
export default playerSlice;
