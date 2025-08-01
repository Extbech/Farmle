import { Box } from "@mui/material"
import type { Upgrade } from "../../store/upgradeSlice"
import { UpgradeItem } from "./upgradeItem"

/**
 * Container component for future upgrades. Only allowed to show `MaxItems` items at a time.
 */
export const UpgradeContainer = ({upgrades}: {upgrades: Upgrade[]}) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
            {upgrades.map((upgrade) => (
                <UpgradeItem key={upgrade.id} upgrade={upgrade} />
            ))}
        </Box>
    )
}