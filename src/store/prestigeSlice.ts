import { createSlice } from "@reduxjs/toolkit";

export type Prestige = {
    id: number;
    name: string;
    description: string;
    multiplier: number;
    cost: number;
    level: number;
    maxLevel: number;
    available: boolean;
}

const initialState = {
    humbleFarmer: {
        id: 1,
        name: "Humble Farmer",
        description: "Increase you overall wheat production by 10%.",
        multiplier: 1.1,
        cost: 1,
        level: 0,
        maxLevel: 1,
        available: true,
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
    }
};

export const prestigeSlice = createSlice({
  name: 'prestige',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = prestigeSlice.actions;