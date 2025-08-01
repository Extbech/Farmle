import { Box, Typography, LinearProgress } from "@mui/material";
import { getAllUpgradesSortByPurchased } from "../logic/upgradeLogic";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { UpgradeHistoryItem } from "../components/upgrades/upgradeHistoryItem";

export const Upgrades = () => {
    const state = useSelector((state: RootState) => state);
    const upgrades = getAllUpgradesSortByPurchased(state);
    // Calculate progress
    const total = upgrades.length;
    const purchased = upgrades.filter(u => u.purchased).length;
    const percent = total > 0 ? (purchased / total) * 100 : 0;

    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Upgrades
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%', m: 2 }}>
                <Typography variant="body1" alignSelf='center' sx={{ mb: 0.5 }}>
                    Progress: {purchased} / {total} upgrades purchased
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={percent}
                    sx={{ height: 14, borderRadius: 6, backgroundColor: '#eee', '& .MuiLinearProgress-bar': { backgroundColor: '#1976d2' } }}
                />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
                {upgrades.map((upgrade) => (
                    <UpgradeHistoryItem key={upgrade.id} upgrade={upgrade} />
                ))}
            </Box>
        </Box>
    )
};