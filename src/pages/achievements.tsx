import { Box, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { getAllAchievementsSorted } from "../logic/achievementLogic";
import { AchievementsContainer } from "../components/achievements/achievementsContainer";

export const Achievements = () => {
    const store = useSelector((state: RootState) => state);
    const achievements = getAllAchievementsSorted(store);

    const completedAchievements = achievements.filter(achievement => achievement.completed).length;
    const total = achievements.length;
    const percent = total > 0 ? (completedAchievements / total) * 100 : 0;

    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%', m: 2 }}>
                <Typography variant="h6" alignSelf='center' sx={{ mb: 0.5 }}>
                    Progress: {completedAchievements} / {total} achievements completed
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={percent}
                    sx={{ height: 14, borderRadius: 6, backgroundColor: '#eee', '& .MuiLinearProgress-bar': { backgroundColor: (theme) => theme.palette.primary.main } }}
                />
            </Box>
            <AchievementsContainer achievements={achievements} />
        </Box>
    );
}