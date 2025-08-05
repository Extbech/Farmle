import { Box, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { getAllAchievements } from "../logic/achievementLogic";
import { AchievementHistoryItem } from "../components/achievements/achievementHistoryItem";

export const Achievements = () => {
    const store = useSelector((state: RootState) => state);
    const achievements = getAllAchievements(store);

    const completedAchievements = achievements.filter(achievement => achievement.completed).length;
    const total = achievements.length;
    const percent = total > 0 ? (completedAchievements / total) * 100 : 0;

    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Achievements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%', m: 2 }}>
                <Typography variant="body1" alignSelf='center' sx={{ mb: 0.5 }}>
                    Progress: {completedAchievements} / {total} achievements completed
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={percent}
                    sx={{ height: 14, borderRadius: 6, backgroundColor: '#eee', '& .MuiLinearProgress-bar': { backgroundColor: '#1976d2' } }}
                />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
                {achievements.map((achievement) => (
                    <AchievementHistoryItem key={achievement.id + achievement.internalId} achievement={achievement} />
                ))}
            </Box>
        </Box>
    );
}