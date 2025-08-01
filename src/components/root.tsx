import { Box } from "@mui/material"
import { Header } from "./header/header"
import { Outlet } from "react-router"

export const Root = () => {
    return (
        <Box sx={{marginLeft: '280px'}}>
            <Header />
            <Box sx={{display: 'flex', flexDirection: 'column', mx: 1}}>
                < Outlet />
            </Box>
        </Box>
    )
}