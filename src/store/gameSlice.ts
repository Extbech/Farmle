import { createSlice } from '@reduxjs/toolkit';
import { TickRateInMilliseconds } from '../configuration/gameConstants';


const initialState = {
  wheat: 10,
  wps: 1, // wheat per second
  prestige: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementWheat: (state, action) => {
      state.wheat += action.payload * (TickRateInMilliseconds / 1000 );
    },
    increaseWPS: (state, action) => {
        state.wps += action.payload;
    },
    increasePrestige: (state, action) => {
        state.prestige += action.payload;
    },
    spendWheat: (state, action) => {
        if (state.wheat >= action.payload) {
            state.wheat -= action.payload;
        } else {
            console.warn("Not enough wheat to spend");
        }
    },
    reset: () => initialState,
  },
});

export const { incrementWheat, increaseWPS: increaseWPS, increasePrestige, spendWheat, reset: resetGame } = gameSlice.actions;
