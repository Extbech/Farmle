
import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { HeaderGameStats } from "./headerGameStats"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export const Header = () => {
    const prestigePoints = useSelector((state: RootState) => state.game.prestigePoints);

    const dispatch = useDispatch();
    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset all progress?")) {
            dispatch({ type: "RESET_ALL" });
        }
    };
    return (
        <AppBar position="sticky" sx={{marginLeft: 0, padding: 0, height: '70px', backgroundColor: '#1d2137ff'}}>
            <Toolbar>
                <Box sx={{flexGrow: 1}}>
                <HeaderGameStats />
                </Box>
                <Box>
                    {prestigePoints > 0 && (
                        <Button color="primary" variant="contained">
                            Prestige
                        </Button>
                    )}
                    <Button color="primary" variant="contained" onClick={handleReset} sx={{ ml: 2 }}>
                        Reset
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}