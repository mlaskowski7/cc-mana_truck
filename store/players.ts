import { Mana, ManaType } from "@/constants/mana";
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
    pickMana: (
      state,
      action: PayloadAction<{
        turn: 1 | 2;
        type: ManaType;
        usableOnRound: number;
      }>
    ) => {
      const manaToPush = {
        type: action.payload.type,
        usable:
          action.payload.type.toString() === "instant" ||
          action.payload.type.toString() === "super",
        usableOnRound: action.payload.usableOnRound,
      };
      if (action.payload.turn === 1) {
        state.player1.mana.push(manaToPush);
      } else {
        state.player2.mana.push(manaToPush);
      }
    },
    utilizeMana: (
      state,
      action: PayloadAction<{
        manasUsed: string[];
        turn: 1 | 2;
        reusableOnRound: number;
      }>
    ) => {
      if (action.payload.turn === 1) {
        action.payload.manasUsed.forEach((mana) => {
          const foundMana = state.player1.mana.find(
            (m) => m.type == mana && m.usable == true
          );
          if (foundMana) {
            foundMana.usable = false;
            foundMana.usableOnRound = action.payload.reusableOnRound;
          }
        });

        state.player1.mana = state.player1.mana.filter(
          (mana) => mana.type != "instant"
        );
      } else {
        action.payload.manasUsed.forEach((mana) => {
          const foundMana = state.player2.mana.find(
            (m) => m.type == mana && m.usable == true
          );
          if (foundMana) {
            foundMana.usable = false;
            foundMana.usableOnRound = action.payload.reusableOnRound;
          }
        });

        state.player2.mana = state.player2.mana.filter(
          (mana) => mana.type != "instant"
        );
      }
    },
    refreshManaTaps: (
      state,
      action: PayloadAction<{
        round: number;
        player: 1 | 2;
      }>
    ) => {
      if (action.payload.player === 1) {
        state.player1.mana.forEach((m) => {
          if (m.usableOnRound <= action.payload.round) {
            m.usable = true;
          }
        });
      } else {
        state.player2.mana.forEach((m) => {
          if (m.usableOnRound <= action.payload.round) {
            m.usable = true;
          }
        });
      }
    },
  },
});

export const { setPlayersNames, pickMana, utilizeMana, refreshManaTaps } =
  playerSlice.actions;
export default playerSlice;
