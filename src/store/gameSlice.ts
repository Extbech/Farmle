import { createSlice } from '@reduxjs/toolkit';
import { PrestigeBreakPoint, PrestigeCostMultiplier, TickRateInMilliseconds } from '../configuration/gameConstants';


const initialState = {
  wheat: 10,
  baseWPS: 1, // wheat per second
  baseWPC: 1,
  cumulativeWheat: 10,
  prestigePoints: 0,
  prestigeBreakPoint: PrestigeBreakPoint
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementWheat: (state, action) => {
      state.wheat += action.payload * (TickRateInMilliseconds / 1000 );
      state.cumulativeWheat += action.payload * (TickRateInMilliseconds / 1000 );
      if (state.cumulativeWheat >= state.prestigeBreakPoint) {
        state.prestigePoints ++;
        state.prestigeBreakPoint *= PrestigeCostMultiplier;
      }
    },
    incrementWheatByClick: (state) => {
      state.wheat += state.baseWPC;
      state.cumulativeWheat += state.baseWPC;
      if (state.cumulativeWheat >= state.prestigeBreakPoint) {
        state.prestigePoints ++;
        state.prestigeBreakPoint *= PrestigeCostMultiplier;
      }
    },
    increaseWPS: (state, action) => {
        state.baseWPS += action.payload;
    },
    increasePrestige: (state, action) => {
        state.prestigePoints += action.payload;
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

export const { incrementWheat, incrementWheatByClick, increaseWPS: increaseWPS, increasePrestige, spendWheat, reset: resetGame } = gameSlice.actions;
