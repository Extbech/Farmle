import { Box, Typography } from "@mui/material"

export const NotFound = () => {
    return (
        <Box sx={{ padding: 2, ml: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ marginTop: 4 }}>
                Page Not Found
            </Typography>
        </Box>
    )
}