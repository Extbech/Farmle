import { Box } from "@mui/material"
import { Header } from "./header/header"
import { Outlet } from "react-router"
import { SnackbarProvider } from "notistack"
import { SideBar } from "./sidebar/sideBar"

export const Root = () => {
    return (
        <Box>
            <SideBar />
            <Box sx={{marginLeft: '275px'}}>
                <Header />
                <SnackbarProvider />
                <Box sx={{display: 'flex', flexDirection: 'column', mx: 1}}>
                    < Outlet />
                </Box>
            </Box>
        </Box>
    )
}