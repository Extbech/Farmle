import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store";
import { FormatNumber } from "../../helper/numberFormatter";
import { getTotalWPS } from "../../logic/gameLogic";
import GrassIcon from '@mui/icons-material/Grass';

export const HeaderGameStats = () => {
    const state = useSelector((state: RootState) => state);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Typography variant="h6">Prestige Points: {state.game.prestigePoints}</Typography>
            <Typography variant="h6">WPS: {FormatNumber(getTotalWPS(state))}</Typography>
            <Typography variant="h6">
                <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                    Wheat: {FormatNumber(state.game.wheat)}
                    <GrassIcon fontSize="medium" sx={{ color: '#FFD700', ml: 0.5, mb: 0.4 }} />
                </Box>
            </Typography>
        </Box>
    )
}