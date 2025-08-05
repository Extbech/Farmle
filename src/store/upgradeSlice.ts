import { createSlice } from "@reduxjs/toolkit";

export type Upgrade = {
    id: number;
    internalId: number;
    name: string;
    cost: number;
    multiplier: number;
    purchased: boolean;
    available: boolean;
    description: string;
};

const initialState = {
    /// FERTILIZERS
    fertilizersUpgrade: [
        {
            id: 1,
            internalId: 1,
            name: "Basic Fertilizer",
            cost: 100,
            multiplier: 2.0,
            purchased: false,
            available: true,
            description: "Increases the productivity of your fertilizers by 100%."
        },
        {
            id: 1,
            internalId: 2,
            name: "Advanced Fertilizer",
            cost: 1000,
            multiplier: 3.0,
            purchased: false,
            available: false,
            description: "Increases the productivity of your fertilizers by 200%."
        }
    ],
    /// WHICKENS
    whickensUpgrade: [
        {
            id: 2,
            internalId: 1,
            name: "Basic Whicken",
            cost: 500,
            multiplier: 2.0,
            purchased: false,
            available: true,
            description: "Increases the productivity of your whickens by 100%."
        }
    ],
    /// WOWS
    wowsUpgrade: [
        {
            id: 3,
            internalId: 1,
            name: "Basic Wow",
            cost: 2_000,
            multiplier: 2.0,
            purchased: false,
            available: true,
            description: "Increases the productivity of your wows by 100%."
        }
    ],
    /// FARMERS
    farmersUpgrade: [
        {
        id: 4,
        internalId: 1,
        name: "Basic Farmer",
        cost: 10_000,
        multiplier: 2.0,
        purchased: false,
        available: true,
        description: "Increases the productivity of your farmers by 100%."
    }
    ],
    /// TRACTORS
    tractorsUpgrade: [
        {
            id: 5,
            internalId: 1,
            name: "Basic Tractor",
            cost: 100_000,
            multiplier: 2.0,
            purchased: false,
            available: true,
            description: "Increases the productivity of your tractors by 100%."
        }
    ],
    /// BARNS
    barnsUpgrade: [
        {
            id: 6,
            internalId: 1,
            name: "Basic Barn",
            cost: 1_000_000,
            multiplier: 2.0,
            purchased: false,
            available: true,
            description: "Increases the productivity of your barns by 100%."
        }
    ],
    baseUpgrade: [
        {
            id: 7,
            internalId: 1,
            name: "Whice",
            cost: 10_000_000,
            multiplier: 1.5,
            purchased: false,
            available: true,
            description: "50% increase to all wheat production."
        }
    ]
};

export const upgradeSlice = createSlice({
  name: 'upgrade',
  initialState,
  reducers: {
    updateMult: (state, action) => {
        const upgradeType = Object.values(state).find((upgrade) => upgrade.some((item) => item.id === action.payload.id));
        if (upgradeType) {
            const upgrade = upgradeType.find((item) => item.internalId === action.payload.internalId);
            if (upgrade) {
                upgrade.purchased = true;
                const nextUpgrade = upgradeType.find((item) => item.internalId === action.payload.internalId + 1);
                if (nextUpgrade) {
                    nextUpgrade.available = true;
                }
            }
        }
    },
    updateFarmersMult: (state, action) => {
      const farmer = state.farmersUpgrade.find((farmer) => farmer.id === action.payload.id);
      if (farmer) {
        farmer.purchased = false;
      }
    },
    updateTractorsMult: (state, action) => {
        const tractor = state.tractorsUpgrade.find((tractor) => tractor.id === action.payload.id);
        if (tractor) {
            tractor.purchased = false;
        }
    },
    reset: () => initialState,
  },
});

export const { updateFarmersMult, updateTractorsMult, updateMult, reset: resetUpgrades } = upgradeSlice.actions;