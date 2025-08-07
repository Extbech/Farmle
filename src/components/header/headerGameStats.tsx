import { Box, Tooltip, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store";
import { FormatNumber } from "../../helper/numberFormatter";
import { getTotalWPS } from "../../logic/gameLogic";
import GrassIcon from '@mui/icons-material/Grass';

export const HeaderGameStats = () => {
    const state = useSelector((state: RootState) => state);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Tooltip title={
                <Typography>
                    {FormatNumber(state.game.cumulativeWheat)} / {FormatNumber(state.prestige.metadata.prestigeBreakPoint)}
                </Typography>
                }>
                <Typography variant="h6">Prestige Points: {state.prestige.metadata.prestigePointsOwned}</Typography>
            </Tooltip>
            <Typography variant="h6">WPS: {FormatNumber(getTotalWPS(state))}</Typography>
            <Typography variant="h6">
                <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                    Wheat: {FormatNumber(state.game.wheat)}
                    <GrassIcon fontSize="medium" sx={{ color: (theme) => theme.palette.secondary.main, ml: 0.5, mb: 0.4 }} />
                </Box>
            </Typography>
        </Box>
    )
}