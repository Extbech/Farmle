import { Box, Paper, Tooltip, Typography } from "@mui/material";
import { updateMult, type Upgrade } from "../../store/upgradeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { FormatNumber } from "../../helper/numberFormatter";
import GrassIcon from '@mui/icons-material/Grass';

export const UpgradeItem = ({ upgrade }: { upgrade: Upgrade }) => {
    const dispatch = useDispatch();
    const wheat = useSelector((state: RootState) => state.game.wheat);
    
    const canUpgrade = wheat >= upgrade.cost;
    
    const upgradeAction = () => {
        if (canUpgrade && !upgrade.purchased) {
            dispatch(spendWheat(upgrade.cost));
            dispatch(updateMult({
                id: upgrade.id,
                internalId: upgrade.internalId
            }));
        }
    }
    const tooltipTitle = () => {
        if (upgrade.purchased) {
            return "Upgrade purchased";
        }
        return canUpgrade && upgrade.available ? "Click to upgrade" : "Not enough wheat";
    }

    return (
        <Tooltip title={tooltipTitle()}>
            <Paper
                elevation={canUpgrade ? 6 : 1}
                sx={{
                    padding: 2,
                    margin: 1,
                    width: 230,
                    height: 170,
                    opacity: canUpgrade || upgrade.purchased ? 1 : 0.8,
                    cursor: 'pointer',
                    transition: 'transform 0.15s, box-shadow 0.15s, background 0.15s',
                    backgroundColor: (theme) => upgrade.purchased ? 'rgb(25, 118, 210)' : canUpgrade && upgrade.available ? theme.palette.primary.main : '#888',
                    color: canUpgrade ? '#fff' : '#eee',
                    '&:hover': canUpgrade ? {
                        transform: 'scale(1.04)',
                        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
                    } : {},
                }}
                onClick={canUpgrade && !upgrade.purchased && upgrade.available ? upgradeAction : undefined}
            >
                <Typography variant="h6">{upgrade.available ? upgrade.name : "???"}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                        {upgrade.available ? `Wheat: ${FormatNumber(upgrade.cost)}` : "???"}
                        <GrassIcon fontSize="medium" sx={{ color: (theme) => theme.palette.secondary.main, ml: 0.2, mb: 0.5 }} />
                    </Box>
                </Typography>
                <Typography variant="body2">{upgrade.available ? upgrade.description : "?????????????????"}</Typography>
            </Paper>
        </Tooltip>
    );
}