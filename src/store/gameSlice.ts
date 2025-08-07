import { createSlice } from '@reduxjs/toolkit';
import { TickRateInMilliseconds } from '../configuration/gameConstants';


const initialState = {
  wheat: 10,
  baseWPS: 1, // wheat per second
  baseWPC: 1,
  cumulativeWheat: 10,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementWheat: (state, action) => {
      state.wheat += action.payload * (TickRateInMilliseconds / 1000 );
      state.cumulativeWheat += action.payload * (TickRateInMilliseconds / 1000 );
    },
    incrementWheatByClick: (state) => {
      state.wheat += state.baseWPC;
      state.cumulativeWheat += state.baseWPC;
    },
    increaseWPS: (state, action) => {
        state.baseWPS += action.payload;
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

export const { incrementWheat, incrementWheatByClick, increaseWPS: increaseWPS, spendWheat, reset: resetGame } = gameSlice.actions;
