import { Box } from "@mui/material";
import type { Achievement } from "../../store/achievementSlice";
import { AchievementHistoryItem } from "./achievementHistoryItem";

export const AchievementsContainer = ({ achievements }: {achievements: Achievement[]}) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
            {achievements.map((achievement) => (
                <AchievementHistoryItem key={achievement.id + achievement.internalId} achievement={achievement} />
            ))}
        </Box>
    )
};