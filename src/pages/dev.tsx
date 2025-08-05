import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { incrementWheat } from "../store/gameSlice";
import { TickRateInMilliseconds } from "../configuration/gameConstants";
import { FormatNumber } from "../helper/numberFormatter";

export const Dev = () => {
    const dispatch = useDispatch();
    const wheatGain = 10_000_000;
    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Development</Typography>
            <Typography variant="body1">Configure your development settings here.</Typography>
            <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => dispatch(incrementWheat(wheatGain))}
            >
                Gain {FormatNumber(wheatGain * (TickRateInMilliseconds / 1000))} Wheat
            </Button>
        </Box>
    )
}