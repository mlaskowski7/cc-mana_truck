import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  name: string;
  mana: Mana[];
}

interface PlayerState {
  player1: Player;
  player2: Player;
}

const initialState: PlayerState = {
  player1: {
    name: "",
    mana: [],
  },
  player2: {
    name: "",
    mana: [],
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
  },
});

export const { setPlayersNames } = playerSlice.actions;
export default playerSlice;
