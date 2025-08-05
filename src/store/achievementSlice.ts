import { createSlice } from "@reduxjs/toolkit";

export type Achievement = {
    id: number;
    internalId: number;
    name: string;
    criteria?: number;
    completed: boolean;
    toastTriggered: boolean;
    description: string;
};

type WheatAchievementType = "WPS" | "Wheat";

const initialState = {
    /// WHEAT
    wheatAchievements: [
        {
            id: 1,
            internalId: 1,
            name: "Test",
            type: "WPS" as WheatAchievementType,
            criteria: 1,
            completed: false,
            toastTriggered: false,
            description: "Test achievement for wheat production."
        },
        {
            id: 1,
            internalId: 2,
            name: "Novice Farmer",
            type: "WPS" as WheatAchievementType,
            criteria: 10,
            completed: false,
            toastTriggered: false,
            description: "Reach 10.0 wheat production (WPS)."
        },
        {
            id: 1,
            internalId: 3,
            name: "Sweet Wheat",
            type: "Wheat" as WheatAchievementType,
            criteria: 1000,
            completed: false,
            toastTriggered: false,
            description: "Harvest 1,000 wheat."
        }
    ],
    prestigeAchievement: [
        {
            id: 2,
            internalId: 1,
            name: "Rookie Numbers",
            criteria: 1,
            completed: false,
            toastTriggered: false,
            description: "Get your first Prestige Point."

        }
    ]
};

export const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {
    updateWheatAchievements: (state, action: { payload: { wps: number, wheat: number } }) => {
        state.wheatAchievements.forEach((achievement) => {
            if (achievement.type === "WPS" && action.payload.wps >= achievement.criteria! && !achievement.completed) {
                achievement.completed = true;
            }
            if (achievement.type === "Wheat" && action.payload.wheat >= achievement.criteria! && !achievement.completed) {
                achievement.completed = true;
            }
        });
    },
    updateWheatAchievementsTrigger: (state, action: { payload: Achievement[] }) => {
        state.wheatAchievements.forEach((achievement) => {
            if (action.payload.some(triggered => triggered.internalId === achievement.internalId)) {
                achievement.toastTriggered = true;
            }
        });
    },
    updatePrestigeAchievements: (state, action: { payload: number }) => {
        state.prestigeAchievement.forEach((achievement) => {
            if (!achievement.completed && action.payload >= achievement.criteria) {
                achievement.completed = true;
            }
        });
    },
    updatePrestigeAchievementsTrigger: (state, action: { payload: Achievement[] }) => {
        state.prestigeAchievement.forEach((achievement) => {
            if (action.payload.some(triggered => triggered.internalId === achievement.internalId)) {
                achievement.toastTriggered = true;
            }
        });
    },
    reset: () => initialState,
  },
});

export const { updateWheatAchievements, updateWheatAchievementsTrigger, updatePrestigeAchievements, updatePrestigeAchievementsTrigger, reset: resetUpgrades } = achievementSlice.actions;