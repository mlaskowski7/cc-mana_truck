import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface PlayerState {
  player1: string;
  player2: string;
}

const initialState: PlayerState = {
  player1: "",
  player2: "",
};

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayers: (
      state,
      action: PayloadAction<{ player1: string; player2: string }>
    ) => {
      state.player1 = action.payload.player1;
      state.player2 = action.payload.player2;
    },
  },
});

const store = configureStore({
  reducer: {
    players: playerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { setPlayers } = playerSlice.actions;
export default store;
