import { Box, Button, Drawer, Typography } from "@mui/material";
import { useLocation } from "react-router";

export const SideBar = () => {
    const location = useLocation();
    return (
        <Drawer variant="permanent" anchor="left" sx={{ '& .MuiDrawer-paper': { backgroundColor: '#1d2137ff', color: '#fff' } }}>
            <Box sx={{ width: '250px', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ marginBottom: 3 }} alignSelf={'center'}>
                    Farmle
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 3, flexGrow: 1}}>
                <Button
                variant={location.pathname === "/Farmle/" ? "contained" : "outlined"}
                color="primary" 
                href="/Farmle/" 
                fullWidth 
                sx={{ height: '45px'}}
                >
                    <Typography variant="h6">Farm</Typography>
                </Button>
                <Button 
                variant={location.pathname === "/Farmle/upgrades" ? "contained" : "outlined"}
                color="primary" 
                href="/Farmle/upgrades" 
                fullWidth 
                sx={{ height: '45px'}}
                >
                    <Typography variant="h6">Upgrades</Typography>
                </Button>
                <Button 
                variant={location.pathname === "/Farmle/achievements" ? "contained" : "outlined"}
                color="primary" 
                href="/Farmle/achievements" 
                fullWidth 
                sx={{ height: '45px'}}
                >
                    <Typography variant="h6">Achievements</Typography>
                </Button>
                <Button 
                variant={location.pathname === "/Farmle/prestige" ? "contained" : "outlined"}
                color="primary" 
                href="/Farmle/prestige" 
                fullWidth 
                sx={{ height: '45px'}}
                >
                    <Typography variant="h6">Prestige</Typography>
                </Button>
                {process.env.NODE_ENV !== 'production' && (
                    <Button 
                    variant={location.pathname === "/Farmle/dev" ? "contained" : "outlined"}
                    color="primary" 
                    href="/Farmle/dev" 
                    fullWidth 
                    sx={{ height: '45px'}}
                    >
                        <Typography variant="h6">Development</Typography>
                    </Button>
                )}
                </Box>
                <Button 
                variant={location.pathname === "/Farmle/settings" ? "contained" : "outlined"}
                color="primary" 
                href="/Farmle/settings" 
                fullWidth 
                sx={{ height: '45px'}}
                >
                    <Typography variant="h6">Settings</Typography>
                </Button>
                {/* Add navigation links or buttons here to create more pages.*/}
            </Box>
        </Drawer>
    );
}