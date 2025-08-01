import { Box, Paper, Typography } from "@mui/material";
import { type Upgrade } from "../../store/upgradeSlice";
import { FormatNumber } from "../../helper/numberFormatter";
import GrassIcon from '@mui/icons-material/Grass';

export const UpgradeHistoryItem = ({ upgrade }: { upgrade: Upgrade }) => {

    return (
        <Paper
            elevation={upgrade.purchased ? 6 : 1}
            sx={{
                padding: 2,
                margin: 1,
                maxWidth: 200,
                opacity: upgrade.purchased ? 1 : 0.8,
                transition: 'transform 0.15s, box-shadow 0.15s, background 0.15s',
                backgroundColor: upgrade.purchased ? 'rgb(25, 118, 210)' : '#bc3636ff',
                color: upgrade.purchased ? '#fff' : '#fdfdfdff',
            }}
        >
            <Typography variant="h6">{upgrade.name}</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                    Wheat: {FormatNumber(upgrade.cost)}
                    <GrassIcon fontSize="medium" sx={{ color: '#FFD700', ml: 0.2, mb: 0.5 }} />
                </Box>
            </Typography>
            <Typography variant="body2">{upgrade.description}</Typography>
        </Paper>
    );
}