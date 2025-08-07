import type { Achievement } from "../store/achievementSlice";
import type { RootState } from "../store/store";

export const getAllAchievements = (state: RootState): Achievement[] => [...state.achievements.data.wheatAchievements, ...state.achievements.data.prestigeAchievement];

export const getAllAchievementsSorted = (state: RootState): Achievement[] => {
    return getAllAchievements(state).sort((a, b) => {
        if (a.completed && !b.completed) return -1;
        if (b.completed && !a.completed) return 1;
        return 0;
    });
}
export const getAllWheatAchievements = (state: RootState): Achievement[] => state.achievements.data.wheatAchievements;

export const getAllPrestigeAchievements = (state: RootState): Achievement[] => state.achievements.data.prestigeAchievement;

export const getUntriggeredCompletedWheatAchievements = (state: RootState): Achievement[] => {
    return getAllWheatAchievements(state).filter(achievement => achievement.completed && !achievement.toastTriggered);
};

export const getUntriggeredCompletedPrestigeAchievements = (state: RootState): Achievement[] => {
    return getAllPrestigeAchievements(state).filter(achievement => achievement.completed && !achievement.toastTriggered);
};

export const getAchievementBaseWheatMultiplier = (state: RootState): number => {
    return state.achievements.metadata.completed === 0 ? 1 : 1 + (state.achievements.metadata.completed / 100);
};