import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type manaAction = "pick mana" | "use mana";

interface RoundState {
  round: number;
  turn: 1 | 2;
  action: manaAction;
}

const initialState: RoundState = {
  round: 1,
  turn: 1,
  action: "pick mana",
};

const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    setRound: (
      state,
      action: PayloadAction<{ round: number; turn: 1 | 2; action: manaAction }>
    ) => {
      state.round = action.payload.round;
      state.turn = action.payload.turn;
      state.action = action.payload.action;
    },
    nextRound: (state) => {
      state.turn = state.turn === 1 ? 2 : 1;
      if (state.turn === 1) {
        state.round += 1;
      }
      state.action = "pick mana";
    },
  },
});

export const { setRound, nextRound } = roundSlice.actions;
export default roundSlice;
