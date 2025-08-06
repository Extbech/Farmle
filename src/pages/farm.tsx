import { Box } from "@mui/material"
import { Farmers } from "../components/farm/farmers"
import { Tractors } from "../components/farm/Tractors"
import { Barns } from "../components/farm/barns"
import { Whickens } from "../components/farm/whickens"
import { Wows } from "../components/farm/wows"
import { Fertilizers } from "../components/farm/fertilizers"
import { PurchaseAmountFilter } from "../components/farm/purchaseAmountFilter"
import { FarmClickerArea } from "../components/farmClicker/farmClickerArea"

export const Farm = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', minHeight: '100px', background: (theme) => theme.palette.background.default}}>
            
            {/* Farm Clicker Area */}
            <FarmClickerArea />

            {/* Purchase Amount Filter */}
            <PurchaseAmountFilter />
            
            {/* Farm Upgrade Components */}
            <Fertilizers />
            <Whickens />
            <Wows />
            <Farmers />
            <Tractors />
            <Barns />
        </Box>
    )
}