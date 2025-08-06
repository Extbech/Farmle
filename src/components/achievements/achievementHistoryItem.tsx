import { Paper, Typography } from "@mui/material";
import type { Achievement } from "../../store/achievementSlice";

export const AchievementHistoryItem = ({ achievement }: { achievement: Achievement }) => {
    return (
        <Paper
            elevation={achievement.completed ? 6 : 1}
            sx={{
                padding: 2,
                margin: 1,
                width: 230,
                height: 150,
                opacity: achievement.completed ? 1 : 0.8,
                transition: 'transform 0.15s, box-shadow 0.15s, background 0.15s',
                backgroundColor: achievement.completed ? 'rgb(25, 118, 210)' : '#888',
                color: achievement.completed ? '#fff' : '#fdfdfdff',
            }}
        >
            <Typography variant="h6" gutterBottom>{achievement.completed ? achievement.name : "???"}</Typography>
            <Typography variant="body2">{achievement.completed ? achievement.description : "?????????????????"}</Typography>
        </Paper>
    );
};