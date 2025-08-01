import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  purchaseAmount: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updatePurchaseAmount: (state) => {
      switch (state.purchaseAmount) {
        case 1:
          state.purchaseAmount = 10;
          break;
        case 10:
          state.purchaseAmount = 100;
          break;
        case 100:
          state.purchaseAmount = 1;
          break;
        default:
          state.purchaseAmount = 1;
      }
    },
    reset: () => initialState,
  },
});

export const { updatePurchaseAmount, reset: resetGame } = filterSlice.actions;
