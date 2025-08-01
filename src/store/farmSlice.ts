import { createSlice } from "@reduxjs/toolkit";
import { BarnBaseCost, BarnCostMultiplier, BarnWPSValue, FarmersBaseCost, FarmersCostMultiplier, FarmerWPSValue, FertilizerBaseCost, FertilizerCostMultiplier, FertilizerWPSValue, TractorBaseCost, TractorCostMultiplier, TractorWPSValue, WhickenBaseCost, WhickenCostMultiplier, WhickenWPSValue, WowBaseCost, WowCostMultiplier, WowWPSValue } from "../configuration/gameConstants";


const initialState = {
    /// FERTILIZER
    fertilizer: 0,
    fertilizerWPSValue: FertilizerWPSValue,
    fertilizerCost: FertilizerBaseCost,
    fertilizerDescription: "Fertilizer boosts the growth rate of your crops, increasing wheat production. Upgrade your fertilizer to enhance its effectiveness.",
    /// WHICKENS
    whickens: 0,
    whickenWPSValue: WhickenWPSValue,
    whickenCost: WhickenBaseCost,
    whickenDescription: "Wheat Chickens are the backbone of your farm, providing a steady supply of wheat. Upgrade your whickens to increase their productivity.",
    /// WOWS
    wows: 0,
    wowWPSValue: WowWPSValue,
    wowCost: WowBaseCost,
    wowDescription: "Wheat Cows are essential for their wheat juice, which boosts your farm's productivity. Upgrade your wows to enhance their efficiency.",
    /// FARMERS
    farmers: 0,
    farmerWPSValue: FarmerWPSValue,
    farmerCost: FarmersBaseCost,
    farmerDescription: "Farmers are essential for planting and harvesting crops. Upgrade your farmers to increase their productivity.",
    /// TRACTORS
    tractors: 0,
    tractorWPSValue: TractorWPSValue,
    tractorCost: TractorBaseCost,
    tractorDescription: "Tractors help in plowing and planting crops faster. Upgrade your tractors to enhance their efficiency.",
    /// BARNS
    barns: 0,
    barnWPSValue: BarnWPSValue,
    barnCost: BarnBaseCost,
    barnDescription: "Barns are essential for storing your crops and livestock. Upgrade your barns to increase storage capacity and efficiency.",
};

export const farmSlice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    upgradeFertilizer: (state, action) => {
      state.fertilizer += action.payload;
      state.fertilizerCost *= Math.pow(FertilizerCostMultiplier, action.payload);
    },
    upgradeWhickens: (state, action) => {
      state.whickens += action.payload;
      state.whickenCost *= Math.pow(WhickenCostMultiplier, action.payload);
    },
    upgradeWows: (state, action) => {
      state.wows += action.payload;
      state.wowCost *= Math.pow(WowCostMultiplier, action.payload);
    },
    upgradeFarmers: (state, action) => {
      state.farmers += action.payload;
      state.farmerCost *= Math.pow(FarmersCostMultiplier, action.payload);
    },
    upgradeTractors: (state, action) => {
      state.tractors += action.payload;
      state.tractorCost *= Math.pow(TractorCostMultiplier, action.payload);
    },
    upgradeBarns: (state, action) => {
      state.barns += action.payload;
      state.barnCost *= Math.pow(BarnCostMultiplier, action.payload);
    },
    reset: () => initialState,
  },
});

export const { upgradeFertilizer, upgradeWhickens, upgradeWows,upgradeFarmers, upgradeTractors, upgradeBarns, reset: resetFarm } = farmSlice.actions;