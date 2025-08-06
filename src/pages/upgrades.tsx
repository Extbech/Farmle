import { Box, Typography, LinearProgress } from "@mui/material";
import { getAllUpgradesSorted } from "../logic/upgradeLogic";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { UpgradeContainer } from "../components/upgrades/upgradeContainer";

export const Upgrades = () => {
    const state = useSelector((state: RootState) => state);
    const upgrades = getAllUpgradesSorted(state);
    
    // Calculate progress
    const total = upgrades.length;
    const purchased = upgrades.filter(u => u.purchased).length;
    const percent = total > 0 ? (purchased / total) * 100 : 0;

    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%', m: 2 }}>
                <Typography variant="h6" alignSelf='center' sx={{ mb: 0.5 }}>
                    Progress: {purchased} / {total} upgrades purchased
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={percent}
                    sx={{ height: 14, borderRadius: 6, backgroundColor: '#eee', '& .MuiLinearProgress-bar': { backgroundColor: (theme) => theme.palette.primary.main } }}
                />
            </Box>
            <UpgradeContainer upgrades={upgrades} />
        </Box>
    )
};