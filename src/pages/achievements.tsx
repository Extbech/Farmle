import { Box, Typography } from "@mui/material";

export const Achievements = () => {
    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Achievements</Typography>
            <Typography variant="body1">View your achievements here.</Typography>
        </Box>
    );
}