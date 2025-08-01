import { Box, Typography } from "@mui/material";

export const Prestige = () => {
    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Prestige</Typography>
            <Typography variant="body1">Manage your prestige settings here.</Typography>
        </Box>
    );
}