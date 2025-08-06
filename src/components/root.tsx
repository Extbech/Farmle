import { Box } from "@mui/material"
import { Header } from "./header/header"
import { Outlet } from "react-router"
import { SnackbarProvider } from "notistack"
import { SideBar } from "./sidebar/sideBar"

export const Root = () => {
    return (
        <Box>
            <SideBar />
            <Box sx={{marginLeft: '250px', mr: '5px'}}>
                <Header />
                <SnackbarProvider />
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}