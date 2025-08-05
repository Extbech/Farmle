import { Paper, Typography } from "@mui/material";
import type { Achievement } from "../../store/achievementSlice";

export const AchievementHistoryItem = ({ achievement }: { achievement: Achievement }) => {
    return (
        <Paper
            elevation={achievement.completed ? 6 : 1}
            sx={{
                padding: 2,
                margin: 1,
                maxWidth: 200,
                minWidth: 200,
                minHeight: 100,
                maxHeight: 100,
                opacity: achievement.completed ? 1 : 0.8,
                transition: 'transform 0.15s, box-shadow 0.15s, background 0.15s',
                backgroundColor: achievement.completed ? 'rgb(25, 118, 210)' : '#bc3636ff',
                color: achievement.completed ? '#fff' : '#fdfdfdff',
            }}
        >
            <Typography variant="h6" gutterBottom>{achievement.name}</Typography>
            <Typography variant="body2">{achievement.description}</Typography>
        </Paper>
    );
};