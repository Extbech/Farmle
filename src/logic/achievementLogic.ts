import type { Achievement } from "../store/achievementSlice";
import type { RootState } from "../store/store";

export const getAllAchievements = (state: RootState): Achievement[] => state.achievements.wheatAchievements;

export const getUntriggeredCompletedAchievements = (state: RootState): Achievement[] => {
    return getAllAchievements(state).filter(achievement => achievement.completed && !achievement.toastTriggered);
};