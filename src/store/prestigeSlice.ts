import { createSlice } from "@reduxjs/toolkit";
import { PrestigeBreakPoint, PrestigeCostMultiplier } from "../configuration/gameConstants";

export type Prestige = {
    id: number;
    name: string;
    description: string;
    multiplier: number;
    cost: number;
    level: number;
    maxLevel: number;
    available: boolean;
    unlocks: number[];
}

const initialState = {
    metadata: {
        prestigePointsOwned: 0,
        perstigePointsSpent: 0,
        prestigeBreakPoint: PrestigeBreakPoint
    },
    data: {
        
        humbleFarmer: {
        id: 1,
        name: "Humble Farmer",
        description: "Increase you overall wheat production by 10%.",
        multiplier: 1.1,
        cost: 1,
        level: 0,
        maxLevel: 1,
        available: true,
        unlocks: [2, 3]
        },
        stinkyFertilizer: {
            id: 2,
            name: "Stinky Fertilizer",
            description: "Increase the production of your fertilizers by 20%.",
            multiplier: 1.2,
            cost: 2,
            level: 0,
            maxLevel: 5,
            available: false,
            unlocks: [5]
        },
        whickenWhisperer: {
            id: 3,
            name: "Whicken Whisperer",
            description: "Increase the production of your whickens by 20%.",
            multiplier: 1.2,
            cost: 2,
            level: 0,
            maxLevel: 5,
            available: false,
            unlocks: []
        },
        cowCulator: {
            id: 4,
            name: "Cow Culator",
            description: "Increase the production of your cows by 20%.",
            multiplier: 1.2,
            cost: 2,
            level: 0,
            maxLevel: 5,
            available: false,
            unlocks: []
        },
        dirtCheap: {
            id: 5,
            name: "Dirt Cheap",
            description: "Reduce the cost of Fertilizers by 10%.",
            multiplier: 0.9,
            cost: 3,
            level: 0,
            maxLevel: 2,
            available: false,
            unlocks: []
        }
    }
};

export const prestigeSlice = createSlice({
  name: 'prestige',
  initialState,
  reducers: {
    incrementPrestigePoints: (state, action: { payload: number }) => {
        if (action.payload >= state.metadata.prestigeBreakPoint) {
            state.metadata.prestigePointsOwned ++;
            state.metadata.prestigeBreakPoint *= PrestigeCostMultiplier;
        }
    },
    purchasePrestige: (state, action) => {
        const prestigeToPurchase = Object.values(state.data).find(prestige => prestige.id === action.payload);
        if (
            prestigeToPurchase &&
            prestigeToPurchase.available &&
            prestigeToPurchase.level < prestigeToPurchase.maxLevel &&
            state.metadata.prestigePointsOwned >= prestigeToPurchase.cost
        ) {
            state.metadata.prestigePointsOwned -= prestigeToPurchase.cost;
            state.metadata.perstigePointsSpent += prestigeToPurchase.cost;
            prestigeToPurchase.level++;
        }
    },
    reset: () => initialState,
  },
});

export const { incrementPrestigePoints, purchasePrestige, reset } = prestigeSlice.actions;