import { Box, Typography } from "@mui/material";

export const Settings = () => {
    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Settings</Typography>
            <Typography variant="body1">Configure your settings here.</Typography>
        </Box>
    );
}