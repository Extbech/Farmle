import { Box, Divider } from "@mui/material"
import { Farmers } from "../components/farm/farmers"
import { Tractors } from "../components/farm/Tractors"
import { getAvailableUpgradesUnderMaxItems } from "../logic/upgradeLogic"
import type { RootState } from "../store/store"
import { useSelector } from "react-redux"
import { UpgradeContainer } from "../components/upgrades/upgradeContainer"
import { Barns } from "../components/farm/barns"
import { Whickens } from "../components/farm/whickens"
import { Wows } from "../components/farm/wows"
import { Fertilizers } from "../components/farm/fertilizers"
import { PurchaseAmountFilter } from "../components/farm/purchaseAmountFilter"

export const Farm = () => {
    const state = useSelector((state: RootState) => state);
    const upgrades = getAvailableUpgradesUnderMaxItems(state);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', maxHeight: '100%' }}>
            {upgrades.length > 0 && (
                <>
                <UpgradeContainer upgrades={upgrades} />
                <Divider sx={{ margin: 1 }} />
                </>
            )}
            <PurchaseAmountFilter />
            <Fertilizers />
            <Whickens />
            <Wows />
            <Farmers />
            <Tractors />
            <Barns />
            {/* Add more upgrade components */}
        </Box>
    )
}