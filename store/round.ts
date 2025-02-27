import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoundState {
  round: number;
  turn: 1 | 2;
}

const initialState: RoundState = {
  round: 1,
  turn: 1,
};

const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    setRound: (
      state,
      action: PayloadAction<{ round: number; turn: 1 | 2 }>
    ) => {
      state.round = action.payload.round;
      state.turn = action.payload.turn;
    },
    nextRound: (state) => {
      state.turn = state.turn === 1 ? 2 : 1;
      if (state.turn === 1) {
        state.round += 1;
      }
    },
  },
});

export const { setRound, nextRound } = roundSlice.actions;
export default roundSlice;
